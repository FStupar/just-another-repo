import { Injectable } from '@angular/core';
import { Row } from './row/row';
import WORKTYPES from './row/workTypes.mock';
import { Observable, of } from '../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class IntervalDataService {
  dayCount: number;
  workTypes = WORKTYPES;

  constructor() {}

  getDataFor(date: Date) {
    return of(this.getDataForMonth(date));
  }

  getDataForMonth(date: Date) {
    return JSON.parse(localStorage.getItem(this.getSaveKey(date)));
  }
  getSaveKey(date: Date) {
    return date.getMonth() + '-' + date.getFullYear();
  }
  getEmptyDataForMonth = (date: Date) => {
    const rows: Row[] = [];
    let masterRow: Row;
    this.dayCount = this.getDaysInMonth(date);
    this.workTypes.forEach(item => {
      if (item.name !== undefined) {
        rows.push(
          new Row(this.dayCount, item.name, item.code, item.hasDayCount)
        );
      } else {
        masterRow = new Row(
          this.dayCount,
          item.name,
          item.code,
          item.hasDayCount
        );
      }
    });
    return { masterRow, rows };
  }

  saveData(data) {
    console.log('received data', data);
    localStorage.setItem(this.getSaveKey(data.date), JSON.stringify(data));
  }

  getDaysInMonth(anyDateInMonth) {
    return new Date(
      anyDateInMonth.getFullYear(),
      anyDateInMonth.getMonth() + 1,
      0
    ).getDate();
  }

  initDataForMonth(date: Date = new Date(), interval: string = 'month') {
    this.dayCount = this.getDaysInMonth(date);
  }
}
