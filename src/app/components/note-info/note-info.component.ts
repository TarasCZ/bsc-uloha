import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {State} from '../../store/notes.reducers';
import {Note} from '../../model/note.model';
import {Observable} from 'rxjs';
import {selectSelectedNote} from '../../store/notes.selectors';
import {DeselectNote, LoadNote} from '../../store/notes.actions';

@Component({
  selector: 'bsc-info-note-dialog',
  templateUrl: './note-info.component.html',
  styleUrls: ['./note-info.component.scss'],
})
export class NoteInfoComponent implements OnInit, OnDestroy {
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
}
