// utils/date-utc.ts
export type YMD = `${number}-${number}-${number}`;

export const DateUTC = {
  fromYMD(ymd: string): Date | null {
    const m = ymd.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!m) return null;
    const y = +m[1];
    const mo = +m[2] - 1;
    const d = +m[3];
    const dt = new Date(Date.UTC(y, mo, d));
    if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== mo || dt.getUTCDate() !== d) return null;
    return dt;
  },

  toYMD(date: Date): YMD {
    const y = date.getUTCFullYear();
    const m = String(date.getUTCMonth() + 1).padStart(2, '0');
    const d = String(date.getUTCDate()).padStart(2, '0');
    return `${y}-${m}-${d}` as YMD;
  },

  create(y: number, mZero: number, d: number): Date | null {
    const dt = new Date(Date.UTC(y, mZero, d));
    if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== mZero || dt.getUTCDate() !== d) return null;
    return dt;
  },

  isValid(date: Date | null): boolean {
    return !!date && !isNaN(date.getTime());
  },

  same(a: Date | null, b: Date | null): boolean {
    return (
      !!a &&
      !!b &&
      a.getUTCFullYear() === b.getUTCFullYear() &&
      a.getUTCMonth() === b.getUTCMonth() &&
      a.getUTCDate() === b.getUTCDate()
    );
  },

  cmp(a: Date, b: Date): number {
    const ta = Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate());
    const tb = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate());
    return ta - tb;
  },
  before(a: Date, b: Date): boolean {
    return DateUTC.cmp(a, b) < 0;
  },
  after(a: Date, b: Date): boolean {
    return DateUTC.cmp(a, b) > 0;
  },

  addDays(date: Date, days: number): Date {
    const dt = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    dt.setUTCDate(dt.getUTCDate() + days);
    return dt;
  },

  addMonths(date: Date, months: number): Date {
    const y = date.getUTCFullYear();
    const m = date.getUTCMonth();
    const d = date.getUTCDate();
    const total = m + months;
    const ty = y + Math.floor(total / 12);
    const tm = ((total % 12) + 12) % 12;
    const last = new Date(Date.UTC(ty, tm + 1, 0)).getUTCDate();
    const td = Math.min(d, last);
    return new Date(Date.UTC(ty, tm, td));
  },

  monthStart(date: Date): Date {
    return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
  },

  weekStartMonday(date: Date): Date {
    const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    const dow = d.getUTCDay(); // 0..6
    const diff = dow === 0 ? 6 : dow - 1;
    d.setUTCDate(d.getUTCDate() - diff);
    return d;
  },

  isWeekend(date: Date): boolean {
    const dow = date.getUTCDay();
    return dow === 0 || dow === 6;
  }
};
