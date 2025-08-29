import { DateUTC } from './date-utc';
import type { CalendarRangeUTC } from './calendar-range-utc';

export interface CalendarDay {
  date: Date;
  ymd: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isInPreviewRange: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isDisabled: boolean;
}

export class CalendarGeneratorUTC {
  private locale: string;

  constructor(locale: string = 'de-DE') {
    this.locale = locale;
  }

  generateMonth(
    currentDate: Date,
    selectedDate: Date | null,
    rangeHandler?: CalendarRangeUTC,
    disabledDays?: Date[]
  ): CalendarDay[] {
    const firstOfMonth = DateUTC.monthStart(currentDate);
    const start = DateUTC.weekStartMonday(firstOfMonth);
    const today = this.todayUTC();
    const disabledSet = new Set((disabledDays ?? []).map(d => DateUTC.toYMD(d)));

    const days: CalendarDay[] = [];
    for (let i = 0; i < 42; i++) {
      const date = DateUTC.addDays(start, i);
      const ymd = DateUTC.toYMD(date);

      const isCurrentMonth =
        date.getUTCFullYear() === currentDate.getUTCFullYear() && date.getUTCMonth() === currentDate.getUTCMonth();

      const isToday = DateUTC.same(date, today);
      const isWeekend = DateUTC.isWeekend(date);
      const isDisabled = disabledSet.has(ymd);

      let isSelected = false;
      let isInRange = false;
      let isInPreviewRange = false;
      let isRangeStart = false;
      let isRangeEnd = false;

      if (rangeHandler) {
        isRangeStart = rangeHandler.isRangeStart(date);
        isRangeEnd = rangeHandler.isRangeEnd(date);
        isSelected = isRangeStart || isRangeEnd;
        isInRange = rangeHandler.isInRange(date);
        isInPreviewRange = rangeHandler.isInPreviewRange(date);
      } else if (selectedDate) {
        isSelected = DateUTC.same(date, selectedDate);
      }

      days.push({
        date,
        ymd,
        isCurrentMonth,
        isToday,
        isWeekend,
        isDisabled,
        isSelected,
        isInRange,
        isInPreviewRange,
        isRangeStart,
        isRangeEnd
      });
    }
    return days;
  }

  getDayHeaders(): string[] {
    const formatter = new Intl.DateTimeFormat(this.normalizeLocale(this.locale), { weekday: 'short' });
    const referenceMonday = new Date(Date.UTC(2020, 0, 6)); // Monday
    return Array.from({ length: 7 }, (_, i) => formatter.format(DateUTC.addDays(referenceMonday, i)));
  }

  getMonthYearLabel(date: Date): string {
    return new Intl.DateTimeFormat(this.normalizeLocale(this.locale), { month: 'long', year: 'numeric' }).format(date);
  }

  todayUTC(): Date {
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  }

  private normalizeLocale(loc: string): string {
    const locale = (loc || '').toLowerCase();
    if (locale.startsWith('en-en')) return 'en-GB';
    return loc || 'de-DE';
  }
}
