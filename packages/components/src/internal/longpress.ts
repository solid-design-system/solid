import { AsyncDirective, directive, type DirectiveParameters, type Part, PartType } from 'lit/async-directive.js';
import { type ElementPart, noChange, nothing } from 'lit';

interface Callbacks {
  start: () => void;
  end: () => void;
}

/**
 * A directive that determines,if a HTMLButtonElement is long pressed or only clicked.
 * Depending on the state it executes the callback once or repeating.
 *
 * Usage:
 *
 *  <button
 *    ${longPress({ start: () => this.handleStepUp(), end: () => this.handleChange()})}
 *  >
 *    my button
 *  </button>
 */
class LongPressDirective extends AsyncDirective {
  host: HTMLButtonElement;

  observer: MutationObserver;

  callbacks: Callbacks;

  interval: NodeJS.Timeout;

  timeout: NodeJS.Timeout;

  constructor(part: Part) {
    super(part);
    if (part.type !== PartType.ELEMENT || !(part.element instanceof HTMLButtonElement)) {
      throw new Error('The `longPress` directive must be used on an HTMLButtonElement.');
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(_callback: Callbacks): typeof nothing {
    return nothing;
  }

  update(part: ElementPart, [callbacks]: DirectiveParameters<this>): typeof noChange {
    // initial call
    if (this.callbacks === undefined && this.host === undefined) {
      this.host = part.element as HTMLButtonElement;
      this.callbacks = { ...callbacks };
      this.host.addEventListener('pointerdown', this.handlePointerDown);
    }

    return noChange;
  }

  protected disconnected(): void {
    this.stopSpinningAndCleanUp();
    this.host.removeEventListener('pointerdown', this.handlePointerDown);
    document.removeEventListener('pointerup', this.handlePointerUp);
  }

  private handlePointerDown = (event: PointerEvent) => {
    // do nothing if the click was not done from the left mouse button or if the button is disabled
    if (event.button !== 0 || this.host.disabled) {
      return;
    }
    this.spinOnLongPressCallback(event);
  };

  /**
   * Start spinning on long press clicks otherwise handle as single click event
   */
  private spinOnLongPressCallback(event: PointerEvent) {
    event.preventDefault();
    event.stopPropagation();

    // Start spinning only on long press
    this.timeout = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      this.timeout = undefined;
      this.interval = setInterval(() => {
        this.callbacks.start();
      }, 50);
    }, 500);

    document.addEventListener('pointerup', this.handlePointerUp);

    // when buttons becoming disabled during long-press
    this.observer?.disconnect();
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'disabled') {
          this.stopSpinningAndCleanUp();
        }
      });
    });
    this.observer.observe(this.host, { attributes: true });
  }

  private handlePointerUp = (pointerUp?: PointerEvent) => {
    pointerUp?.preventDefault();
    pointerUp?.stopPropagation();

    // we did not start to spin
    if (this.timeout) {
      this.callbacks.start();
    }

    this.stopSpinningAndCleanUp();

    this.callbacks.end();
    document.removeEventListener('pointerup', this.handlePointerUp);
  };

  /**
   * Stop the spinning and clean up all timer and observer
   */
  private stopSpinningAndCleanUp() {
    // stop spinning
    clearInterval(this.interval);

    clearTimeout(this.timeout);
    this.observer?.disconnect();
  }
}

export const longPress = directive(LongPressDirective);

export type { LongPressDirective };
