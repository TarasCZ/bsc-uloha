import {NotesService} from '../services/notes.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as actions from './notes.actions';
import {exhaustMap, map, switchMap, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class NotesEffects {

  loadNotes$ = createEffect(() => this.actions$.pipe(
    ofType(actions.LoadAllNotes),
    exhaustMap(action => this.notesService.getNotes()),
    map(notes => actions.LoadAllNotesSuccess({ notes }))
  ));

  loadNote$ = createEffect(() => this.actions$.pipe(
    ofType(actions.LoadNote),
    exhaustMap(action => this.notesService.getNote(action.noteId)),
    map(note => actions.LoadNoteSuccess({ note }))
  ));

  createNote$ = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateNote),
    switchMap(action => this.notesService.createNote(action.note)),
    map(note => actions.CreateNoteSuccess({ note }))
  ));

  updateNote$ = createEffect(() => this.actions$.pipe(
    ofType(actions.UpdateNote),
    switchMap(action => this.notesService.updateNote(action.note)),
    map(note => actions.UpdateNoteSuccess({ note }))
  ));

  removeNote$ = createEffect(() => this.actions$.pipe(
    ofType(actions.RemoveNote),
    switchMap(({ noteId }) => this.notesService.removeNote(noteId).pipe(
      map(() => actions.RemoveNoteSuccess({ noteId }))
    )),
  ));

  constructor(
    private actions$: Actions,
    private notesService: NotesService
  ) {
  }
}
