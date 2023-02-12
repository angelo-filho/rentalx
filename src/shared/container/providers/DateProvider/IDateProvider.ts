interface IDateProvider {
  compareInHours(startDate: Date, endDate: Date): number;
  addDays(daysToAdd: number): string;
  addHours(hoursToAdd: number): string;
  convertToUTC(date: Date): string;
  dateNow(): Date;
  compareInDays(startDate: Date, endDate: Date): number;
  compareIfBefore(startDate: Date, endDate: Date): boolean;
}

export { IDateProvider };
