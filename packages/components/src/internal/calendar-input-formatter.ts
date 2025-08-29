// internal/calendar-input-formatter.ts
export class CalendarInputFormatter {
  constructor(private locale: string = 'de-DE') {}

  formatRangeTyping(raw: string): string {
    if (!raw) return '';

    let separator = raw
      .replace(/\s*-\s*/g, ' - ')
      .replace(/\s+/g, ' ')
      .trimStart();

    const firstSeparator = separator.indexOf(' - ');

    if (firstSeparator !== -1) {
      const head = separator.slice(0, firstSeparator);
      const tail = separator
        .slice(firstSeparator + 3)
        .replace(/\s*-\s*/g, ' ')
        .trimStart();
      separator = `${head} - ${tail}`;
      return separator;
    }

    const headMatch = this.matchCompletedHeadDate(separator);
    if (!headMatch) {
      return separator;
    }

    const { firstDate, remaining } = headMatch;

    if (remaining.length > 0) {
      return `${firstDate} - ${remaining.trimStart()}`;
    }

    return `${firstDate} - `;
  }

  private matchCompletedHeadDate(s: string): { firstDate: string; remaining: string } | null {
    // Accept: YYYY-MM-DD always
    let m = s.match(/^(\d{4}-\d{2}-\d{2})(.*)$/);
    if (m) {
      return { firstDate: m[1], remaining: m[2] ?? '' };
    }

    const loc = (this.locale || '').toLowerCase();
    const isEU = loc.startsWith('de-de') || loc.startsWith('en-en') || loc.startsWith('en-gb');

    if (isEU) {
      // DD.MM.YYYY
      m = s.match(/^(\d{1,2}\.\d{1,2}\.\d{4})(.*)$/);
      if (m) {
        return { firstDate: m[1], remaining: m[2] ?? '' };
      }
      // DD/MM/YYYY
      m = s.match(/^(\d{1,2}\/\d{1,2}\/\d{4})(.*)$/);
      if (m) {
        return { firstDate: m[1], remaining: m[2] ?? '' };
      }
    }

    return null;
  }
}
