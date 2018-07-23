import { Component, OnInit, Inject, Input } from '@angular/core';

const MONTH_NAMES = [
  'Januar',
  'Februar',
  'Mart',
  'April',
  'Maj',
  'Jun',
  'Jul',
  'Avgust',
  'Septembar',
  'Oktobar',
  'Novembar',
  'Decembar'
];

@Component({
  selector: 'pro-tent-table-info-header',
  templateUrl: './table-info-header.component.html',
  styleUrls: ['./table-info-header.component.scss']
})
export class TableInfoHeaderComponent implements OnInit {
  @Input() currentDate: Date;
  @Input() loadData: Function;
  @Input() saveData: Function;

  constructor() {}

  ngOnInit() {
    this.getMonthName();
  }

  changeMonth = (offset: number) => {
    this.currentDate.setMonth(this.currentDate.getMonth() + offset);
    this.loadData(this.currentDate);
  }


  getMonthName = () => {
    return (
      MONTH_NAMES[this.currentDate.getMonth()] +
      ' ' +
      this.currentDate.getFullYear()
    );
  }
}
