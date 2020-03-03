import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Note} from '../../model/note.model';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {State} from '../../store/notes.reducers';
import {selectSelectedNote} from '../../store/notes.selectors';
import {DeselectNote, LoadNote, UpdateNote} from '../../store/notes.actions';

@Component({
  selector: 'bsc-edit-note-dialog',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss'],
})
export class NoteEditComponent implements OnInit, OnDestroy {
  note$: Observable<Note>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>
  ) {
  }

  ngOnInit() {
    this.note$ = this.store.pipe(select(selectSelectedNote));
    const noteId = this.route.snapshot.params.id;
    this.store.dispatch(LoadNote({ noteId }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(DeselectNote());
  }

  onSave(note: Note): void {
    this.store.dispatch(UpdateNote({ note }));
  }
}
