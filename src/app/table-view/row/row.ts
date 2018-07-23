export class Row {
  workType: string;
  code: number;
  dayCount: number;
  hasDayCount: boolean;
  summation = 0;
  hourInputs: any[];

  constructor(
    dayCount: number = 30,
    workType: string,
    code: number,
    hasDayCount: boolean = false
  ) {
    this.workType = workType;
    this.dayCount = dayCount;
    this.hourInputs = Array.from({ length: this.dayCount }, (v, k) => 0);
    this.code = code;
    this.hasDayCount = hasDayCount;
  }
}
