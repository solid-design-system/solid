export const isoDateConverter = {
  fromAttribute(value: string | null): string | null {
    if (!value) return null;

    // normalize all separators to hyphens
    const cleaned = value.trim().replace(/[./]/g, '-');

    // acccept YYYY-MM-DD only
    const match = cleaned.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return null;

    const iso = `${match[1]}-${match[2]}-${match[3]}`;

    // validate date
    const d = new Date(+match[1], +match[2] - 1, +match[3]);
    if (d.getFullYear() !== +match[1] || d.getMonth() !== +match[2] - 1 || d.getDate() !== +match[3]) {
      return null;
    }

    return iso;
  },

  toAttribute(value: string | null): string {
    return value ?? '';
  }
};

export const viewMonthConverter = {
  fromAttribute(value: string | null): Date | null {
    if (!value) return null;

    const cleaned = value.trim().replace(/[./]/g, '-');
    let m: RegExpMatchArray | null = cleaned.match(/^(\d{2})-(\d{4})$/);
    let month: number;
    let year: number;

    if (m) {
      month = Number(m[1]);
      year = Number(m[2]);
    } else {
      m = cleaned.match(/^(\d{4})-(\d{2})$/);
      if (!m) return null;
      year = Number(m[1]);
      month = Number(m[2]);
    }

    if (!year || !month || month < 1 || month > 12) return null;

    return new Date(year, month - 1, 1);
  },

  toAttribute(value: Date | null): string {
    if (!value) return '';
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
  }
};

export const disabledDatesConverter = {
  fromAttribute(value: string | null): string[] {
    if (!value) return [];

    let rawList: string[] = [];

    const trimmed = value.trim();

    // arrays
    if (trimmed.startsWith('[')) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) {
          rawList = parsed.map(String);
        }
      } catch {
        return [];
      }
    } else {
      // space separated
      rawList = trimmed
        .split(/[\s,]+/)
        .map(v => v.trim())
        .filter(Boolean);
    }

    const result: string[] = [];

    for (const raw of rawList) {
      // replace all separators with dots
      const cleaned = raw.replace(/[-/]/g, '.');
      const parts = cleaned.split('.');

      if (parts.length !== 3) continue;
      const [yyyy, mm, dd] = parts.map(Number);

      if (!yyyy || !mm || !dd) continue;

      // validate date
      const date = new Date(yyyy, mm - 1, dd);
      if (date.getFullYear() !== yyyy || date.getMonth() !== mm - 1 || date.getDate() !== dd) continue;

      const iso = `${yyyy}-${String(mm).padStart(2, '0')}-${String(dd).padStart(2, '0')}`;

      result.push(iso);
    }

    return result;
  },

  toAttribute(value: string[] | null): string {
    return value ? value.join(',') : '';
  }
};
