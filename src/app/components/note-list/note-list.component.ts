import {Component, OnInit} from '@angular/core';
import {Note} from '../../model/note.model';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {State} from '../../store/notes.reducers';
import * as actions from '../../store/notes.actions';
import {selectAllNotes} from '../../store/notes.selectors';
import {first} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {RemoveNoteDialogComponent} from '../note-remove-dialog/remove-note-dialog.component';

@Component({
  selector: 'bsc-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  notes$: Observable<Note[]>;

  constructor(
    private store: Store<State>,
    private dialog: MatDialog,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(actions.LoadAllNotes());
    this.notes$ = this.store.pipe(select(selectAllNotes));
  }

  async openNewNoteDialog(): Promise<void> {
    await this.router.navigate(['new']);
  }

  async openEditDialog(note: Note): Promise<void> {
    await this.router.navigate(['edit', note.id]);
  }

  async openInfoDialog(note: Note): Promise<void> {
    await this.router.navigate(['info', note.id]);
  }

  openDeleteDialog(note: Note): void {
    const dialogRef = this.dialog.open(RemoveNoteDialogComponent, {
      width: '450px',
      data: note
    });

    this.subscribeCallbackToDialog(dialogRef.afterClosed())(this.removeNote.bind(this));
  }

  removeNote({ id: noteId }: Note) {
    this.store.dispatch(actions.RemoveNote({ noteId }));
  }

  private subscribeCallbackToDialog<T>(dialogEvent$: Observable<any>): (eventFn: (data: T) => void) => void {
    return (eventFn: (data: T) => void): void => {
      this.subscribeToFirst<T>(dialogEvent$, result => {
        if (result) eventFn(result);
      });
    };
  }

  private subscribeToFirst<T>(observable: Observable<T>, callback: (data: T) => void): void {
    observable.pipe(first()).subscribe(callback);
  }

  trackByFn(element) {
    return element.id;
  }
}
