import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogRef
} from '../../../node_modules/@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openConfirmDialog = (
    text: string,
    confirm: Function
  ): MatDialogRef<ConfirmComponent> => {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '400px',
      data: { text: text, confirm: confirm }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    return dialogRef;
  }
}
