import { DateTime } from 'luxon';

export const FormatDate = (date: string,format:string = "LLL yyyy", locale: string = 'en') =>
  DateTime.fromISO(date).setLocale(locale).toFormat(format);
