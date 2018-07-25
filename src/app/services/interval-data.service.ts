import { Injectable } from '@angular/core';
import { Row } from '../table-view/row/row';
import WORKTYPES from '../table-view/row/workTypes.mock';
import { Observable, of } from 'rxjs';

const DAYS = ['po', 'ut', 'sr', 'če', 'pe', 'su', 'ne'];

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

  getDaySequenceForMonth(date: Date) {
    const startDay = new Date(date.getFullYear(), date.getMonth(), 0).getDay();
    const dayArray: string[] = [];
    for (let i = 0; i < 7; i++) {
      dayArray.push(DAYS[(i + startDay) % 7]);
    }
    return dayArray;
  }

  getDataForMonth(date: Date) {
    return JSON.parse(localStorage.getItem(this.getSaveKey(date)));
  }

  getSaveKey(date: Date) {
    return date.getMonth() + '-' + date.getFullYear();
  }
  getEmptyDataForMonth = (date: Date) => {
    const rows: Row[] = [];
    const specialRows: Row[] = [];
    let masterRow: Row;
    this.dayCount = this.getDaysInMonth(date);
    this.workTypes.forEach(item => {
      if (!item.isSpecial) {
        rows.push(
          new Row(
            this.dayCount,
            item.name,
            item.code,
            item.hasDayCount,
            item.isSpecial
          )
        );
        return;
      }
      if (item.name === undefined) {
        masterRow = new Row(
          this.dayCount,
          item.name,
          item.code,
          item.hasDayCount,
          item.isSpecial
        );
        return;
      }
      specialRows.push(
        new Row(
          this.dayCount,
          item.name,
          item.code,
          item.hasDayCount,
          item.isSpecial
        )
      );
    });
    return { masterRow, rows, specialRows };
  }

  saveData(data) {
    return of(localStorage.setItem(this.getSaveKey(data.date), JSON.stringify(data)));
  }

  clearDataFor(date: Date) {
    localStorage.removeItem(this.getSaveKey(date));
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
