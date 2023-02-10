interface IDateProvider {
  compareInHours(start_date: Date, end_date: Date): number;
  addDays(days_to_add: number): string;
  convertToUTC(date: Date): string;
  dateNow(): Date;
  compareInDays(start_date: Date, end_date: Date): number;
}

export { IDateProvider };
