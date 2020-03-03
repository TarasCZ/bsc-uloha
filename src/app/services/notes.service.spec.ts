import {NotesService} from './notes.service';
import {Note} from '../model/note.model';
import {of} from 'rxjs';
import {first} from 'rxjs/operators';

describe('NotesService', () => {
  const testNote: Note = {
    id: 1,
    title: 'test note'
  };

  let service: NotesService;
  let httpMock: any;

  beforeEach(() => {
    httpMock = {
      get: jasmine.createSpy().and.returnValue(of(testNote)),
      post: jasmine.createSpy().and.returnValue(of(testNote)),
      put: jasmine.createSpy().and.returnValue(of(testNote)),
      delete: jasmine.createSpy().and.returnValue(of({}))
    };
    service = new NotesService(httpMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update note', (done) => {
    const expectedUrl = `${NotesService.API_URL}notes/${testNote.id}`;

    service.updateNote(testNote).pipe(first()).subscribe(() => {
      expect(httpMock.put).toHaveBeenCalledWith(expectedUrl, testNote);
      done();
    });
  });

  it('should create note', (done) => {
    const expectedUrl = `${NotesService.API_URL}notes`;

    service.createNote(testNote).pipe(first()).subscribe(() => {
      expect(httpMock.post).toHaveBeenCalledWith(expectedUrl, testNote);
      done();
    });
  });

  it('should remove note', (done) => {
    const expectedUrl = `${NotesService.API_URL}notes/${testNote.id}`;

    service.removeNote(testNote.id).pipe(first()).subscribe(() => {
      expect(httpMock.delete).toHaveBeenCalledWith(expectedUrl);
      done();
    });
  });

  it('should fetch note', (done) => {
    const expectedUrl = `${NotesService.API_URL}notes/${testNote.id}`;

    service.getNote(testNote.id).pipe(first()).subscribe(() => {
      expect(httpMock.get).toHaveBeenCalledWith(expectedUrl);
      done();
    });
  });
});
