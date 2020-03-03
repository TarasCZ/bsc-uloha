import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoteListComponent} from './components/note-list/note-list.component';
import {NoteComponent} from './components/note/note.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NotesEffects} from './store/notes.effects';
import {notesReducer} from './store/notes.reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {UiModule} from './ui.module';
import {ClickStopPropagationDirective} from './directives/click-stop-propagation.directive';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NoteInfoComponent} from './components/note-info/note-info.component';
import {RemoveNoteDialogComponent} from './components/note-remove-dialog/remove-note-dialog.component';
import {NoteEditComponent} from './components/note-edit/note-edit.component';
import {NoteCreateComponent} from './components/note-create/note-create.component';

const storeConfig = {
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true
  }
};

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteListComponent,
    NoteInfoComponent,
    NoteEditComponent,
    NoteCreateComponent,
    RemoveNoteDialogComponent,
    ClickStopPropagationDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({ notes: notesReducer }, storeConfig),
    EffectsModule.forRoot([NotesEffects]),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    HttpClientModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `assets/i18n/`,
    '.json'
  );
}
