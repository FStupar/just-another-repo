import { IntervalDataService } from './interval-data.service';
import { RowComponent } from './row/row.component';
import { Component, OnInit } from '@angular/core';
import { Row } from './row/row';

@Component({
  selector: 'pro-tent-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  rows: Row[];
  specialRows: Row[];
  masterRow: Row;
  days: number[];
  rowComponents: RowComponent[] = new Array();
  currentDate: Date = new Date();
  searchField: string;
  constructor(private dataService: IntervalDataService) {}

  ngOnInit() {
    this.loadData(this.currentDate);
  }

  getDaySequenceForMonth(date: Date) {
    return this.dataService.getDaySequenceForMonth(date);
  }

  saveData = () => {
    console.log(this.rows);
    this.dataService.saveData({
      date: this.currentDate,
      masterRow: this.masterRow,
      rows: this.rows,
      specialRows: this.specialRows
    });
  }

  loadData = (date: Date) => {
    this.currentDate = date;
    const rowData = this.dataService.getEmptyDataForMonth(date);
    this.masterRow = rowData.masterRow;
    this.rows = rowData.rows;
    this.specialRows = rowData.specialRows;
    this.dataService.getDataFor(this.currentDate).subscribe(result => {
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
