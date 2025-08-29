import { DateUTC } from './date-utc';

export class DateParserUTC {
  locale: string;
  constructor(locale: string = 'de-DE') {
    this.locale = locale;
  }

  parseDate(input: string): Date | null {
    const s = input?.trim();
    if (!s) return null;

    let m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (m) return DateUTC.fromYMD(`${m[1]}-${m[2]}-${m[3]}`);

    const isEU = this.isEU();
    const isUS = this.isUS();

    if (isEU) {
      m = s.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
      if (m) return this.fromDMY(+m[1], +m[2], +m[3]);
      m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
      if (m) return this.fromDMY(+m[1], +m[2], +m[3]);
    }

    if (isUS) {
      m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
      if (m) return this.fromMDY(+m[1], +m[2], +m[3]);
    }

    m = s.match(/^(\d{1,2})\.(\d{1,2})\.$/);
    if (m) return this.fromDMY(+m[1], +m[2], new Date().getUTCFullYear());

    return null;
  }

  parseRange(input: string): { start: Date | null; end: Date | null } {
    const s = input?.trim();
    if (!s) return { start: null, end: null };
    const parts = s.split(/\s*-\s*/);
    if (parts.length !== 2) return { start: null, end: null };

    const start = this.parseDate(parts[0]);
    const end = this.parseDate(parts[1]);

    if (start && end && DateUTC.after(start, end)) {
      return { start: end, end: start };
    }
    return { start, end };
  }

  private fromDMY(d: number, m: number, y: number): Date | null {
    return DateUTC.create(y, m - 1, d);
  }
  private fromMDY(m: number, d: number, y: number): Date | null {
    return DateUTC.create(y, m - 1, d);
  }

  private isUS(): boolean {
    return (this.locale || '').toLowerCase().startsWith('en-us');
  }
  private isEU(): boolean {
    const loc = (this.locale || '').toLowerCase();
    // Treat en-EN as en-GB style (DMY)
    return loc.startsWith('de') || loc.startsWith('en-en') || loc.startsWith('en-gb');
  }
}
