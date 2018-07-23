import { IntervalDataService } from './interval-data.service';
import { RowComponent } from './row/row.component';
import { Component, OnInit } from '@angular/core';
import { Row } from './row/row';

const DAYS = ['p', 'u', 's', 'č', 'p', 's', 'n'];
@Component({
  selector: 'pro-tent-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  rows: Row[];
  masterRow: Row;
  days: number[];
  rowComponents: RowComponent[] = new Array();
  currentDate: Date = new Date();
  constructor(private dataService: IntervalDataService) {}

  ngOnInit() {
    this.loadData(this.currentDate);
  }
  getDaySequenceForMonth(date: Date) {
    const startDay = new Date(date.getFullYear(), date.getMonth(), 0).getDay();
    const dayArray: string[] = [];
    for (let i = 0; i < 7; i++) {
      dayArray.push(DAYS[(i + startDay) % 7]);
    }
    return dayArray;
  }

  saveData = () => {
    console.log(this.rows);
    this.dataService.saveData({
      date: this.currentDate,
      masterRow: this.masterRow,
      rows: this.rows
    });
  };

  loadData = (date: Date) => {
    this.currentDate = date;
    const rowData = this.dataService.getEmptyDataForMonth(date);
    this.masterRow = rowData.masterRow;
    this.rows = rowData.rows;
    this.dataService.getDataFor(this.currentDate).subscribe(result => {
      if (result) {
        this.masterRow = result.masterRow;
        this.rows = result.rows;
      }
    });
    this.days = this.getCellArrayFor(
      this.dataService.getDaysInMonth(this.currentDate)
    );
  };
  register = (row: RowComponent, masterRow: boolean = false) => {
    this.rowComponents.push(row);
  };

  updateTotalSum = () => {
    this.masterRow.summation = 0;
    this.rows.forEach(row => {
      this.masterRow.summation += row.summation;
    });
  };

  getCellArrayFor(count: number = 30) {
    return Array.from({ length: count }, (v, k) => k + 1);
  }
}
