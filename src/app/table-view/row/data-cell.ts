export class DataCell {
  isWeekend = false;
  hourCount = 0;
  constructor(weekend: boolean, count: number) {
    this.isWeekend = weekend;
    this.hourCount = count;
  }
}
