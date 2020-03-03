import {createEntityAdapter, EntityState, Update} from '@ngrx/entity';
import {Note} from '../model/note.model';
import {createReducer, on} from '@ngrx/store';
import * as actions from './notes.actions';

export interface NoteState extends EntityState<Note> {
  selectedNote: Note;
}

export interface State {
  notes: NoteState;
}

const notesAdapter = createEntityAdapter<Note>();
export const { selectAll, selectEntities } = notesAdapter.getSelectors();

const initialState: NoteState =  notesAdapter.getInitialState({ selectedNote: undefined });

const NotesReducer = createReducer(
  initialState,

  on(actions.LoadAllNotesSuccess, (state, { notes }) => notesAdapter.addAll(notes, state)),
  on(actions.CreateNoteSuccess, (state, { note }) => notesAdapter.addOne(note, state)),
  on(actions.RemoveNoteSuccess, (state, { noteId }) => notesAdapter.removeOne(noteId, state)),
  on(actions.DeselectNote, (state) => ({
    ...state,
    selectedNote: undefined
  })),
  on(actions.LoadNoteSuccess, (state, { note }) => ({
    ...state,
    selectedNote: note
  })),
  on(actions.UpdateNoteSuccess, (state, { note }) => {
    const updateNote: Update<Note> = {
      id: note.id,
      changes: note
    };

    return notesAdapter.updateOne(updateNote, state);
  })
);

export function notesReducer(state, action) {
  return NotesReducer(state, action);
}
