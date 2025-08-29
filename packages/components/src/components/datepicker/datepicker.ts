import { css, html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import cx from 'classix';

import { CalendarGeneratorUTC } from '../../internal/calendar-generator-utc';
import { CalendarInputFormatter } from '../../internal/calendar-input-formatter';
import { CalendarRangeUTC } from '../../internal/calendar-range-utc';
import { customElement } from '../../internal/register-custom-element';
import { DateFormatUTC } from '../../internal/date-format-utc';
import { DateParserUTC } from '../../internal/date-parser-utc';
import { DateUTC } from '../../internal/date-utc';
import { HasSlotController } from '../../internal/slot';
import { LocalizeController } from '../../utilities/localize';
import { waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch';
import SolidElement from '../../internal/solid-element';
import type SdPopup from '../../components/popup/popup';

/**
 * @summary Short summary of the component's intended use.
 * @status experimental
 * @since 1.0
 *
 * @dependency sd-datepicker
 *
 * @event sd-event-name - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('sd-datepicker')
export default class SdDatepicker extends SolidElement {
  public localize = new LocalizeController(this);

  private readonly hasSlotController = new HasSlotController(this, 'label', 'help-text', 'tooltip');

  @property({ type: String }) value = '';

  @property({ type: String }) locale = 'de-DE';

  @property({ type: Boolean }) range = false;

  @property({ type: String, reflect: true }) size: 'lg' | 'md' | 'sm' = 'lg';

  @property({ type: String }) alignment: 'left' | 'right' = 'left';

  @property({ type: String, reflect: true }) label = '';

  @property({ type: String, attribute: 'help-text', reflect: true }) helpText = '';

  @property({ type: Boolean, reflect: true }) disabled = false;

  @property({ type: Boolean, attribute: 'visually-disabled' }) visuallyDisabled = false;

  @property({ type: Boolean, reflect: true, attribute: 'style-on-valid' }) styleOnValid = false;

  @property({ type: Boolean, reflect: true }) readonly = false;

  @property({ type: String, reflect: true }) placement: 'top' | 'bottom' = 'bottom';

  @property({ type: Boolean, reflect: true, attribute: 'no-weekends' }) noWeekends = false;

  @property({ type: Array }) disabledDays: Date[] = [];

  @state() private currentDate = new Date();

  @state() private selectedDate: Date | null = null;

  @state() private open = false;

  @state() hasFocus = false;

  @state() isFocused = false;

  @state() showValidStyle = false;

  @state() showInvalidStyle = false;

  @state() currentPlacement = this.placement;

  @state() private inputValue = '';

  @state() private focusedDate: Date | null = null;

  @query('sd-popup') popup: SdPopup;

  @query('[part="base"]') datepicker: HTMLElement;

  private dateParser: DateParserUTC;
  private rangeHandler: CalendarRangeUTC;
  private calendarGenerator: CalendarGeneratorUTC;
  private inputFormatter: CalendarInputFormatter;

  constructor() {
    super();
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.initializeUtilities();
    this.initializeDates();
    document.addEventListener('click', this.handleOutsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.handleOutsideClick);
  }

  @watch('locale')
  handleLocaleChange() {
    this.initializeUtilities();
    this.inputValue = this.getDisplayValue();
    // this.requestUpdate();
  }

  private initializeUtilities() {
    this.dateParser = new DateParserUTC(this.locale);
    this.rangeHandler = new CalendarRangeUTC();
    this.calendarGenerator = new CalendarGeneratorUTC(this.locale);
    this.inputFormatter = new CalendarInputFormatter(this.locale);
  }

  private initializeDates() {
    if (!this.value) {
      return;
    }

    if (this.range) {
      const { start, end } = this.dateParser.parseRange(this.value);

      if (start && end) {
        this.rangeHandler.setStart(start);
        this.rangeHandler.setEnd(end);
        this.currentDate = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      }

      this.inputValue = this.getDisplayValue();
      return;
    }

    const date = this.dateParser.parseDate(this.value);

    if (date) {
      this.selectedDate = date;
      this.currentDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    }

    this.inputValue = this.getDisplayValue();
  }

  private handleOutsideClick(event: Event) {
    const path = (event as MouseEvent).composedPath?.() ?? [];
    if (!path.includes(this)) {
      this.hide();
      this.isFocused = false;

      if (this.range && this.rangeHandler.isSelectingRange) {
        this.rangeHandler.clearRange();
        this.inputValue = this.getDisplayValue();
      }

      this.emit('sd-datepicker-close');
    }
  }

  private handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    let value = target.value;

    if (this.range) {
      const formatted = this.inputFormatter.formatRangeTyping(value);
      if (formatted !== value) {
        target.value = formatted;
        value = formatted;
      }
    }

    this.inputValue = value;
  }

  private handleInputBlur() {
    this.validateAndSetDate();
    this.handleBlur();
  }

  private validateAndSetDate() {
    const parser = this.dateParser;
    const s = this.inputValue.trim();

    if (!s) {
      this.clearSelection();
      return;
    }

    if (this.range) {
      const { start, end } = parser.parseRange(s);
      if (!(start && end)) {
        this.inputValue = this.getDisplayValue();
        return;
      }
      this.rangeHandler.setStart(start);
      this.rangeHandler.setEnd(end);
      const ymdStart = DateUTC.toYMD(start);
      const ymdEnd = DateUTC.toYMD(end);
      this.value = `${ymdStart} - ${ymdEnd}`;
      this.currentDate = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      this.inputValue = DateFormatUTC.rangeToDisplay(start, end, this.locale);
      this.emitRangeSelected();
      return;
    }

    const date = parser.parseDate(s);
    if (!date) {
      this.inputValue = this.getDisplayValue();
      return;
    }

    this.selectedDate = date;
    this.value = DateUTC.toYMD(date);
    this.currentDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    this.inputValue = DateFormatUTC.toDisplay(date, this.locale);
    this.emitDateSelected();
  }

  private clearSelection() {
    this.selectedDate = null;
    this.rangeHandler.clearRange();
    this.value = '';
    this.inputValue = '';
  }

  private emitDateSelected() {
    this.emit('sd-datepicker-selected', {
      detail: {
        value: this.value,
        date: this.selectedDate
      }
    });
  }

  private emitRangeSelected() {
    const range = this.rangeHandler.getRange();
    this.emit('sd-datepicker-selected', {
      detail: {
        value: this.value,
        startDate: range.start,
        endDate: range.end
      }
    });
  }

  private navigateMonth(direction: number) {
    this.currentDate = DateUTC.addMonths(this.currentDate, direction);
  }

  private navigateYear(direction: number) {
    this.currentDate = DateUTC.addMonths(this.currentDate, direction * 12);
  }

  private handleMonthKeyDown(direction: number) {
    return (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.navigateMonth(direction);
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        this.hide();
      }
    };
  }

  private handleYearKeyDown(direction: number) {
    return (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.navigateYear(direction);
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        this.hide();
      }
    };
  }

  private selectDate(date: Date) {
    const normalizedDate = this.normalizeDate(date);

    if (!this.isDateSelectable(normalizedDate)) {
      return;
    }

    if (this.range) {
      this.handleRangeSelection(normalizedDate);
    } else {
      this.handleSingleDateSelection(normalizedDate);
    }
  }

  private normalizeDate(date: Date): Date {
    return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  }

  private isDateSelectable(date: Date): boolean {
    if (Array.isArray(this.disabledDays) && this.disabledDays.some(disabledDate => DateUTC.same(disabledDate, date))) {
      return false;
    }

    if (this.noWeekends && DateUTC.isWeekend(date)) {
      return false;
    }

    return true;
  }

  private handleSingleDateSelection(date: Date) {
    this.selectedDate = date;
    this.value = DateUTC.toYMD(date);
    this.inputValue = DateFormatUTC.toDisplay(date, this.locale);
    this.open = false;
    this.emitDateSelected();
  }

  private handleRangeSelection(date: Date) {
    const { start, end } = this.rangeHandler.getRange();

    if (this.shouldStartNewRange(start, end)) {
      this.startNewRange(date);
    } else {
      this.completeRange(date);
    }
  }

  private shouldStartNewRange(start: Date | null, end: Date | null): boolean {
    return !start || (!!start && !!end);
  }

  private startNewRange(date: Date) {
    this.rangeHandler.setStart(date);
    const range = this.rangeHandler.getRange();

    this.inputValue = range.start ? `${DateFormatUTC.toDisplay(range.start, this.locale)} - ` : '';

    this.requestUpdate();
  }

  private completeRange(date: Date) {
    this.rangeHandler.setEnd(date);
    const range = this.rangeHandler.getRange();

    if (range.start && range.end) {
      this.value = `${DateUTC.toYMD(range.start)} - ${DateUTC.toYMD(range.end)}`;
      this.inputValue = DateFormatUTC.rangeToDisplay(range.start, range.end, this.locale);
      this.emitRangeSelected();
      this.requestUpdate();
    }
  }

  private getDisplayValue(): string {
    if (this.range) {
      const { start, end } = this.rangeHandler.getRange();
      if (start && end) return DateFormatUTC.rangeToDisplay(start, end, this.locale);
      if (start) return DateFormatUTC.toDisplay(start, this.locale);
      return '';
    }
    return this.selectedDate ? DateFormatUTC.toDisplay(this.selectedDate, this.locale) : '';
  }

  private handleCurrentPlacement(e: CustomEvent<'top' | 'bottom'>) {
    const incomingPlacement = e.detail;

    if (incomingPlacement) {
      this.currentPlacement = incomingPlacement;
    }
  }

  async show() {
    if (this.open || this.disabled || this.visuallyDisabled) {
      this.open = false;
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'sd-after-show');
  }

  async hide() {
    if (!this.open || this.disabled) {
      this.open = false;
      return;
    }

    this.open = false;
    if (this.range) this.rangeHandler.setHovered(null);
    await waitForEvent(this, 'sd-after-hide');
  }

  private handleDocumentKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.open) {
      event.preventDefault();
      event.stopPropagation();
      this.hide();
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopImmediatePropagation();

      const target = event.target as HTMLElement;

      if (target.classList.contains('day-cell')) {
        const day = parseInt(target.textContent || '', 10);
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        const date = new Date(Date.UTC(year, month, day));
        this.selectDate(date);
      }

      if (!this.open) {
        this.show();
      }
    }
  };

  private handleMouseDown(event: MouseEvent) {
    if (this.disabled || this.visuallyDisabled) {
      return;
    }

    event.preventDefault();
    this.datepicker.focus({ preventScroll: true });
    this.open = !this.open;
  }

  private handleKeyDown(event: KeyboardEvent) {
    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }

  private getCurrentFocusedDate(): Date | null {
    return this.focusedDate || this.selectedDate || this.currentDate || this.calendarGenerator.todayUTC();
  }

  private focusDate(date: Date) {
    this.focusedDate = date;

    if (date.getMonth() !== this.currentDate.getMonth() || date.getFullYear() !== this.currentDate.getFullYear()) {
      this.currentDate = new Date(date);
    }
    this.requestUpdate();

    this.updateComplete.then(() => {
      const ymd = `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')}`;
      const dayElement = this.querySelector(`[data-date="${ymd}"]`);
      if (dayElement instanceof HTMLElement) dayElement.focus();
    });
  }

  private focusInput() {
    const input = this.querySelector('input')!;
    if (input) {
      input.focus();
    }
  }

  private handleCalendarKeyDown(event: KeyboardEvent) {
    if (!this.open) return;

    const currentFocused = this.getCurrentFocusedDate();
    let newFocusDate: Date | null = null;

    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        newFocusDate = DateUTC.addDays(currentFocused || this.currentDate, 1);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        newFocusDate = DateUTC.addDays(currentFocused || this.currentDate, -1);
        break;
      case 'ArrowDown':
        event.preventDefault();
        newFocusDate = DateUTC.addDays(currentFocused || this.currentDate, 7);
        break;
      case 'ArrowUp':
        event.preventDefault();
        newFocusDate = DateUTC.addDays(currentFocused || this.currentDate, -7);
        break;
      case 'Home':
        event.preventDefault();
        newFocusDate = DateUTC.monthStart(currentFocused || this.currentDate);
        break;
      case 'End': {
        event.preventDefault();
        const monthStart = DateUTC.monthStart(currentFocused || this.currentDate);
        newFocusDate = DateUTC.addDays(DateUTC.addMonths(monthStart, 1), -1);
        break;
      }
      case 'PageUp':
        event.preventDefault();
        newFocusDate = DateUTC.addMonths(currentFocused || this.currentDate, event.shiftKey ? -12 : -1);
        break;
      case 'PageDown':
        event.preventDefault();
        newFocusDate = DateUTC.addMonths(currentFocused || this.currentDate, event.shiftKey ? 12 : 1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (currentFocused) {
          this.selectDate(currentFocused);
        }
        break;
      case 'Escape':
        event.preventDefault();
        this.hide();
        this.focusInput();
        break;
    }

    if (newFocusDate) {
      this.focusDate(newFocusDate);
    }
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('sd-blur');
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('sd-focus');
  }

  private handleDateHover(date: Date) {
    if (this.range) {
      this.rangeHandler.setHovered(date);
      this.requestUpdate();
    }
  }

  private handleDateLeave() {
    if (this.range) {
      this.rangeHandler.setHovered(null);
    }
  }

  render() {
    const monthDays = this.calendarGenerator.generateMonth(
      this.currentDate,
      this.selectedDate,
      this.range ? this.rangeHandler : undefined,
      this.disabledDays ? this.disabledDays : []
    );
    const dayHeaders = this.calendarGenerator.getDayHeaders();

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
    const iconSize = {
      sm: 'text-base',
      md: 'text-lg',
      lg: 'text-xl'
    }[this.size];

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

    return html` <div
      part="form-control"
      class=${cx('w-[370px]', this.open && 'z-50', (this.disabled || this.visuallyDisabled) && 'cursor-not-allowed')}
    >
      ${
        hasLabel || hasTooltip
          ? html`<div class="flex items-center gap-1 mb-2">
              <label
                part="form-control-label"
                id="label"
                class=${cx(hasLabel ? 'inline-block' : 'hidden', textSize)}
                for="input"
                aria-hidden=${hasLabel ? 'false' : 'true'}
              >
                <slot name="label">${this.label}</slot>
              </label>

              ${slots['tooltip'] ? html`<slot name="tooltip"></slot>` : ''}
            </div>`
          : null
      }

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
            this.open &&
              (this.currentPlacement === 'bottom'
                ? 'rounded-bl-none rounded-br-none'
                : 'rounded-tl-none rounded-tr-none')
          )}
        ></div>
        <sd-popup
          @sd-current-placement=${this.handleCurrentPlacement}
          class=${cx('inline-flex relative w-full')}
          sync="width"
          auto-size="vertical"
          auto-size-padding="10"
          exportparts="
            popup:popup__content,
          "
        >
          <div part="base"
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
                'min-w-0 flex-grow focus:outline-none bg-transparent',
                this.visuallyDisabled || this.disabled
                  ? 'placeholder-neutral-500 cursor-not-allowed'
                  : 'placeholder-neutral-700',
                {
                  sm: 'h-8',
                  md: 'h-10',
                  lg: 'h-12'
                }[this.size],
                textSize
              )}
              .value=${this.inputValue}
              placeholder=${this.range ? 'Select date range' : 'Select a date'}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              @input=${this.handleInput}
              @click=${this.handleMouseDown}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleInputBlur}
            />

            ${
              this.showInvalidStyle
                ? html`
                    <sd-icon
                      part="invalid-icon"
                      class=${cx('text-error', iconMarginLeft, iconSize)}
                      library="_internal"
                      name="risk"
                    ></sd-icon>
                  `
                : ''
            }
            ${
              this.showValidStyle && this.styleOnValid
                ? html`
                    <sd-icon
                      class=${cx('text-success flex-shrink-0', iconMarginLeft, iconSize)}
                      library="_internal"
                      name="status-check"
                      part="valid-icon"
                    ></sd-icon>
                  `
                : ''
            }

            <sd-icon class=${cx(iconColor, iconMarginLeft, iconSize)} library="_internal" name="calendar"></sd-icon>

          <div
            id="calendar-grid"
            role="dialog"
            aria-label=${this.range ? 'Date range picker' : 'Date picker'}
            aria-modal="true"
            class="calendar absolute top-full bg-white border-2 border-t-0 border-primary py-3 px-4
            ${this.alignment === 'left' ? 'left-0' : 'right-0'}
            ${this.open ? 'block' : 'hidden'}"
          >
            <div class="calendar-header flex justify-between items-center mb-3">
              <div class="flex items-center gap-1">
                <button
                  class="nav-button w-6 h-6 hover:cursor-pointer sd-interactive"
                  @click=${() => this.navigateYear(-1)}
                  @keydown=${this.handleYearKeyDown(-1)}
                  aria-label="Previous year"
                >
                  <sd-icon library="_internal" name="chevrons-sm-left" class="h-6 w-6"></sd-icon>
                </button>

                <button
                  class="nav-button w-6 h-6 hover:cursor-pointer sd-interactive"
                  @click=${() => this.navigateMonth(-1)}
                  @keydown=${this.handleMonthKeyDown(-1)}
                  aria-label="Previous month"
                >
                  <sd-icon library="_internal" name="chevron-sm-left" class="h-6 w-6"></sd-icon>
                </button>
              </div>

              <div id="month-year-heading" class="month-year w-[180px] flex justify-center sd-headline sd-headline--size-lg !text-primary" aria-live="polite">
                ${this.calendarGenerator.getMonthYearLabel(this.currentDate)}
              </div>

              <div class="flex items-center gap-1">
                <button
                  class="nav-button w-6 h-6 hover:cursor-pointer sd-interactive"
                  @click=${() => this.navigateMonth(1)}
                  @keydown=${this.handleMonthKeyDown(1)}
                  aria-label="Next month"
                >
                  <sd-icon library="_internal" name="chevron-sm-right" class="h-6 w-6"></sd-icon>
                </button>

                <button
                    class="nav-button w-6 h-6 hover:cursor-pointer sd-interactive"
                    @click=${() => this.navigateYear(1)}
                    @keydown=${this.handleYearKeyDown(1)}
                    aria-label="Next year"
                  >
                    <sd-icon library="_internal" name="chevrons-sm-right" class="h-6 w-6"></sd-icon>
                </button>
              </div>
            </div>

            <slot name="month-selector"></slot>

            <sd-divider></sd-divider>

            <div class="calendar-grid grid grid-cols-7 gap-y-[1px] mt-3" role="grid" aria-labelledby="month-year-heading" aria-describedby="calendar-instructions">
              ${dayHeaders.map(
                day => html`
                  <div
                    class="day-header w-[36px] h-8 inline-flex items-center justify-center aspect-square text-center font-bold text-black"
                    role="columnheader"
                    aria-label=${day}
                  >
                    ${day}
                  </div>
                `
              )}
              ${monthDays.map(
                ({
                  date,
                  ymd,
                  isCurrentMonth,
                  isToday,
                  isWeekend,
                  isSelected,
                  isInRange,
                  isInPreviewRange,
                  isRangeStart,
                  isRangeEnd,
                  isDisabled
                }) => {
                  // const this.isFocused = this.focusedDate && DateUTC.same(date, this.focusedDate);
                  this.isFocused =
                    (this.focusedDate && DateUTC.same(date, this.focusedDate)) ||
                    DateUTC.same(date, this.calendarGenerator.todayUTC());

                  return html`
                    <div
                      class="day-cell w-full h-8 flex items-center justify-center aspect-square cursor-pointer hover:bg-primary-100 hover:text-primary-500 focus-visible:outline focus:outline-2 focus:outline-primary -outline-offset-2
                      ${isRangeStart ? 'rounded-l-md rounded-r-none' : 'rounded-md'}
                      ${isRangeEnd ? 'rounded-r-md rounded-l-none' : 'rounded-md'}
                      ${!isCurrentMonth
                        ? 'other-month text-neutral-700'
                        : (this.noWeekends && isWeekend) || isDisabled
                          ? 'pointer-events-none text-neutral-500'
                          : 'text-primary'}
                      ${isToday ? 'today border-2 border-primary font-bold' : ''}
                      ${isSelected || isRangeStart || isRangeEnd
                        ? 'selected border-primary bg-primary text-white hover:bg-primary-500 hover:text-white'
                        : ''}
                      ${isInRange && !isSelected && !isRangeStart && !isRangeEnd
                        ? 'in-range bg-primary-100 text-primary-500 rounded-none hover:bg-primary-500 hover:text-white'
                        : ''}
                      ${isInPreviewRange && !isInRange
                        ? 'preview-range bg-primary-50 text-primary-400 border border-primary-200'
                        : ''}
                      ${this.isFocused ? 'outline outline-2 outline-primary' : ''}"
                      data-date="${ymd}"
                      tabindex="${this.isFocused ? 0 : -1}"
                      aria-selected=${isSelected ? 'true' : 'false'}
                      aria-current=${isToday ? 'date' : undefined}
                      aria-disabled=${!isCurrentMonth ? 'true' : 'false'}
                      @click=${() => this.selectDate(date)}
                      @keydown=${(event: KeyboardEvent) => this.handleCalendarKeyDown(event)}
                      @mouseenter=${() => this.handleDateHover(date)}
                      @mouseleave=${() => this.handleDateLeave()}
                    >
                      ${date.getUTCDate()}
                    </div>
                  `;
                }
              )}
            </div>
          </div>
        </div>

        <div id="calendar-instructions" class="sr-only">
          Use arrow keys to navigate dates. Press Enter or Space to select. Press Escape to close.
          ${this.range ? 'Select start and end dates for range selection.' : ''}
        </div>
      </div>
      </sd-popup>

      <slot
        name="help-text"
        part="form-control-help-text"
        id="help-text"
        class=${cx('text-sm text-neutral-700 mt-2', hasHelpText ? 'block' : 'hidden')}
        aria-hidden=${!hasHelpText}
      >
        ${this.helpText}
      </slot>
    </div>`;
  }

  static styles = [
    ...SolidElement.styles,
    css`
      :host {
        @apply inline-block relative;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'sd-datepicker': SdDatepicker;
  }
}
