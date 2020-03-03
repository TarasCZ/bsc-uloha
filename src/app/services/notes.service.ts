import {Injectable} from '@angular/core';
import {Note} from '../model/note.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  static readonly API_URL = 'http://private-9aad-note10.apiary-mock.com/';
  constructor(private httpClient: HttpClient) {}

  getNotes(): Observable<Note[]> {
    const url = NotesService.API_URL + 'notes';

    return this.httpClient.get<Note[]>(url);
  }

  getNote(id: number): Observable<Note> {
    const url = `${NotesService.API_URL}notes/${id}`;

    return this.httpClient.get<Note>(url);
  }

  createNote(note: Note): Observable<Note> {
    const url = NotesService.API_URL + 'notes';

    return this.httpClient.post<Note>(url, note);
  }

  updateNote(note: Note): Observable<Note> {
    const url = `${NotesService.API_URL}notes/${note.id}`;

    return this.httpClient.put<Note>(url, note);
  }

  removeNote(id: number): Observable<any> {
    const url = `${NotesService.API_URL}notes/${id}`;

    return this.httpClient.delete<any>(url);
  }
}
