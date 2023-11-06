/* eslint-disable @typescript-eslint/no-unused-expressions */
import { aTimeout, expect, fixture, html, oneEvent } from '@open-wc/testing';
import { clickOnElement, moveMouseOnElement } from '../../internal/test.js';
import { queryByTestId } from '../../internal/test/data-testid-helpers.js';
import { resetMouse } from '@web/test-runner-commands';
import sinon from 'sinon';

import type SdButton from '../button/button.js';
import type SdNotification from './notification.js';

const getNotificationContainer = (notification: SdNotification): HTMLElement => {
  return notification.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
};

const getIconSlot = (notification: SdNotification): HTMLElement => {
  return notification.shadowRoot!.querySelector<HTMLElement>('[part="icon"]')!;
};

const expectNotificationToBeVisible = (notification: SdNotification): void => {
  const notificationContainer = getNotificationContainer(notification);
  const style = window.getComputedStyle(notificationContainer);
  expect(style.display).not.to.equal('none');
  expect(style.visibility).not.to.equal('hidden');
  expect(style.visibility).not.to.equal('collapse');
};

const expectNotificationToBeInvisible = (notification: SdNotification): void => {
  const notifictionContainer = getNotificationContainer(notification);
  const style = window.getComputedStyle(notifictionContainer);
  expect(style.display, 'notification should be invisible').to.equal('none');
};

const expectHideAndAfterHideToBeEmittedInCorrectOrder = async (
  notification: SdNotification,
  action: () => void | Promise<void>
) => {
  const hidePromise = oneEvent(notification, 'sd-hide');
  const afterHidePromise = oneEvent(notification, 'sd-after-hide');
  let afterHideHappened = false;
  oneEvent(notification, 'sd-after-hide').then(() => (afterHideHappened = true));

  action();

  await hidePromise;
  expect(afterHideHappened).to.be.false;

  await afterHidePromise;
  expectNotificationToBeInvisible(notification);
};

const expectShowAndAfterShowToBeEmittedInCorrectOrder = async (
  notification: SdNotification,
  action: () => void | Promise<void>
) => {
  const showPromise = oneEvent(notification, 'sd-show');
  const afterShowPromise = oneEvent(notification, 'sd-after-show');
  let afterShowHappened = false;
  oneEvent(notification, 'sd-after-show').then(() => (afterShowHappened = true));

  action();

  await showPromise;
  expect(afterShowHappened).to.be.false;

  await afterShowPromise;
  expectNotificationToBeVisible(notification);
};

const getCloseButton = (notification: SdNotification): SdButton | null | undefined =>
  notification.shadowRoot?.querySelector<SdButton>('[part="close-button"]');

