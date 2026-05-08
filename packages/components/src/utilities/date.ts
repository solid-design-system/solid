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

  toLocalISODate: (d: Date): string => {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  },

  parseLocalISO: (iso: string | null): Date | null => {
    if (!iso) return null;

    const trimmed = iso.trim();
    if (!trimmed) return null;

    // Normalize dots and slashes to hyphens so we support
    // YYYY-MM-DD, YYYY.MM.DD and YYYY/MM/DD uniformly.
    const normalized = trimmed.replace(/[./]/g, '-');

    const match = normalized.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return null;

    const y = Number(match[1]);
    const m = Number(match[2]) - 1;
    const d = Number(match[3]);

    const date = new Date(y, m, d);
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
