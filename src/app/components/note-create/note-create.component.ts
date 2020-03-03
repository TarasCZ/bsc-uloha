import {Component} from '@angular/core';
import {createNewNote} from '../../model/note.model';
import {Store} from '@ngrx/store';
import {State} from '../../store/notes.reducers';
import {CreateNote} from '../../store/notes.actions';

@Component({
  selector: 'bsc-edit-note-dialog',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss'],
})
export class NoteCreateComponent {
  title = '';

  constructor(private store: Store<State>) {
  }

  onSave(): void {
    const note = createNewNote(this.title);
    this.store.dispatch(CreateNote({ note }));
  }
}
