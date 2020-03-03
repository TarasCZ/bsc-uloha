import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Note} from '../../model/note.model';

@Component({
  selector: 'bsc-delete-note-dialog',
  templateUrl: './remove-note-dialog.component.html',
})
export class RemoveNoteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RemoveNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Note
  ) { }

  onCancel(): void {
    this.dialogRef.close();
  }
}
