import { Component, OnInit, Input } from '@angular/core';
import { Row } from './row';

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
  hourInputs: number[];
  summation = 0;
  customTrackBy(index: number, obj: any): any {
    return index;
  }
  constructor() {}

  ngOnInit() {
    // this.hourInputs = Array.from({ length: this.row.dayCount }, (v, k) => 0);
    this.register(this, this.row.workType === undefined);
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
    this.updateSumCallback();
  }
}
