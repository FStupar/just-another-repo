import { Component, OnInit, Input } from '@angular/core';
import { Row } from './row';
import { IntervalDataService } from '../interval-data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[pro-tent-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() row: Row;
  @Input() updateSumCallback: Function;
  @Input() register: Function;
  @Input() currentDate: Date;

  hourInputs: number[];
  summation = 0;
  customTrackBy(index: number, obj: any): any {
    return index;
  }
  constructor(private dataService: IntervalDataService) {}

  ngOnInit() {
    console.log(
      'isSpecial ',
      this.row.isSpecial,
      ' workType? ',
      this.row.workType
    );
    if (this.register) {
      this.register(this, this.row.workType === undefined);
    }
  }
  isWeekend(day: number) {
    if (!this.row.workType) {
      return;
    }
    const dayName = this.dataService.getDaySequenceForMonth(this.currentDate)[
      day % 7
    ];
    return dayName === 'ne' || dayName === 'su';
  }

  checkValidity(event) {
    if (event.target.value > 24) {
      event.target.value = 24;
    }
  }
  sumUp() {
    this.row.summation = 0;
    this.row.hourInputs.forEach(input => {
      this.row.summation += input;
    });
    if (this.updateSumCallback) {
      this.updateSumCallback();
    }
  }
}
