import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  compareInHours(startDate: Date, endDate: Date): number {
    const end_date_utc = this.convertToUTC(endDate);
    const start_date_utc = this.convertToUTC(startDate);

    const compare = dayjs(end_date_utc).diff(start_date_utc, "hours");

    return compare;
  }

  addDays(daysToAdd: number) {
    const sum = dayjs().add(daysToAdd, "days");

    const convertedSum = this.convertToUTC(sum.toDate());

    return convertedSum;
  }

  addHours(hoursToAdd: number): string {
    const sum = dayjs().add(hoursToAdd, "hours");

    const convertedSum = this.convertToUTC(sum.toDate());

    return convertedSum;
  }

  convertToUTC(date: Date): string {
    return dayjs(date).utc().local().format();
  }

  dateNow(): Date {
    return dayjs().toDate();
  }

  compareInDays(startDate: Date, endDate: Date): number {
    const end_date_utc = this.convertToUTC(endDate);
    const start_date_utc = this.convertToUTC(startDate);

    const compare = dayjs(end_date_utc).diff(start_date_utc, "days");

    return compare;
  }

  compareIfBefore(startDate: Date, endDate: Date): boolean {
    return dayjs(startDate).isBefore(endDate);
  }
}

export { DayjsDateProvider };
