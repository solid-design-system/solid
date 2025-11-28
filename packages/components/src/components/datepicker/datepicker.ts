import { css, html, nothing } from 'lit';
import { customElement } from '../../internal/register-custom-element';
import { DateUtils } from '../../utilities/date';
import { FormControlController } from '../../internal/form.js';
import { HasSlotController } from '../../internal/slot';
import { LocalizeController } from '../../utilities/localize';
import { property, query, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import cx from 'classix';
import SolidElement from '../../internal/solid-element';
import type { SolidFormControl } from '../../internal/solid-element';

/**
 * @summary Used to enter or select a date or a range of dates using a calendar view.
 * @status stable
 * @since 5.16.0
 *
 * @dependency sd-icon
 * @dependency sd-divider
 * @dependency sd-popup
 *
 * @event sd-change - Emitted when the date selection changes.
 * @event sd-range-select - Emitted when the date range selection changes.
 * @event sd-select - Emitted when the date selection changes.
 * @event sd-datepicker-close - Emitted when the datepicker is closed.
 * @event sd-focus - Emitted when the datepicker is focused.
 * @event sd-blur - Emitted when the datepicker is blurred.
 * @event sd-month-change - Emitted when the month is changed.
 * @event sd-month-year - Emitted when the year is changed.
 *
 * @slot - The default slot.
 * @slot label - The label for the date input.
 * @slot help-text - The help text, displayed below the input.
 * @slot tooltip - The tooltip icon and content.
 *
 * @csspart datepicker - The component's base wrapper.
 * @csspart header - The header containing the month/year and navigation buttons.
 * @csspart prev-year-button - The button to go to the previous year.
 * @csspart prev-month-button - The button to go to the previous month.
 * @csspart month-label - The month and year label.
 * @csspart next-month-button - The button to go to the next month.
 * @csspart next-year-button - The button to go to the next year.
 * @csspart grid - The calendar grid container.
 * @csspart weekday - Each weekday label in the calendar header.
 * @csspart day - Each day button in the calendar grid.
 * @csspart form-control - The form control wrapper around the input.
 * @csspart form-control-label - The label for the input.
 * @csspart form-control-input - The input element.
 * @csspart border - The border around the input.
 * @csspart invalid-icon - The icon shown when the input is invalid.
 * @csspart valid-icon - The icon shown when the input is valid.
 * @csspart form-control-help-text - The help text, displayed below the input.
 *
 */
@customElement('sd-datepicker')
export default class SdDatepicker extends SolidElement implements SolidFormControl {
  /** Localize controller used to fetch localized terms/labels. */
  public localize = new LocalizeController(this);

  private readonly hasSlotController = new HasSlotController(this, 'label', 'help-text', 'tooltip');

  private readonly formControlController: FormControlController = new FormControlController(this, {
    assumeInteractionOn: ['sd-blur', 'sd-input']
  });

  /** Used for formatting and announcements (e.g., 'en-US', 'de-DE'). */
  @property({ type: String, reflect: true }) locale = 'en-US';

  /** Selected date in local ISO format (YYYY-MM-DD) when not in range mode. */
  @property({ type: String }) value: string | null = null;

  /** Enables date range selection when true. */
  @property({ type: Boolean, reflect: true }) range = false;

  /** Range start date in local ISO format (YYYY-MM-DD). */
  @property({ type: String }) rangeStart: string | null = null;

  /** Range end date in local ISO format (YYYY-MM-DD). */
  @property({ type: String }) rangeEnd: string | null = null;

  /** Allows selecting the same start and end date when true. */
  @property({ type: Boolean }) allowSameDayRange = false;

  /** Minimum selectable date in local ISO format (YYYY-MM-DD). */
  @property({ type: String }) min: string | number | Date | undefined = undefined;

  /** Maximum selectable date in local ISO format (YYYY-MM-DD). */
  @property({ type: String }) max: string | number | Date | undefined = undefined;

  /** First day of the week (0=Sun .. 6=Sat). If null, defaults to 1 (Monday). */
  @property({ type: Number }) firstDayOfWeek: number | null = null;

  /** When true, weekends (Saturday/Sunday) are disabled. */
  @property({ type: Boolean, reflect: true, attribute: 'disabled-weekends' }) disabledWeekends = false;

  /** List of disabled dates as local ISO strings. Accepts array or CSV/JSON string. */
  @property({ attribute: 'disabled-dates' }) disabledDates: string[] | string = [];

  /** Custom predicate that can disable specific dates at runtime. */
  @property({ attribute: false }) isDateDisabled: ((d: Date) => boolean) | null = null;

  /** Size of the input and calendar visuals. */
  @property({ type: String, reflect: true }) size: 'lg' | 'md' | 'sm' = 'lg';

  /** Horizontal alignment of the flyout relative to the input. */
  @property({ type: String }) alignment: 'left' | 'right' = 'left';

  /** Text label for the input. Can be overridden with slot="label". */
  @property({ type: String, reflect: true }) label = '';

  /** Help text shown below the input. Can be overridden with slot="help-text". */
  @property({ type: String, attribute: 'help-text', reflect: true }) helpText = '';

  /** Disables the control entirely when true. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Makes the control non-interactive visually (like disabled) without disabling it functionally. */
  @property({ type: Boolean, attribute: 'visually-disabled' }) visuallyDisabled = false;

  /** When true, applies success styling for valid selections. */
  @property({ type: Boolean, reflect: true, attribute: 'style-on-valid' }) styleOnValid = false;

  /** Makes the input read-only (non-editable) when true. */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /** Preferred placement of the flyout relative to the input (top|bottom). */
  @property({ type: String, reflect: true }) placement: 'top' | 'bottom' = 'bottom';

  @property({ type: String, reflect: true }) placeholder: string = '';

  /** The name of the datepicker, submitted as a name/value pair with form data. */
  @property({ reflect: true }) name = '';

  /**
   * By default, form controls are associated with the nearest containing `<form>` element.
   * This attribute allows you to place the form control outside of a form and associate it
   * with the form that has this `id`.
   */
  @property({ type: String, reflect: true }) form = '';

  /** Whether the calendar flyout is open. */
  @state() private open = false;

  /** The month (first day) currently displayed by the calendar grid. */
  @state() private viewMonth!: Date;

  /** The date that has keyboard focus (for roving tabindex in the grid). */
  @state() private focusedDate!: Date;

  /** Today's date at local midnight for comparisons and highlighting. */
  @state() private today = DateUtils.startOfDayLocal(new Date());

  /** Set of disabled date strings (local ISO) derived from disabledDates input. */
  @state() private disabledDatesSet: Set<string> = new Set();

  /** Live preview end date during range hover interaction. */
  @state() private previewEnd: Date | null = null;

  /** Live region text for navigation updates (month/day changes). */
  @state() private statusNavText = '';

  /** Live region text for selection announcements. */
  @state() private statusSelectText = '';

  /** True when the input or calendar has focus. */
  @state() hasFocus = false;

  /** Whether to show the valid styling state. */
  @state() showValidStyle = false;

  /** Whether to show the invalid styling state. */
  @state() showInvalidStyle = false;

  /** Actual placement currently used by the flyout. */
  @state() currentPlacement = this.placement;

  /** The text value shown in the input, synchronized with selection. */
  @state() private inputValue = '';

  @query('#invalid-message') invalidMessage: HTMLDivElement;

  @query('#input') input: HTMLInputElement;

  /** Internal flag used when tabbing from header into grid to pick initial tabbable day. */
  private tabbingIntoGrid = false;

  /** Bump counter ensuring live region text updates are recognized. */
  private statusBumpCounter = 0;

  constructor() {
    super();
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.syncDisabledDatesSet();
    document.addEventListener('click', this.handleOutsideClick);
    this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });

    const initialSingle = this.value ? DateUtils.parseLocalISO(this.value) : null;
    const initialRangeStart = this.rangeStart ? DateUtils.parseLocalISO(this.rangeStart) : null;
    const initial =
      this.range && initialRangeStart ? initialRangeStart : (initialSingle ?? DateUtils.startOfDayLocal(new Date()));

    this.viewMonth = new Date(initial.getFullYear(), initial.getMonth(), 1);
    this.focusedDate = DateUtils.clampDateToMonth(initial, this.viewMonth);

    if (this.firstDayOfWeek === null || this.firstDayOfWeek === undefined) {
      // Monday default
      this.firstDayOfWeek = 1;
    }

    this.inputValue = this.formatInputValue();

    this.tabIndex = 0;
    this.setAttribute('role', 'group');
    this.setAttribute(
      'aria-label',
      this.range ? this.localize.term('datePickerRange') : this.localize.term('datePicker')
    );

    this.addEventListener('focusin', this.onFocusIn);
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('focusin', this.onFocusIn);
    document.removeEventListener('click', this.handleOutsideClick);
  }

  @watch('locale')
  handleLocaleChange() {
    if (this.firstDayOfWeek === null) {
      this.firstDayOfWeek = 1;
    }
    this.requestUpdate();
  }

  @watch('disabledDates')
  handleDisabledDatesChange() {
    this.syncDisabledDatesSet();
    this.requestUpdate();
  }

  @watch('value')
  handleValueChange() {
    const v = this.value ? DateUtils.parseLocalISO(this.value) : null;
    if (v) {
      this.viewMonth = new Date(v.getFullYear(), v.getMonth(), 1);
      this.focusedDate = DateUtils.startOfDayLocal(v);
    }
    this.inputValue = this.formatInputValue();

    this.updateComplete.then(() => {
      const el = this.input;
      if (el) {
        el.value = this.inputValue ?? '';
        const end = el.value.length;
        el.setSelectionRange(end, end);
      }
      this.formControlController.updateValidity();
    });

    this.emit('sd-change', {
      detail: {
        value: this.value,
        rangeStart: this.rangeStart,
        rangeEnd: this.rangeEnd
      }
    });
  }

  @watch('rangeStart')
  @watch('rangeEnd')
  handleRangeChange() {
    const rs = this.rangeStart ? DateUtils.parseLocalISO(this.rangeStart) : null;
    const re = this.rangeEnd ? DateUtils.parseLocalISO(this.rangeEnd) : null;
    const pivot = rs ?? re;
    if (pivot) {
      this.viewMonth = new Date(pivot.getFullYear(), pivot.getMonth(), 1);
      this.focusedDate = DateUtils.startOfDayLocal(pivot);
    }
    if (this.previewEnd !== null) this.previewEnd = null;
    this.inputValue = this.formatInputValue();

    this.updateComplete.then(() => {
      const el = this.input;
      if (el) {
        el.value = this.inputValue ?? '';
        const end = el.value.length;
        el.setSelectionRange(end, end);
      }
      this.formControlController.updateValidity();
    });

    this.emit('sd-change', {
      detail: {
        value: this.value,
        rangeStart: this.rangeStart,
        rangeEnd: this.rangeEnd
      }
    });
  }

  @watch(['disabled', 'visually-disabled'], { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);

    if (this.disabled || this.visuallyDisabled) {
      this.open = false;
    }
  }

  get validity() {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const defaultValidity: ValidityState = { valid: true } as ValidityState;
    return this.input instanceof HTMLInputElement ? this.input.validity : defaultValidity;
  }

  get validationMessage() {
    return (this.input instanceof HTMLInputElement ? this.input.validationMessage : '') || '';
  }

  checkValidity() {
    if (this.input instanceof HTMLInputElement) {
      return this.input.checkValidity();
    }
    return true;
  }

  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  reportValidity() {
    this.formControlController.fakeUserInteraction();
    return this.input instanceof HTMLInputElement ? this.input.reportValidity() : true;
  }

  setCustomValidity(message: string) {
    this.input?.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
    this.invalidMessage.textContent = (event.target as HTMLInputElement).validationMessage;
  }

  /** Parses a local ISO date string to a Date or returns null. */
  private parseISO(iso: string | null): Date | null {
    return DateUtils.parseLocalISO(iso);
  }

  private inMinMax(d: Date): boolean {
    const min = this.parseISO(this.min !== null ? String(this.min) : null);
    const max = this.parseISO(this.max !== null ? String(this.max) : null);

    if (min && d < min) return false;
    if (max && d > max) return false;
    return true;
  }

  /** Returns true if the date matches any date in disabledDatesSet. */
  private isInDisabledDates(d: Date): boolean {
    if (!this.disabledDatesSet || this.disabledDatesSet.size === 0) return false;
    const iso = DateUtils.toLocalISODate(DateUtils.startOfDayLocal(d));
    return this.disabledDatesSet.has(iso);
  }

  /** Returns true if the date is Saturday or Sunday. */
  private isWeekend(d: Date): boolean {
    const day = d.getDay();
    return day === 0 || day === 6;
  }

  /** Returns true if the date is disabled */
  private isDisabled(d: Date): boolean {
    if (!this.inMinMax(d)) return true;
    if (this.disabledWeekends && this.isWeekend(d)) return true;
    if (this.isInDisabledDates(d)) return true;
    if (this.isDateDisabled?.(d)) return true;
    return false;
  }

  /** Updates the hidden live region for navigation feedback. */
  private setNavStatus(text: string) {
    this.statusNavText = text;
  }

  /** Announces an assertive message with a slight delay to ensure SR pick-up. */
  private announceSelect(message: string, delayMs = 40) {
    setTimeout(() => {
      this.statusBumpCounter++;
      const bump = '\u200B'.repeat(this.statusBumpCounter % 3);
      this.statusSelectText = message + bump;
    }, delayMs);
  }

  /** Returns localized selection label for announcements. */
  private formatSelectionLabel(d: Date): string {
    if (this.locale === 'de-DE') {
      return d.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    const day = d.getDate();
    const ordinal = this.ordinal(day);
    const month = d.toLocaleDateString('en-US', { month: 'long' });
    const year = d.getFullYear();
    return `${ordinal} of ${month} ${year}`;
  }

  /** English ordinal for day numbers (1st, 2nd, 3rd...). */
  private ordinal(day: number): string {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const lastTwoDigits = day % 100;
    const suffix = suffixes[(lastTwoDigits - 20) % 10] || suffixes[lastTwoDigits] || suffixes[0];
    return day + suffix;
  }

  /** Syncs disabledDatesSet from the disabledDates property */
  private syncDisabledDatesSet() {
    let arr: string[] = [];
    if (Array.isArray(this.disabledDates)) {
      arr = this.disabledDates;
    } else if (typeof this.disabledDates === 'string') {
      const s = this.disabledDates.trim();
      if (s.startsWith('[')) {
        try {
          const parsed = JSON.parse(s) as unknown;
          if (Array.isArray(parsed)) arr = parsed as string[];
        } catch {
          arr = [];
        }
      } else if (s.length > 0) {
        arr = s
          .split(',')
          .map(v => v.trim())
          .filter(Boolean);
      }
    }
    this.disabledDatesSet = new Set(arr);
  }
  /** Returns true if the range between two dates contains any disabled dates. */
  private wouldRangeContainDisabled(a: Date, b: Date) {
    const start = DateUtils.compareDates(a, b) <= 0 ? DateUtils.startOfDayLocal(a) : DateUtils.startOfDayLocal(b);
    const end = DateUtils.compareDates(a, b) <= 0 ? DateUtils.startOfDayLocal(b) : DateUtils.startOfDayLocal(a);
    const cursor = new Date(start);
    while (DateUtils.compareDates(cursor, end) <= 0) {
      if (this.isDisabled(cursor)) return true;
      cursor.setDate(cursor.getDate() + 1);
    }
    return false;
  }

  private termStartSelected() {
    return this.localize?.term?.('startDateSelected');
  }

  private termEndSelected() {
    return this.localize?.term?.('endDateSelected');
  }

  /** UI formatting: internal ISO → DD.MM.YYYY */
  private isoToDmy(iso: string | null): string {
    if (!iso) return '';
    const d = DateUtils.parseLocalISO(iso);
    if (!d) return '';
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = String(d.getFullYear());
    return `${dd}.${mm}.${yyyy}`;
  }

  /** UI parsing: DD.MM.YYYY → internal ISO (YYYY-MM-DD), returns null if invalid */
  private dmyToIso(dmy: string | null): string | null {
    if (!dmy) return null;

    const m = dmy.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
    if (!m) return null;
    const dd = Number(m[1]);
    const mm = Number(m[2]);
    const yyyy = Number(m[3]);

    const d = new Date(yyyy, mm - 1, dd);

    if (d.getFullYear() !== yyyy || d.getMonth() !== mm - 1 || d.getDate() !== dd) return null;

    const localMidnight = DateUtils.startOfDayLocal(d);
    return DateUtils.toLocalISODate(localMidnight);
  }

  private formatInputValue(): string {
    const loc = (this.locale || '').toLowerCase();
    const langAttr = (this.getAttribute('lang') || '').toLowerCase();

    const isGerman = loc.startsWith('de') || langAttr.startsWith('de');
    const separator = isGerman ? '–' : '-';

    // Single mode: show DD.MM.YYYY
    if (!this.range) {
      return this.isoToDmy(this.value);
    }
    // Range mode: DD.MM.YYYY - DD.MM.YYYY
    const start = this.isoToDmy(this.rangeStart);
    const end = this.isoToDmy(this.rangeEnd);
    if (start && end) return `${start} ${separator} ${end}`;
    if (start && !end) return `${start} ${separator}`;
    return '';
  }

  /** Parses input text (DD.MM.YYYY) into normalized internal ISO values with validation flag. */
  private parseInputText(text: string): {
    start?: string | null;
    end?: string | null;
    single?: string | null;
    valid: boolean;
  } {
    const trimmed = text.trim();

    if (this.range) {
      const parts = trimmed.split(/\s*-\s*/);
      if (parts.length === 1) {
        const startCandidate = parts[0];
        if (!startCandidate) return { start: null, end: null, valid: true };
        const isoStart = this.dmyToIso(startCandidate);
        if (!isoStart) return { start: null, end: null, valid: false };
        return { start: isoStart, end: null, valid: true };
      } else if (parts.length >= 2) {
        const startCandidate = parts[0] ?? '';
        const endCandidate = parts[1] ?? '';
        const isoStart = startCandidate ? this.dmyToIso(startCandidate) : null;
        const isoEnd = endCandidate ? this.dmyToIso(endCandidate) : null;
        if (startCandidate && !isoStart) return { start: null, end: null, valid: false };
        if (endCandidate && !isoEnd) return { start: null, end: null, valid: false };
        return { start: isoStart, end: isoEnd, valid: true };
      }
      return { start: null, end: null, valid: false };
    }

    // Single mode
    if (!trimmed) return { single: null, valid: true };
    const iso = this.dmyToIso(trimmed);
    if (!iso) return { single: null, valid: false };
    return { single: iso, valid: true };
  }

  /** Applies parsed input into component state; returns true if state changed. */
  private applyParsedInput(parsed: {
    start?: string | null;
    end?: string | null;
    single?: string | null;
    valid: boolean;
  }): boolean {
    if (!parsed.valid) {
      this.showInvalidStyle = true;
      this.showValidStyle = false;
      this.formControlController.setValidity(false);
      return false;
    }

    const inBoundsIso = (iso: string | null) => {
      if (!iso) return true;
      const d = DateUtils.parseLocalISO(iso)!;
      if (!this.inMinMax(d)) return false;
      if (this.isDisabled(d)) return false;
      return true;
    };

    let changed = false;

    if (this.range) {
      const startIso = parsed.start ?? null;
      const endIso = parsed.end ?? null;

      if (!inBoundsIso(startIso) || (endIso && !inBoundsIso(endIso))) {
        this.showInvalidStyle = true;
        this.showValidStyle = false;
        return false;
      }

      let rs = startIso ? DateUtils.parseLocalISO(startIso)! : null;
      let re = endIso ? DateUtils.parseLocalISO(endIso)! : null;

      if (rs && re) {
        if (DateUtils.compareDates(rs, re) > 0) {
          const tmp = rs;
          rs = re;
          re = tmp;
        }
        if (!this.allowSameDayRange && DateUtils.isSameDay(rs, re)) {
          this.showInvalidStyle = true;
          this.showValidStyle = false;
          return false;
        }
        if (this.wouldRangeContainDisabled(rs, re)) {
          this.showInvalidStyle = true;
          this.showValidStyle = false;
          return false;
        }
      }

      const newStart = rs ? DateUtils.toLocalISODate(DateUtils.startOfDayLocal(rs)) : null;
      const newEnd = re ? DateUtils.toLocalISODate(DateUtils.startOfDayLocal(re)) : null;

      if (this.rangeStart !== newStart || this.rangeEnd !== newEnd) {
        this.rangeStart = newStart;
        this.rangeEnd = newEnd;
        this.previewEnd = null;
        changed = true;

        const pivot = rs ?? re ?? this.today;
        this.viewMonth = new Date(pivot.getFullYear(), pivot.getMonth(), 1);
        this.focusedDate = DateUtils.startOfDayLocal(pivot);

        this.emit('sd-range-select', { detail: { start: this.rangeStart, end: this.rangeEnd } });
      }

      this.showInvalidStyle = false;

      if (this.range) {
        this.showValidStyle = !!(this.rangeStart && this.rangeEnd && this.styleOnValid);
      } else {
        this.showValidStyle = !!(this.value && this.styleOnValid);
      }

      this.formControlController.setValidity(true);
      this.updateComplete.then(() => {
        this.formControlController.updateValidity();
      });

      return true;
    }

    // Single
    const singleIso = parsed.single ?? null;
    if (!inBoundsIso(singleIso)) {
      this.showInvalidStyle = true;
      this.showValidStyle = false;
      return false;
    }

    const v = singleIso ? DateUtils.parseLocalISO(singleIso)! : null;
    const newValue = v ? DateUtils.toLocalISODate(DateUtils.startOfDayLocal(v)) : null;

    if (this.value !== newValue) {
      this.value = newValue;
      changed = true;

      if (v) {
        this.viewMonth = new Date(v.getFullYear(), v.getMonth(), 1);
        this.focusedDate = DateUtils.startOfDayLocal(v);
      }

      this.emit('sd-select', { detail: { value: this.value, date: v ?? null } });
    }

    this.showInvalidStyle = false;
    this.showValidStyle = !!this.value;

    this.inputValue = this.formatInputValue();
    return changed;
  }

  /** Converts up to 8 digits into DD, DD.MM, or DD.MM.YYYY. */
  private buildDmyFromDigits(digits: string): string {
    const capped = digits.slice(0, 8);
    const d = capped.slice(0, 2);
    const m = capped.slice(2, 4);
    const y = capped.slice(4, 8);
    let out = d;
    if (m.length) out += '.' + m;
    if (y.length) out += '.' + y;
    return out;
  }

  /** Maps digit count before caret to caret position in DD.MM.YYYY string. */
  private digitIndexToDmyCaretPos(digitIdx: number): number {
    if (digitIdx <= 2) return digitIdx; // DD
    if (digitIdx <= 4) return 2 + 1 + (digitIdx - 2); // DD. + MM
    return 2 + 1 + 2 + 1 + (digitIdx - 4); // DD.MM. + YYYY
  }

  /** Counts how many digits appear before the caret in the raw string. */
  private countDigitsBeforeCaret(raw: string, caretPos: number): number {
    return raw.slice(0, caretPos).replace(/\D/g, '').length;
  }

  private handleOutsideClick(event: Event) {
    const path = (event as MouseEvent).composedPath?.() ?? [];
    if (!path.includes(this)) {
      this.hide();
      this.hasFocus = false;
      this.emit('sd-datepicker-close');
    }
  }

  show() {
    if (this.open || this.disabled || this.visuallyDisabled) {
      this.open = false;
      return undefined;
    }
    this.open = true;
    return undefined;
  }

  hide() {
    if (!this.open || this.disabled) {
      this.open = false;
      return;
    }
    this.open = false;
  }

  private onFocusIn = (ev: FocusEvent) => {
    const path = ev.composedPath();
    const fromHeader = path.some(
      n => n instanceof HTMLElement && (n.classList?.contains('nav') || n.classList?.contains('month-label'))
    );
    if (fromHeader) {
      this.tabbingIntoGrid = true;
    }
  };

  private handleMouseDown(event: MouseEvent) {
    if (this.visuallyDisabled || this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    event.preventDefault();
    if (!this.open) this.show();
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('sd-blur');
  }

  private handleFocus() {
    if (this.visuallyDisabled || this.disabled) {
      return;
    }

    this.hasFocus = true;
    if (!this.open && !this.disabled && !this.visuallyDisabled) {
      this.show();
    }
    this.emit('sd-focus');
  }

  private handleInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement;
    const raw = input.value;
    const oldPos = input.selectionStart ?? raw.length;
    const isDeleting = (ev as InputEvent).inputType?.startsWith('delete');

    if (this.visuallyDisabled || this.disabled) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }

    if (!this.range) {
      // SINGLE: progressive input on DD.MM.YYYY with immediate dots and caret preservation
      const inputEl = input;
      const rawText = inputEl.value;
      const oldCaret = inputEl.selectionStart ?? rawText.length;

      // Extract up to 8 digits in order
      const digits = rawText.replace(/\D/g, '').slice(0, 8);
      const d = digits.slice(0, 2);
      const m = digits.slice(2, 4);
      const y = digits.slice(4, 8);

      // Compose formatted value:
      // - First dot as soon as day completes
      // - Second dot as soon as month completes
      let nextFormatted = '';

      // Day
      if (d.length > 0) {
        nextFormatted += d;
        if (d.length === 2) {
          nextFormatted += '.';
        }
      }

      // Month (visible only after dd complete)
      if (m.length > 0 && d.length === 2) {
        nextFormatted += m;
        if (m.length === 2) {
          nextFormatted += '.';
        }
      }

      // Year (visible only after dd.mm complete)
      if (y.length > 0 && d.length === 2 && m.length === 2) {
        nextFormatted += y;
      }

      // Avoid duplicate trailing dot if the user is deleting at boundaries
      nextFormatted = nextFormatted.replace(/\.\.+/g, '.');

      const prevFormatted = this.inputValue || '';
      this.inputValue = nextFormatted;

      // Compute caret shift: advance caret when a dot appears at or before it
      let newCaret = oldCaret;

      // Helper: indices of dots
      const dotIdxs = (s: string) => {
        const idxs: number[] = [];
        for (let i = 0; i < s.length; i++) if (s[i] === '.') idxs.push(i);
        return idxs;
      };

      const prevDots = dotIdxs(prevFormatted);
      const nextDots = dotIdxs(nextFormatted);

      // Count dots strictly before caret in prev/next
      const prevBefore = prevDots.filter(i => i < oldCaret).length;
      const nextBefore = nextDots.filter(i => i < oldCaret).length;

      // If more dots exist before the caret in the new value, move caret forward
      const insertedBefore = nextBefore - prevBefore;
      if (insertedBefore > 0) {
        newCaret += insertedBefore;
      } else {
        // Also check if a dot was inserted exactly at oldCaret (e.g., dd completed at caret)
        const dotInsertedAtCaret = !prevDots.includes(oldCaret) && nextDots.includes(oldCaret);
        if (dotInsertedAtCaret) newCaret += 1;
      }

      // Clamp
      newCaret = Math.min(Math.max(0, newCaret), nextFormatted.length);

      // Apply without forcing to end
      requestAnimationFrame(() => {
        const el = this.input ?? inputEl;
        if (el) {
          el.value = this.inputValue;
          el.setSelectionRange(newCaret, newCaret);
        }
      });

      // Commit only when full date is present
      if (/^\d{2}\.\d{2}\.\d{4}$/.test(nextFormatted)) {
        const parsed = this.parseInputText(nextFormatted);
        this.applyParsedInput(parsed);
      } else {
        this.showInvalidStyle = false;
        this.showValidStyle = false;
      }
      return;
    } else {
      // RANGE: progressive input on DD.MM.YYYY - DD.MM.YYYY
      const allDigits = raw.replace(/\D/g, '');
      const startDigits = allDigits.slice(0, 8);
      const endDigits = allDigits.slice(8, 16);

      const startDMY = this.buildDmyFromDigits(startDigits);
      const endDMY = this.buildDmyFromDigits(endDigits);

      let formatted: string;
      if (startDigits.length === 0) {
        formatted = '';
      } else if (startDigits.length < 8) {
        formatted = startDMY;
      } else {
        if (endDigits.length > 0) {
          formatted = `${startDMY} - ${endDMY}`;
        } else {
          formatted = isDeleting ? startDMY : `${startDMY} -`;
        }
      }

      const digitsBefore = this.countDigitsBeforeCaret(raw, oldPos);
      let newPos: number;
      if (digitsBefore <= 8) {
        const withinStartPos = this.digitIndexToDmyCaretPos(Math.min(digitsBefore, 8));
        newPos = Math.min(withinStartPos, startDMY.length);
      } else {
        const offsetBase = startDigits.length < 8 ? startDMY.length : startDMY.length + 3; // " - "
        const endDigitIdx = Math.min(digitsBefore - 8, 8);
        const withinEndPos = this.digitIndexToDmyCaretPos(endDigitIdx);
        newPos = offsetBase + Math.min(withinEndPos, endDMY.length);
      }

      this.inputValue = formatted;

      // Commit state progressively
      let committed = false;

      // Commit start
      if (/^\d{2}\.\d{2}\.\d{4}$/.test(startDMY)) {
        const startIso = this.dmyToIso(startDMY);
        const pStart = startIso ? DateUtils.parseLocalISO(startIso) : null;
        const startOk = !!pStart && !this.isDisabled(pStart) && this.inMinMax(pStart);
        if (startOk && this.rangeStart !== startIso) {
          this.rangeStart = startIso!;
          this.previewEnd = null;
          this.viewMonth = new Date(pStart.getFullYear(), pStart.getMonth(), 1);
          this.focusedDate = DateUtils.startOfDayLocal(pStart);
          committed = true;
        }
      } else {
        if (this.rangeStart) {
          this.rangeStart = null;
          committed = true;
        }
        if (this.rangeEnd) {
          this.rangeEnd = null;
          committed = true;
        }
      }

      // Commit end
      if (/^\d{2}\.\d{2}\.\d{4}$/.test(endDMY) && this.rangeStart) {
        const pStart = DateUtils.parseLocalISO(this.rangeStart)!;
        const endIso = this.dmyToIso(endDMY);
        const pEnd = endIso ? DateUtils.parseLocalISO(endIso) : null;
        const endOk = !!pEnd && !this.isDisabled(pEnd) && this.inMinMax(pEnd);
        if (endOk) {
          const [a, b] = DateUtils.compareDates(pStart, pEnd) <= 0 ? [pStart, pEnd] : [pEnd, pStart];
          const sameDay = DateUtils.isSameDay(a, b);
          const rangeOk = (this.allowSameDayRange || !sameDay) && !this.wouldRangeContainDisabled(a, b);

          if (rangeOk) {
            const normalizedStart = DateUtils.toLocalISODate(DateUtils.startOfDayLocal(a));
            const normalizedEnd = DateUtils.toLocalISODate(DateUtils.startOfDayLocal(b));
            if (this.rangeStart !== normalizedStart || this.rangeEnd !== normalizedEnd) {
              this.rangeStart = normalizedStart;
              this.rangeEnd = normalizedEnd;
              this.viewMonth = new Date(b.getFullYear(), b.getMonth(), 1);
              this.focusedDate = DateUtils.startOfDayLocal(b);
              committed = true;
            }
          }
        }
      } else {
        if (this.rangeEnd) {
          this.rangeEnd = null;
          committed = true;
        }
      }

      this.showInvalidStyle = false;
      this.showValidStyle = !!(this.rangeStart && this.rangeEnd);

      if (committed) {
        this.emit('sd-range-select', { detail: { start: this.rangeStart, end: this.rangeEnd } });
        this.emit('sd-change', { detail: { value: this.value, rangeStart: this.rangeStart, rangeEnd: this.rangeEnd } });
      }

      Promise.resolve().then(() => {
        requestAnimationFrame(() => {
          const el = this.input ?? input;
          if (el) {
            el.value = this.inputValue;
            el.setSelectionRange(newPos, newPos);
          }
        });
      });
    }

    if (!this.open && this.hasFocus && !this.disabled && !this.visuallyDisabled) {
      this.show();
    }

    // Live status updates (unchanged labels)
    if (this.range) {
      const s = this.rangeStart ? DateUtils.parseLocalISO(this.rangeStart)! : null;
      const e = this.rangeEnd ? DateUtils.parseLocalISO(this.rangeEnd)! : null;
      if (s && !e) {
        this.setNavStatus(`${this.termStartSelected()}: ${this.formatSelectionLabel(s)}`);
      } else if (s && e) {
        this.setNavStatus(
          `${this.termStartSelected()}: ${this.formatSelectionLabel(s)}; ${this.termEndSelected()}: ${this.formatSelectionLabel(e)}`
        );
      }
    } else if (this.value) {
      const v = DateUtils.parseLocalISO(this.value)!;
      this.setNavStatus(`${this.formatSelectionLabel(v)}`);
    }
  };

  private handleInputBlur = () => {
    const parsed = this.parseInputText(this.inputValue);
    if (!parsed.valid) {
      this.inputValue = this.formatInputValue();
      this.showInvalidStyle = !!this.inputValue && !this.value && !this.rangeStart;
    } else {
      this.applyParsedInput(parsed);
    }
    this.handleBlur();
  };

  private handleCurrentPlacement = (ev: CustomEvent<{ placement: 'top' | 'bottom' }>) => {
    this.currentPlacement = ev.detail.placement;
  };

  private setMonth(offset: number) {
    const next = new Date(this.viewMonth.getFullYear(), this.viewMonth.getMonth() + offset, 1);
    if (next.getMonth() === this.viewMonth.getMonth() && next.getFullYear() === this.viewMonth.getFullYear()) return;
    this.viewMonth = next;
    const monthLabel = this.formatMonthYear(this.viewMonth);
    this.setNavStatus(monthLabel);
    this.emit('sd-month-change', { detail: { month: this.viewMonth } });
  }

  private setYear(offset: number) {
    const next = new Date(this.viewMonth.getFullYear() + offset, this.viewMonth.getMonth(), 1);
    if (next.getFullYear() === this.viewMonth.getFullYear() && next.getMonth() === this.viewMonth.getMonth()) {
      return;
    }
    this.viewMonth = next;
    const monthLabel = this.formatMonthYear(this.viewMonth);
    this.setNavStatus(monthLabel);
    this.emit('sd-month-year', { detail: { month: this.viewMonth } });
  }

  private focusInitialGridDay() {
    let target: Date | null = null;

    if (!this.range && this.value) {
      const v = DateUtils.parseLocalISO(this.value);
      if (v) target = DateUtils.startOfDayLocal(v);
    }

    if (this.range) {
      const rs = this.rangeStart ? DateUtils.parseLocalISO(this.rangeStart) : null;
      const re = this.rangeEnd ? DateUtils.parseLocalISO(this.rangeEnd) : null;
      if (re) target = DateUtils.startOfDayLocal(re);
      else if (rs) target = DateUtils.startOfDayLocal(rs);
    }

    const inViewAndEnabled = (d: Date | null) => {
      if (!d) return false;
      const sameMonth = d.getFullYear() === this.viewMonth.getFullYear() && d.getMonth() === this.viewMonth.getMonth();
      return sameMonth && !this.isDisabled(d);
    };

    if (!inViewAndEnabled(target)) {
      const { weeks } = this.getMonthMatrix(this.viewMonth);

      const todayInView = weeks
        .flat()
        .find(
          day =>
            day.getMonth() === this.viewMonth.getMonth() &&
            DateUtils.isSameDay(day, this.today) &&
            !this.isDisabled(day)
        );
      if (todayInView) {
        target = DateUtils.startOfDayLocal(todayInView);
      } else {
        const firstEnabled = weeks
          .flat()
          .find(day => day.getMonth() === this.viewMonth.getMonth() && !this.isDisabled(day));
        target = firstEnabled ? DateUtils.startOfDayLocal(firstEnabled) : null;
      }
    }

    if (target) {
      this.focusedDate = target;
    }

    this.requestUpdate();
    requestAnimationFrame(() => {
      const root = this.shadowRoot;
      const selectedBtn =
        root?.querySelector<HTMLButtonElement>('button.day.selected') ||
        root?.querySelector<HTMLButtonElement>('button.day.focused') ||
        root?.querySelector<HTMLButtonElement>('button.day[tabindex="0"]') ||
        root?.querySelector<HTMLButtonElement>('button.day');

      selectedBtn?.focus({ preventScroll: true });
    });
  }

  private handleHeaderKeyDown = (
    ev: KeyboardEvent,
    type: 'month' | 'year',
    direction: -1 | 1,
    isLastHeaderControl: boolean
  ) => {
    // Only the last header control sends focus into the grid on Tab
    if (ev.key === 'Tab' && !ev.shiftKey) {
      if (isLastHeaderControl) {
        ev.preventDefault();
        ev.stopPropagation();
        this.tabbingIntoGrid = true;
        this.focusInitialGridDay();
      }
      return;
    }

    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      ev.stopPropagation();
      if (type === 'month') this.setMonth(direction);
      else this.setYear(direction);
    }
  };

  private selectSingleDate(d: Date) {
    if (this.isDisabled(d)) return;

    const localMidnight = DateUtils.startOfDayLocal(d);
    const iso = DateUtils.toLocalISODate(localMidnight);
    if (this.value === iso) return;

    this.value = iso;
    const announce = `${this.formatSelectionLabel(localMidnight)}, ${this.localize.term('selected')}`;
    this.announceSelect(announce);
    this.emit('sd-select', { detail: { value: this.value, date: localMidnight } });

    this.inputValue = this.formatInputValue();
    this.updateComplete.then(() => {
      const el = this.input;
      if (el) {
        el.value = this.inputValue ?? '';
        Promise.resolve().then(() => {
          requestAnimationFrame(() => {
            const end = el.value.length;
            el.setSelectionRange(end, end);
          });
        });
      }
    });
  }

  private selectRangeDate(d: Date) {
    const day = DateUtils.startOfDayLocal(d);
    const rs = this.rangeStart ? DateUtils.parseLocalISO(this.rangeStart) : null;
    const re = this.rangeEnd ? DateUtils.parseLocalISO(this.rangeEnd) : null;

    // Start the range
    if (!rs && !re) {
      if (this.isDisabled(day)) return;
      this.rangeStart = DateUtils.toLocalISODate(day);
      this.rangeEnd = null;
      this.previewEnd = null;
      const startLabel = this.formatSelectionLabel(day);
      this.announceSelect(`${this.termStartSelected()}: ${startLabel}`, 40);
      this.emit('sd-range-select', { detail: { start: this.rangeStart, end: this.rangeEnd } });

      this.inputValue = this.formatInputValue();
      this.updateComplete.then(() => {
        const el = this.input;
        if (el) {
          el.value = this.inputValue ?? '';
          Promise.resolve().then(() => {
            requestAnimationFrame(() => {
              const end = el.value.length;
              el.setSelectionRange(end, end);
            });
          });
        }
      });
      return;
    }

    // Complete the range
    if (rs && !re) {
      if (this.isDisabled(day)) return;

      if (DateUtils.isSameDay(rs, day)) {
        if (!this.allowSameDayRange) {
          this.rangeStart = DateUtils.toLocalISODate(day);
          this.rangeEnd = null;
          this.previewEnd = null;
          const startLabel = this.formatSelectionLabel(day);
          this.announceSelect(`${this.termStartSelected()}: ${startLabel}`, 40);
          this.emit('sd-range-select', { detail: { start: this.rangeStart, end: this.rangeEnd } });

          this.inputValue = this.formatInputValue();
          this.updateComplete.then(() => {
            const el = this.input;
            if (el) {
              el.value = this.inputValue ?? '';
              Promise.resolve().then(() => {
                requestAnimationFrame(() => {
                  const end = el.value.length;
                  el.setSelectionRange(end, end);
                });
              });
            }
          });
          return;
        }

        this.rangeStart = DateUtils.toLocalISODate(day);
        this.rangeEnd = DateUtils.toLocalISODate(day);
        this.previewEnd = null;
        const label = this.formatSelectionLabel(day);
        this.announceSelect(`${this.termStartSelected()}: ${label}`, 40);
        this.announceSelect(`${this.termEndSelected()}: ${label}`, 140);
        this.emit('sd-range-select', { detail: { start: this.rangeStart, end: this.rangeEnd } });

        this.inputValue = this.formatInputValue();
        this.updateComplete.then(() => {
          const el = this.input;
          if (el) {
            el.value = this.inputValue ?? '';
            Promise.resolve().then(() => {
              requestAnimationFrame(() => {
                const end = el.value.length;
                el.setSelectionRange(end, end);
              });
            });
          }
        });
        return;
      }

      const rsDate = DateUtils.parseLocalISO(this.rangeStart)!;
      if (this.wouldRangeContainDisabled(rsDate, day)) return;

      const [start, end] = DateUtils.compareDates(rsDate, day) <= 0 ? [rsDate, day] : [day, rsDate];
      this.rangeStart = DateUtils.toLocalISODate(start);
      this.rangeEnd = DateUtils.toLocalISODate(end);
      this.previewEnd = null;

      const startLabel = this.formatSelectionLabel(start);
      const endLabel = this.formatSelectionLabel(end);
      this.announceSelect(`${this.termStartSelected()}: ${startLabel}`, 40);
      this.announceSelect(`${this.termEndSelected()}: ${endLabel}`, 140);
      this.emit('sd-range-select', { detail: { start: this.rangeStart, end: this.rangeEnd } });
      this.inputValue = this.formatInputValue();
      this.updateComplete.then(() => {
        const el = this.input;
        if (el) {
          el.value = this.inputValue ?? '';
          Promise.resolve().then(() => {
            requestAnimationFrame(() => {
              const caretEnd = el.value.length;
              el.setSelectionRange(caretEnd, caretEnd);
            });
          });
        }
      });
      return;
    }

    // Start a new range after completion
    if (rs && re) {
      if (this.isDisabled(day)) return;
      this.rangeStart = DateUtils.toLocalISODate(day);
      this.rangeEnd = null;
      this.previewEnd = null;
      const startLabel = this.formatSelectionLabel(day);
      this.announceSelect(`${this.termStartSelected()}: ${startLabel}`, 40);
      this.emit('sd-range-select', { detail: { start: this.rangeStart, end: this.rangeEnd } });

      this.inputValue = this.formatInputValue();
      this.updateComplete.then(() => {
        const el = this.input;
        if (el) {
          el.value = this.inputValue ?? '';
          Promise.resolve().then(() => {
            requestAnimationFrame(() => {
              const end = el.value.length;
              el.setSelectionRange(end, end);
            });
          });
        }
      });
    }
  }

  private selectDate(d: Date) {
    if (this.range) this.selectRangeDate(d);
    else this.selectSingleDate(d);
  }

  private onKeyDown = (ev: KeyboardEvent) => {
    const key = ev.key;
    let handled = true;
    const next = new Date(this.focusedDate);

    switch (key) {
      case 'ArrowLeft':
        next.setDate(next.getDate() - 1);
        break;
      case 'ArrowRight':
        next.setDate(next.getDate() + 1);
        break;
      case 'ArrowUp':
        next.setDate(next.getDate() - 7);
        break;
      case 'ArrowDown':
        next.setDate(next.getDate() + 7);
        break;
      case 'Escape': {
        if (this.previewEnd) {
          this.previewEnd = null;
          this.setNavStatus(this.localize.term('selectionCleared'));
        } else if (this.range && this.rangeStart && !this.rangeEnd) {
          this.rangeStart = null;
          this.setNavStatus(this.localize.term('selectionCleared'));
          this.emit('sd-range-select', { detail: { start: this.rangeStart, end: this.rangeEnd } });
        }
        if (this.open) {
          this.hide();
          this.emit('sd-datepicker-close');
        }
        break;
      }
      case 'Enter':
      case ' ':
        this.selectDate(this.focusedDate);
        break;
      default:
        handled = false;
    }

    if (handled) {
      ev.preventDefault();
      const monthChanged =
        next.getMonth() !== this.viewMonth.getMonth() || next.getFullYear() !== this.viewMonth.getFullYear();
      if (monthChanged) {
        this.viewMonth = new Date(next.getFullYear(), next.getMonth(), 1);
        const monthLabel = this.formatMonthYear(this.viewMonth);
        this.setNavStatus(monthLabel);
      }

      const fd = DateUtils.startOfDayLocal(next);
      if (!this.focusedDate || fd.getTime() !== this.focusedDate.getTime()) {
        this.focusedDate = fd;
      }

      const dayLabel = fd.toLocaleDateString(this.locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      this.setNavStatus(dayLabel);

      this.requestUpdate();

      requestAnimationFrame(() => {
        const root = this.shadowRoot;
        const btn = root?.querySelector<HTMLButtonElement>('button.day.focused');
        btn?.focus({ preventScroll: true });
      });
    }
  };

  private handleInputKeyDown = (ev: KeyboardEvent) => {
    if (
      ev.key === 'ArrowLeft' ||
      ev.key === 'ArrowRight' ||
      ev.key === 'ArrowUp' ||
      ev.key === 'ArrowDown' ||
      ev.key === 'Home' ||
      ev.key === 'End' ||
      ev.key === 'PageUp' ||
      ev.key === 'PageDown'
    ) {
      return;
    }

    if (ev.key === 'Escape' && this.open) {
      ev.preventDefault();
      this.hide();
      this.emit('sd-datepicker-close');
      return;
    }

    if (ev.key === 'Enter' && !this.open && !this.disabled && !this.visuallyDisabled) {
      ev.preventDefault();
      this.show();
    }
  };

  private getMonthMatrix(monthRef: Date) {
    const fdw = this.firstDayOfWeek ?? 1;
    const firstOfMonth = new Date(monthRef.getFullYear(), monthRef.getMonth(), 1);
    const start = new Date(firstOfMonth);
    const offset = (firstOfMonth.getDay() - fdw + 7) % 7;
    start.setDate(firstOfMonth.getDate() - offset);

    const weeks: Date[][] = [];
    const cursor = start;
    for (let w = 0; w < 6; w++) {
      const row: Date[] = [];
      for (let d = 0; d < 7; d++) {
        row.push(new Date(cursor));
        cursor.setDate(cursor.getDate() + 1);
      }
      weeks.push(row);
    }
    return { weeks };
  }

  private formatMonthYear(d: Date): string {
    try {
      return new Intl.DateTimeFormat(this.locale, { month: 'long', year: 'numeric' }).format(d);
    } catch {
      return `${d.toLocaleString(undefined, { month: 'long' })} ${d.getFullYear()}`;
    }
  }

  private weekdayLabels(): string[] {
    const fdw = this.firstDayOfWeek ?? 1;
    const base = new Date(2021, 7, 1);
    const labels: string[] = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(base);
      day.setDate(base.getDate() + ((fdw + i) % 7));
      try {
        labels.push(new Intl.DateTimeFormat(this.locale, { weekday: 'short' }).format(day));
      } catch {
        labels.push(day.toLocaleDateString(undefined, { weekday: 'short' }));
      }
    }
    return labels;
  }

  /** Chooses a tabbable day when tabbing into the grid (today or first enabled). */
  private getTabTargetDayForCurrentView(weeks: Date[][]): Date | null {
    const inViewToday = weeks
      .flat()
      .find(
        d => d.getMonth() === this.viewMonth.getMonth() && DateUtils.isSameDay(d, this.today) && !this.isDisabled(d)
      );
    if (inViewToday) return DateUtils.startOfDayLocal(inViewToday);

    const firstEnabled = weeks.flat().find(d => d.getMonth() === this.viewMonth.getMonth() && !this.isDisabled(d));
    return firstEnabled ? DateUtils.startOfDayLocal(firstEnabled) : null;
  }

  /** Mouse enter on a day: updates preview end when selecting a range. */
  private onDayMouseEnter(day: Date) {
    if (!this.range) return;
    const rs = this.rangeStart ? DateUtils.parseLocalISO(this.rangeStart) : null;
    const re = this.rangeEnd ? DateUtils.parseLocalISO(this.rangeEnd) : null;
    if (rs && !re) {
      const local = DateUtils.startOfDayLocal(day);
      this.previewEnd = this.isDisabled(local) ? null : local;
      this.requestUpdate();
    }
  }

  private onGridMouseLeave() {
    if (this.previewEnd !== null) {
      this.previewEnd = null;
      this.requestUpdate();
    }
  }

  private renderCalendar() {
    const { weeks } = this.getMonthMatrix(this.viewMonth);
    const monthLabel = this.formatMonthYear(this.viewMonth);
    const weekdays = this.weekdayLabels();

    const selectedSingle = this.value ? this.parseISO(this.value) : null;
    const rs = this.rangeStart ? this.parseISO(this.rangeStart) : null;
    const re = this.rangeEnd ? this.parseISO(this.rangeEnd) : null;
    const pe = this.previewEnd;

    const isInPreviewRange = (day: Date) => {
      if (!this.range || !rs || re || !pe) return false;
      return DateUtils.isBetweenInclusive(day, rs, pe);
    };

    const tabTarget = this.getTabTargetDayForCurrentView(weeks);

    return html`
      <div
        part="datepicker"
        class="w-[284px] z-50 absolute top-full bg-white border-2 border-t-0 border-primary py-3 px-4 ${this.open
          ? 'block rounded-bl-default rounded-br-default'
          : 'hidden'} ${this.alignment === 'left' ? 'left-0' : 'right-0'}"
      >
        <div class="flex flex-row items-center w-full justify-between mb-3" part="header">
          <div class="flex items-center">
            <!-- Prev Year -->
            <button
              type="button"
              tabindex="0"
              class="nav prev w-6 h-6 hover:cursor-pointer sd-interactive"
              part="prev-year-button"
              @click=${() => this.setYear(-1)}
              @keydown=${(ev: KeyboardEvent) => this.handleHeaderKeyDown(ev, 'year', -1, false)}
              aria-label=${this.localize.term('previousYear')}
            >
              <sd-icon library="_internal" name="chevrons-sm-left" class="h-6 w-6"></sd-icon>
            </button>
            <!-- Prev Month -->
            <button
              type="button"
              tabindex="0"
              class="nav prev w-6 h-6 hover:cursor-pointer sd-interactive"
              part="prev-month-button"
              @click=${() => this.setMonth(-1)}
              @keydown=${(ev: KeyboardEvent) => this.handleHeaderKeyDown(ev, 'month', -1, false)}
              aria-label=${this.localize.term('previousMonth')}
            >
              <sd-icon library="_internal" name="chevron-sm-left" class="h-6 w-6"></sd-icon>
            </button>
          </div>

          <!-- Month label -->
          <div
            tabindex="-1"
            class="month-label flex justify-center sd-headline sd-headline--size-base !text-primary"
            part="month-label"
            aria-live="polite"
          >
            ${monthLabel}
          </div>

          <div class="flex items-center">
            <!-- Next Month -->
            <button
              type="button"
              tabindex="0"
              class="nav next w-6 h-6 hover:cursor-pointer sd-interactive"
              part="next-month-button"
              @click=${() => this.setMonth(1)}
              @keydown=${(ev: KeyboardEvent) => this.handleHeaderKeyDown(ev, 'month', 1, false)}
              aria-label=${this.localize.term('nextMonth')}
            >
              <sd-icon library="_internal" name="chevron-sm-right" class="h-6 w-6"></sd-icon>
            </button>
            <!-- Next Year -->
            <button
              type="button"
              tabindex="0"
              class="nav next w-6 h-6 hover:cursor-pointer sd-interactive"
              part="next-year-button"
              @click=${() => this.setYear(1)}
              @keydown=${(ev: KeyboardEvent) => this.handleHeaderKeyDown(ev, 'year', 1, true)}
              aria-label=${this.localize.term('nextYear')}
            >
              <sd-icon library="_internal" name="chevrons-sm-right" class="h-6 w-6"></sd-icon>
            </button>
          </div>
        </div>

        <sd-divider></sd-divider>

        <!-- Live regions -->
        <div class="sr-only" aria-live="polite" aria-atomic="true">${this.statusNavText}</div>
        <div class="sr-only" aria-live="assertive" aria-atomic="true">${this.statusSelectText}</div>

        <div class="sr-only" id="keyboard-hint">${this.localize.term('datePickerInfo')}</div>

        <div
          class="grid mt-2"
          role="grid"
          aria-describedby="keyboard-hint"
          aria-label=${monthLabel}
          part="grid"
          @mouseleave=${this.onGridMouseLeave}
          @focusin=${() => {
            this.tabbingIntoGrid = false;
          }}
        >
          <div class="grid-row grid-head grid grid-cols-7 gap-y-[1px]" role="row">
            ${weekdays.map(
              (w, colIndex) => html`
                <div
                  role="columnheader"
                  aria-colindex=${colIndex + 1}
                  part="weekday"
                  class="cell head flex items-center justify-center font-bold text-black text-sm leading-none h-8"
                  aria-label=${w}
                  title=${w}
                  id=${'col-' + (colIndex + 1)}
                >
                  ${w}
                </div>
              `
            )}
          </div>

          ${weeks.map(
            (week, rowIndex) => html`
              <div
                class="grid-row grid grid-cols-7 ${rowIndex === 0 ? 'mt-2' : ''}"
                role="row"
                aria-rowindex=${rowIndex + 2}
              >
                ${week.map((day, colIndex) => {
                  const inMonth = day.getMonth() === this.viewMonth.getMonth();
                  const disabled = this.isDisabled(day);
                  const isFocused = DateUtils.isSameDay(day, this.focusedDate);
                  const isToday = DateUtils.isSameDay(day, this.today);

                  const isSelectedSingle =
                    !this.range && selectedSingle ? DateUtils.isSameDay(day, selectedSingle) : false;
                  const isRangeStart = this.range && rs ? DateUtils.isSameDay(day, rs) : false;
                  const isRangeEnd = this.range && re ? DateUtils.isSameDay(day, re) : false;
                  const inSelectedRange = this.range && rs && re ? DateUtils.isBetweenInclusive(day, rs, re) : false;
                  const inPreviewRange = isInPreviewRange(day) && !disabled;

                  let tabIndex = -1;
                  const isTabTarget = tabTarget && DateUtils.isSameDay(day, tabTarget);
                  if (this.tabbingIntoGrid && isTabTarget) {
                    tabIndex = 0;
                  } else if (!this.tabbingIntoGrid && isFocused) {
                    tabIndex = 0;
                  }

                  const isWeekendDay = this.isWeekend(day);

                  const label = day.toLocaleDateString(this.locale, {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  });

                  const roleDesc = isRangeStart
                    ? this.localize.term('startDateSelected')
                    : isRangeEnd
                      ? this.localize.term('endDateSelected')
                      : undefined;

                  return html`
                    <button
                      type="button"
                      part="day"
                      class=${cx(
                        'cell day flex items-center justify-center focus-visible:outline focus:outline-2 focus:outline-primary -outline-offset-2 rounded-md w-[36px]',
                        this.size === 'sm' ? 'text-sm h-6' : 'text-base h-8',
                        isRangeStart || isRangeEnd
                          ? 'hover:bg-primary-500'
                          : 'hover:bg-primary-100 hover:text-primary-500',
                        !inMonth
                          ? isWeekendDay
                            ? 'out-month weekend-day text-neutral-500'
                            : 'out-month text-neutral-700'
                          : this.isInDisabledDates(day)
                            ? 'out-month text-neutral-700'
                            : this.disabledWeekends && isWeekendDay
                              ? 'weekend-day text-neutral-500'
                              : 'in-month text-primary',
                        isSelectedSingle
                          ? 'selected border-primary bg-primary text-white hover:bg-primary-500 hover:text-white'
                          : '',
                        isRangeStart ? 'bg-primary text-white rounded-l-md rounded-r-none' : '',
                        isRangeEnd ? 'bg-primary text-white range-end rounded-r-md rounded-l-none' : '',
                        inSelectedRange && !isRangeStart && !isRangeEnd
                          ? 'in-range selected bg-primary-100 text-primary-500 rounded-none hover:bg-primary-500 hover:text-white'
                          : '',
                        !inSelectedRange && inPreviewRange && !isRangeStart && !isRangeEnd
                          ? 'in-preview-range bg-primary-100 text-primary-500 rounded-none'
                          : '',
                        isToday && !isSelectedSingle && !isRangeStart && !isRangeEnd && isFocused
                          ? 'today border-[1px] border-primary font-bold'
                          : '',
                        disabled ? 'disabled cursor-not-allowed hover:bg-transparent' : '',
                        isFocused && !isToday ? 'focused outline outline-2 outline-primary' : ''
                      )}
                      role="gridcell"
                      aria-colindex=${colIndex + 1}
                      aria-labelledby=${'col-' + (colIndex + 1)}
                      .tabIndex=${tabIndex}
                      ?disabled=${disabled || this.disabled}
                      aria-disabled=${disabled || this.visuallyDisabled || this.disabled ? 'true' : 'false'}
                      aria-selected=${isSelectedSingle || inSelectedRange || isRangeStart || isRangeEnd
                        ? 'true'
                        : 'false'}
                      aria-current=${isToday ? 'date' : nothing}
                      aria-label=${label}
                      aria-roledescription=${roleDesc ?? nothing}
                      @focus=${() => (this.focusedDate = DateUtils.startOfDayLocal(day))}
                      @mouseenter=${() => this.onDayMouseEnter(day)}
                      @keydown=${this.onKeyDown}
                      @click=${() => {
                        this.focusedDate = DateUtils.startOfDayLocal(day);
                        this.selectDate(day);
                      }}
                    >
                      ${day.getDate()}
                    </button>
                  `;
                })}
              </div>
            `
          )}
        </div>
      </div>
    `;
  }

  render() {
    const slots = {
      label: this.hasSlotController.test('label'),
      helpText: this.hasSlotController.test('help-text'),
      tooltip: this.hasSlotController.test('tooltip')
    };

    const hasLabel = this.label ? true : !!slots['label'];
    const hasHelpText = this.helpText ? true : !!slots['helpText'];
    const hasTooltip = !!slots['tooltip'];

    const iconColor = this.disabled || this.visuallyDisabled ? 'text-neutral-500' : 'text-primary';
    const iconMarginLeft = { sm: 'ml-1', md: 'ml-2', lg: 'ml-2' }[this.size];
    const iconSize = { sm: 'text-base', md: 'text-lg', lg: 'text-xl' }[this.size];

    const inputState = this.disabled
      ? 'disabled'
      : this.visuallyDisabled && !this.hasFocus
        ? 'visuallyDisabled'
        : this.readonly
          ? 'readonly'
          : this.hasFocus && this.showInvalidStyle
            ? 'activeInvalid'
            : this.hasFocus && this.styleOnValid && this.showValidStyle
              ? 'activeValid'
              : this.hasFocus || this.open
                ? 'active'
                : this.showInvalidStyle
                  ? 'invalid'
                  : this.styleOnValid && this.showValidStyle
                    ? 'valid'
                    : 'default';

    const borderColor = {
      disabled: 'border-neutral-500',
      visuallyDisabled: 'border-neutral-500',
      readonly: 'border-neutral-800',
      activeInvalid: 'border-error border-2',
      activeValid: 'border-success border-2',
      active: 'border-primary border-2',
      invalid: 'border-error',
      valid: 'border-success',
      default: 'border-neutral-800'
    }[inputState];

    const textSize = this.size === 'sm' ? 'text-sm' : 'text-base';

    return html`<div
        part="form-control"
        class=${cx('w-[370px]', this.open && 'z-50', (this.disabled || this.visuallyDisabled) && 'cursor-not-allowed')}
      >
        ${hasLabel || hasTooltip
          ? html`<div class="flex items-center gap-1 mb-2">
              <label
                part="form-control-label"
                id="label"
                class=${cx(hasLabel ? 'inline-block form-control-color-text' : 'hidden', textSize)}
                for="input"
                aria-hidden=${hasLabel ? 'false' : 'true'}
              >
                <slot name="label">${this.label}</slot>
              </label>
              ${slots['tooltip'] ? html`<slot name="tooltip"></slot>` : ''}
            </div>`
          : null}

        <div
          part="form-control-input"
          class=${cx(
            'relative w-full',
            this.disabled && 'pointer-events-none',
            this.visuallyDisabled && 'cursor-not-allowed'
          )}
        >
          <div
            part="border"
            class=${cx(
              'absolute top-0 w-full h-full pointer-events-none border rounded-default z-10 transition-[border] duration-medium ease-in-out',
              borderColor,
              this.open && this.alignment === 'left' ? 'rounded-bl-none' : '',
              this.open && this.alignment === 'right' ? 'rounded-br-none' : ''
            )}
          ></div>
          <sd-popup
            @sd-current-placement=${this.handleCurrentPlacement}
            class=${cx('inline-flex relative w-full')}
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
            exportparts="popup:popup__content,"
          >
            <div
              part="base"
              class=${cx(
                'px-4 flex flex-row items-center rounded-default transition-colors ease-in-out duration-medium hover:duration-fast w-full',
                !this.disabled && !this.readonly && !this.visuallyDisabled ? 'hover:bg-neutral-200' : '',
                this.readonly ? 'bg-neutral-100' : 'bg-white',
                inputState === 'disabled' || inputState === 'visuallyDisabled' ? 'text-neutral-500' : 'text-black'
              )}
              slot="anchor"
            >
              <input
                id="input"
                type="text"
                role="combobox"
                aria-expanded=${this.open ? 'true' : 'false'}
                aria-haspopup="dialog"
                aria-controls="calendar-grid"
                aria-describedby=${hasHelpText ? 'help-text' : undefined}
                aria-invalid=${this.showInvalidStyle ? 'true' : 'false'}
                aria-label=${this.range ? 'Select date range' : 'Select a date'}
                class=${cx(
                  'min-w-0 flex-grow focus:outline-none bg-transparent form-control-color-text',
                  this.visuallyDisabled || this.disabled
                    ? 'placeholder-neutral-500 cursor-not-allowed'
                    : 'placeholder-neutral-700',
                  { sm: 'h-8', md: 'h-10', lg: 'h-12' }[this.size],
                  textSize
                )}
                placeholder=${this.placeholder ||
                this.localize.term(this.range ? 'dateRangePlaceholder' : 'datePlaceholder')}
                ?disabled=${this.disabled || this.disabled}
                ?readonly=${this.readonly}
                @input=${this.handleInput}
                @click=${this.handleMouseDown}
                @keydown=${this.handleInputKeyDown}
                @focus=${this.handleFocus}
                @blur=${this.handleInputBlur}
                @invalid=${this.handleInvalid}
              />

              ${this.showInvalidStyle
                ? html`<sd-icon
                    part="invalid-icon"
                    class=${cx('text-error', iconMarginLeft, iconSize)}
                    library="_internal"
                    name="risk"
                  ></sd-icon>`
                : ''}
              ${this.showValidStyle && this.styleOnValid
                ? html`<sd-icon
                    class=${cx('text-success flex-shrink-0', iconMarginLeft, iconSize)}
                    library="_internal"
                    name="confirm-circle"
                    part="valid-icon"
                  ></sd-icon>`
                : ''}

              <sd-icon class=${cx(iconColor, iconMarginLeft, iconSize)} library="_internal" name="calendar"></sd-icon>

              ${this.renderCalendar()}
            </div>
          </sd-popup>
        </div>
        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class=${cx('text-sm text-neutral-700 mt-1', hasHelpText ? 'block' : 'hidden')}
          aria-hidden=${!hasHelpText}
        >
          ${this.helpText}
        </slot>
      </div>
      ${this.formControlController.renderInvalidMessage()} `;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply inline-block relative outline-none;
      }

      :host([required]) #label::after {
        content: ' *';
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-datepicker': SdDatepicker;
  }
}
