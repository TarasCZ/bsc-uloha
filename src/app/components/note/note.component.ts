import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Note} from '../../model/note.model';

@Component({
  selector: 'bsc-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  @Input() note: Note;
  @Output() deleteNote: EventEmitter<void> = new EventEmitter<void>();
  @Output() updateNote: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() showInfo: EventEmitter<void> = new EventEmitter<void>();
}
