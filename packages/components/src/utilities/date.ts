export const DateUtils = {
  startOfDayLocal: (d: Date) => {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  },

  isSameDay: (a: Date | null, b: Date | null) => {
    if (!a || !b) return false;
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  },

  clampDateToMonth: (d: Date, monthRef: Date) => {
    const first = new Date(monthRef.getFullYear(), monthRef.getMonth(), 1);
    const last = new Date(monthRef.getFullYear(), monthRef.getMonth() + 1, 0);
    if (d < first) return first;
    if (d > last) return last;
    return d;
  },

  toLocalISODate: (d: Date) => {
    const y = d.getFullYear();
    const m = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    return `${y}.${m}.${day}`;
  },

  parseLocalISO: (iso: string | null): Date | null => {
    if (!iso) return null;
    const m = /^(\d{4})\.(\d{2})\.(\d{2})$/.exec(iso);
    if (!m) return null;
    const y = Number(m[1]);
    const mon = Number(m[2]) - 1;
    const d = Number(m[3]);
    const date = new Date(y, mon, d); // local midnight
    return Number.isNaN(date.getTime()) ? null : date;
  },

  compareDates: (a: Date, b: Date) => {
    const aa = DateUtils.startOfDayLocal(a).getTime();
    const bb = DateUtils.startOfDayLocal(b).getTime();
    return aa - bb;
  },

  isBetweenInclusive: (d: Date, a: Date, b: Date) => {
    const lo = DateUtils.compareDates(a, b) <= 0 ? a : b;
    const hi = DateUtils.compareDates(a, b) <= 0 ? b : a;
    return DateUtils.compareDates(d, lo) >= 0 && DateUtils.compareDates(d, hi) <= 0;
  }
};
