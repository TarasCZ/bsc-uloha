import {createAction, props} from '@ngrx/store';
import {Note} from '../model/note.model';

export const LoadAllNotes = createAction(
  '[Notes] Load all notes'
);

export const LoadAllNotesSuccess = createAction(
  '[Notes] All notes loaded successfully',
  props<{ notes: Note[] }>()
);

export const LoadNote = createAction(
  '[Note] Load note',
  props<{ noteId: number }>()
);

export const LoadNoteSuccess = createAction(
  '[Note] Note loaded successfully',
  props<{ note: Note }>()
);

export const DeselectNote = createAction(
  '[Note] Deselect selected note'
);

export const CreateNote = createAction(
  '[Note] Create note',
  props<{ note: Note }>()
);

export const CreateNoteSuccess = createAction(
  '[Note] Note created successfully',
  props<{ note: Note }>()
);

export const UpdateNote = createAction(
  '[Note] Update note',
  props<{ note: Note }>()
);

export const UpdateNoteSuccess = createAction(
  '[Note] Note updated successfully',
  props<{ note: Note }>()
);

export const RemoveNote = createAction(
  '[Note] Remove note',
  props<{ noteId: number }>()
);

export const RemoveNoteSuccess = createAction(
  '[Note] Note removed successfully',
  props<{ noteId: number }>()
);
