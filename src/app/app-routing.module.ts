import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoteListComponent} from './components/note-list/note-list.component';
import {NoteInfoComponent} from './components/note-info/note-info.component';
import {NoteEditComponent} from './components/note-edit/note-edit.component';
import {NoteCreateComponent} from './components/note-create/note-create.component';


const routes: Routes = [
  {
    path: '',
    component: NoteListComponent,
  },
  {
    path: 'new',
    component: NoteCreateComponent,
  },
  {
    path: 'edit/:id',
    component: NoteEditComponent,
  },
  {
    path: 'info/:id',
    component: NoteInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
