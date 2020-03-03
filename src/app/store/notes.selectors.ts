import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromNotes from './notes.reducers';
import {NoteState} from './notes.reducers';

const selectState = createFeatureSelector<NoteState>('notes');

export const selectAllNotes = createSelector(
  selectState,
  fromNotes.selectAll
);

export const selectSelectedNote = createSelector(
  selectState,
  state => state.selectedNote
);
