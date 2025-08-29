// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class DateFormatUTC {
  static toDisplay(date: Date, locale: string): string {
    const loc = (locale || '').toLowerCase();
    const d = String(date.getUTCDate()).padStart(2, '0');
    const m = String(date.getUTCMonth() + 1).padStart(2, '0');
    const y = date.getUTCFullYear();

    if (loc.startsWith('de-de')) return `${d}.${m}.${y}`;
    if (loc.startsWith('en-en') || loc.startsWith('en-gb')) return `${d}/${m}/${y}`;

    return `${d}/${m}/${y}`;
  }

  static rangeToDisplay(start: Date, end: Date, locale: string): string {
    return `${this.toDisplay(start, locale)} - ${this.toDisplay(end, locale)}`;
  }
}
