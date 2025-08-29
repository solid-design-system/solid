import { DateUTC } from './date-utc';

export class CalendarRangeUTC {
  private startDate: Date | null = null;
  private endDate: Date | null = null;
  private hoveredDate: Date | null = null;
  private isSelecting = false;

  setStart(date: Date): void {
    if (!DateUTC.isValid(date)) {
      return;
    }

    this.startDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    this.endDate = null;
    this.hoveredDate = null;
    this.isSelecting = true;
  }

  setEnd(date: Date): void {
    if (!DateUTC.isValid(date)) {
      return;
    }

    const n = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    if (!this.startDate) {
      this.setStart(n);
      return;
    }

    if (DateUTC.before(n, this.startDate)) {
      this.endDate = this.startDate;
      this.startDate = n;
    } else {
      this.endDate = n;
    }
    this.hoveredDate = null;
    this.isSelecting = false;
  }

  setHovered(date: Date | null): void {
    if (this.isSelecting && this.startDate && !this.endDate) {
      if (!date || !DateUTC.isValid(date)) {
        this.hoveredDate = null;
        return;
      }
      this.hoveredDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    }
  }

  resetHover(): void {
    this.hoveredDate = null;
  }

  clearRange(): void {
    this.startDate = null;
    this.endDate = null;
    this.hoveredDate = null;
    this.isSelecting = false;
  }

  setRange(start: Date | null, end: Date | null): void {
    this.clearRange();

    if (start && DateUTC.isValid(start)) {
      this.startDate = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
    }
    if (end && DateUTC.isValid(end)) {
      const e = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate()));
      if (this.startDate && DateUTC.before(e, this.startDate)) {
        this.endDate = this.startDate;
        this.startDate = e;
      } else {
        this.endDate = e;
      }
    }
    this.isSelecting = !!(this.startDate && !this.endDate);
  }

  getRange(): { start: Date | null; end: Date | null } {
    return { start: this.startDate, end: this.endDate };
  }

  isInRange(date: Date): boolean {
    if (!DateUTC.isValid(date)) {
      return false;
    }

    const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

    if (this.startDate && this.endDate) {
      return !DateUTC.before(d, this.startDate) && !DateUTC.after(d, this.endDate);
    }

    if (this.isSelecting && this.startDate && this.hoveredDate) {
      const start = DateUTC.before(this.startDate, this.hoveredDate) ? this.startDate : this.hoveredDate;
      const end = DateUTC.after(this.startDate, this.hoveredDate) ? this.startDate : this.hoveredDate;
      return !DateUTC.before(d, start) && !DateUTC.after(d, end);
    }

    return false;
  }

  isRangeStart(date: Date): boolean {
    if (!DateUTC.isValid(date)) {
      return false;
    }

    const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

    if (this.startDate && this.endDate) return DateUTC.same(d, this.startDate);
    if (this.isSelecting && this.startDate && this.hoveredDate) {
      const start = DateUTC.before(this.startDate, this.hoveredDate) ? this.startDate : this.hoveredDate;
      return DateUTC.same(d, start);
    }
    return this.startDate ? DateUTC.same(d, this.startDate) : false;
  }

  isRangeEnd(date: Date): boolean {
    if (!DateUTC.isValid(date)) {
      return false;
    }

    const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

    if (this.endDate) return DateUTC.same(d, this.endDate);
    if (this.isSelecting && this.startDate && this.hoveredDate) {
      const end = DateUTC.after(this.startDate, this.hoveredDate) ? this.startDate : this.hoveredDate;
      return DateUTC.same(d, end);
    }
    return false;
  }

  isInPreviewRange(date: Date): boolean {
    if (!DateUTC.isValid(date)) {
      return false;
    }

    if (!this.isSelecting || !this.startDate || !this.hoveredDate || this.endDate) return false;

    const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    const start = DateUTC.before(this.startDate, this.hoveredDate) ? this.startDate : this.hoveredDate;
    const end = DateUTC.after(this.startDate, this.hoveredDate) ? this.startDate : this.hoveredDate;
    return DateUTC.after(d, start) && DateUTC.before(d, end);
  }

  get isSelectingRange(): boolean {
    return this.isSelecting;
  }
  get hasCompleteRange(): boolean {
    return !!(this.startDate && this.endDate);
  }
  get hasStartOnly(): boolean {
    return !!(this.startDate && !this.endDate);
  }
}
