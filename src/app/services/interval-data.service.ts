import { Injectable } from '@angular/core';
import { Row } from '../table-view/row/row';
import { Observable, of } from 'rxjs';
import WORKTYPES from '../table-view/row/workTypes.mock';

const DAYS = ['po', 'ut', 'sr', 'če', 'pe', 'su', 'ne'];

@Injectable({
  providedIn: 'root'
})
export class IntervalDataService {
  dayCount: number;
  workTypes = WORKTYPES;

  constructor() {
    console.log('intervla service');
  }

  getDataFor(data) {
    return of(this.getDataForMonth(data));
  }

  getDaySequenceForMonth(date: Date) {
    const startDay = new Date(date.getFullYear(), date.getMonth(), 0).getDay();
    const dayArray: string[] = [];
    for (let i = 0; i < 7; i++) {
      dayArray.push(DAYS[(i + startDay) % 7]);
    }
    return dayArray;
  }

  getDataForMonth(data: any) {
    return JSON.parse(localStorage.getItem(this.getSaveKey(data)));
  }

  getSaveKey(data: any) {
    if (data && data.user && data.user.name && data.date) {
      return (
        data.user.name +
        '/' +
        data.date.getMonth() +
        '-' +
        data.date.getFullYear()
      );
    }
  }
  getEmptyDataForMonth = (date: Date) => {
    const rows: Row[] = [];
    const specialRows: Row[] = [];
    const user = undefined;
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
    return { masterRow, rows, specialRows, user };
  }

  saveData(data) {
    return of(
      localStorage.setItem(this.getSaveKey(data), JSON.stringify(data))
    );
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
