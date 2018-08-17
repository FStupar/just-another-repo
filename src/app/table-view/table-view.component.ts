import { DialogService } from './../services/dialog.service';
import { IntervalDataService } from '../services/interval-data.service';
import { RowComponent } from './row/row.component';
import { Component, OnInit } from '@angular/core';
import { Row } from './row/row';
import { MatSnackBar, MatDialog } from '@angular/material';
import { User } from './row/users.mock';

@Component({
  selector: 'pro-tent-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  rows: Row[];
  specialRows: Row[];
  masterRow: Row;
  user: User;
  days: number[];
  rowComponents: RowComponent[] = new Array();
  currentDate: Date = new Date();
  searchField: string;
  constructor(
    private dataService: IntervalDataService,
    public dialogService: DialogService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadData(this.currentDate, this.user);
  }

  setUser = (user: User) => {
    console.log('changing user to ', user);
    this.user = user;
  }

  getDaySequenceForMonth(date: Date) {
    return this.dataService.getDaySequenceForMonth(date);
  }

  save = () => {
    if (!this.user) {
      this.snackBar.open('Zaposleni nije izabran', undefined, {
        duration: 1500
      });
      return;
    }
    this.dialogService.openConfirmDialog(
      '<h1>Da li želite da snimite? Naknadne prepravke nisu moguće</h1>',
      this.saveData
    );
  }

  clear = () => {
    this.dialogService.openConfirmDialog(
      '<h1>Da li ste sigurni da želite da obrišete podatke?</h1>',
      this.clearData
    );
  }

  saveData = () => {
    this.dataService
      .saveData({
        date: this.currentDate,
        user: this.user,
        masterRow: this.masterRow,
        rows: this.rows,
        specialRows: this.specialRows
      })
      .subscribe(() =>
        this.snackBar.open('Izveštaj o radu uspešno snimljen.', undefined, {
          duration: 1500
        })
      );
  }

  clearData = () => {
    this.rows.forEach(row => {
      row.hourInputs = Array.from({ length: row.dayCount }).fill(0);
      row.summation = 0;
    });
    this.specialRows.forEach(row => {
      row.hourInputs = Array.from({ length: row.dayCount }).fill(0);
      row.summation = 0;
    });
    this.masterRow.summation = 0;
    this.dataService.clearDataFor(this.currentDate);
  }

  loadData = (date: Date, user: User) => {
    this.currentDate = date;
    const rowData = this.dataService.getEmptyDataForMonth(date);
    this.masterRow = rowData.masterRow;
    this.rows = rowData.rows;
    this.specialRows = rowData.specialRows;
    // this.user = rowData.user;
    this.dataService
      .getDataFor({ date: this.currentDate, user: user })
      .subscribe(result => {
        if (result) {
          if (result.masterRow) {
            this.masterRow = result.masterRow;
          }
          if (result.rows) {
            this.rows = result.rows;
          }
          if (result.specialRows) {
            this.specialRows = result.specialRows;
          }
          if (result.user) {
            this.user = result.user;
          }
        }
      });
    this.days = this.getCellArrayFor(
      this.dataService.getDaysInMonth(this.currentDate)
    );
  }

  register = (row: RowComponent, masterRow: boolean = false) => {
    this.rowComponents.push(row);
  }

  updateTotalSum = () => {
    this.masterRow.summation = 0;
    this.rows.forEach(row => {
      this.masterRow.summation += row.summation;
    });
  }

  getCellArrayFor(count: number = 30) {
    return Array.from({ length: count }, (v, k) => k + 1);
  }
}