describe('<sd-notification>', () => {
  let clock: sinon.SinonFakeTimers | null = null;

  afterEach(async () => {
    clock?.restore();
    await resetMouse();
  });

  it('renders', async () => {
    const notification = await fixture<SdNotification>(html`<sd-notification>I am a notification</sd-notification>`);

    expectNotificationToBeVisible(notification);
  });

  it('is accessible', async () => {
    const notification = await fixture<SdNotification>(html`<sd-notification>I am a notification</sd-notification>`);

    await expect(notification).to.be.accessible();
  });

  describe('notification visibility', () => {
    it('should be visible with the closed attribute is false', async () => {
      const notification = await fixture<SdNotification>(
        html`<sd-notification !closed>I am a notification</sd-notification>`
      );

      expectNotificationToBeVisible(notification);
    });

    it('should not be visible when closed = true', async () => {
      const notification = await fixture<SdNotification>(
        html` <sd-notification closed>I am a notification</sd-notification>`
      );

      expectNotificationToBeInvisible(notification);
    });

    it('should emit sd-show and sd-after-show when calling show()', async () => {
      const notification = await fixture<SdNotification>(
        html` <sd-notification closed>I am a notification</sd-notification>`
      );

      expectNotificationToBeInvisible(notification);

      await expectShowAndAfterShowToBeEmittedInCorrectOrder(notification, () => notification.show());
    });

    it('should emit sd-hide and sd-after-hide when calling hide()', async () => {
      const notification = await fixture<SdNotification>(html` <sd-notification>I am a notification</sd-notification>`);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(notification, () => notification.hide());
    });

    it('should emit sd-show and sd-after-show when setting closed = false', async () => {
      const notification = await fixture<SdNotification>(html`
        <sd-notification closed>I am a notification</sd-notification>
      `);

      await expectShowAndAfterShowToBeEmittedInCorrectOrder(notification, () => {
        notification.closed = false;
      });
    });

    it('should emit sd-hide and sd-after-hide when setting open = false', async () => {
      const notification = await fixture<SdNotification>(html`
        <sd-notification open>I am a notification</sd-notification>
      `);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(notification, () => {
        notification.closed = true;
      });
    });
  });

  describe('close button', () => {
    it('shows a close button if the notification has the closable attribute', () => async () => {
      const notification = await fixture<SdNotification>(html`
        <sd-notification open closable>I am a notification</sd-notification>
      `);
      const closeButton = getCloseButton(notification);

      expect(closeButton).to.be.visible;
    });

    it('clicking the close button closes the notification', () => async () => {
      const notification = await fixture<SdNotification>(html`
        <sd-notification open closable>I am a notification</sd-notification>
      `);
      const closeButton = getCloseButton(notification);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(notification, () => clickOnElement(closeButton!));
    });
  });

  describe('toast', () => {
    const getToastStack = (): HTMLDivElement | null => document.querySelector<HTMLDivElement>('.sd-toast-stack');

    const closeRemainingNotifications = async (): Promise<void> => {
      const toastStack = getToastStack();
      if (toastStack?.children) {
        for (const element of toastStack.children) {
          await (element as SdNotification).hide();
        }
      }
    };

    beforeEach(async () => {
      await closeRemainingNotifications();
    });

    it('can be rendered as a toast', async () => {
      const notification = await fixture<SdNotification>(html`<sd-notification>I am a notification</sd-notification>`);

      expectShowAndAfterShowToBeEmittedInCorrectOrder(notification, () => notification.toast());
      const toastStack = getToastStack();
      expect(toastStack).to.be.visible;
      expect(toastStack?.firstChild).to.be.equal(notification);
    });

    it('resolves only after being closed', async () => {
      const notification = await fixture<SdNotification>(
        html`<sd-notification closable>I am a notification</sd-notification>`
      );
      const afterShowEvent = oneEvent(notification, 'sd-after-show');
      let toastPromiseResolved = false;
      notification.toast().then(() => (toastPromiseResolved = true));
      await afterShowEvent;
      expect(toastPromiseResolved).to.be.false;

      const closePromise = oneEvent(notification, 'sd-after-hide');
      const closeButton = getCloseButton(notification);

      await clickOnElement(closeButton!);

      await closePromise;
      await aTimeout(0);

      expect(toastPromiseResolved).to.be.true;
    });

    const expectToastStack = () => {
      const toastStack = getToastStack();
      expect(toastStack).not.to.be.null;
    };

    const expectNoToastStack = () => {
      const toastStack = getToastStack();
      expect(toastStack).to.be.null;
    };

    const openToast = async (notification: SdNotification): Promise<void> => {
      const openPromise = oneEvent(notification, 'sd-after-show');
      notification.toast();
      await openPromise;
    };

    const closeToast = async (notification: SdNotification): Promise<void> => {
      const closePromise = oneEvent(notification, 'sd-after-hide');
      const closeButton = getCloseButton(notification);
      await clickOnElement(closeButton!);
      await closePromise;
      await aTimeout(0);
    };

    it('deletes the toast stack after the last notification is done', async () => {
      const container = await fixture<HTMLElement>(
        html`<div>
          <sd-notification data-testid="notification1" closable>notification 1</sd-notification>
          <sd-notification data-testid="notification2" closable>notification 2</sd-notification>
        </div>`
      );

      const notification1 = queryByTestId<SdNotification>(container, 'notification1');
      const notification2 = queryByTestId<SdNotification>(container, 'notification2');
      await openToast(notification1!);

      expectToastStack();

      await openToast(notification2!);

      expectToastStack();

      await closeToast(notification1!);

      expectToastStack();

      await closeToast(notification2!);

      expectNoToastStack();
    });
  });

  describe('timer controlled closing', () => {
    it('closes after a predefined amount of time', async () => {
      clock = sinon.useFakeTimers();
      const notification = await fixture<SdNotification>(
        html` <sd-notification duration="3000">I am a notification</sd-notification>`
      );

      expectNotificationToBeVisible(notification);

      clock.tick(2999);

      expectNotificationToBeVisible(notification);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(notification, () => {
        clock?.tick(1);
      });
    });

    it('pauses the closing timer on mouse-over', async () => {
      clock = sinon.useFakeTimers();
      const notification = await fixture<SdNotification>(
        html` <sd-notification duration="3000" closable>I am a notification</sd-notification>`
      );

      expectNotificationToBeVisible(notification);

      clock.tick(1000);

      await moveMouseOnElement(notification);

      clock.tick(1999);

      expectNotificationToBeVisible(notification);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(notification, () => {
        clock?.tick(1);
      });
    });

    it('resets the closing timer after opening', async () => {
      clock = sinon.useFakeTimers();
      const notification = await fixture<SdNotification>(
        html` <sd-notification duration="3000" closed>I am a notification</sd-notification>`
      );

      expectNotificationToBeInvisible(notification);

      clock.tick(1000);

      const afterShowPromise = oneEvent(notification, 'sd-after-show');
      notification.show();
      await afterShowPromise;

      clock.tick(2999);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(notification, () => {
        clock?.tick(1);
      });
    });
  });

  describe('notification variants', () => {
    const variants = ['info', 'success', 'warning', 'error'];
    const variantToClassMap = {
      info: 'bg-info',
      success: 'bg-success',
      warning: 'bg-warning',
      error: 'bg-error'
    };

    variants.forEach(variant => {
      it(`adapts to the variant: ${variant}`, async () => {
        const notification = await fixture<SdNotification>(
          html`<sd-notification variant="${variant as 'info' | 'success' | 'warning' | 'error'}"
            >I am a notification</sd-notification
          >`
        );

        const notificationContainer = getIconSlot(notification);
        expect(notificationContainer).to.have.class(
          variantToClassMap[variant as 'info' | 'success' | 'warning' | 'error']
        );
      });
    });
  });
});
