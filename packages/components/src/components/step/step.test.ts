import { expect, fixture, html } from '@open-wc/testing';
import type SdStep from './step';

describe('<sd-step>', () => {
  it('should render a step with default configuration', async () => {
    // Arrange
    const el = await fixture<SdStep>(html` <sd-step></sd-step> `);

    // Assert
    expect(el).to.exist;
    expect(el).to.have.attribute('state', 'disabled');
    expect(el).to.have.attribute('orientation', 'horizontal');
    expect(el).to.have.attribute('index', '1');
    expect(el).to.have.attribute('size', 'lg');
  });

  describe('Accessibility', () => {
    describe('when state `disabled` is used', () => {
      it('should pass accessibility tests', async () => {
        // Arrange
        const el = await fixture<SdStep>(html` <sd-step state="disabled"> </sd-step> `);

        // Assert
        await expect(el).to.be.accessible();
      });
    });

    describe('when state `current` is used', () => {
      it('should pass accessibility tests', async () => {
        // Arrange
        const el = await fixture<SdStep>(html` <sd-step state="current"> </sd-step> `);

        // Assert
        await expect(el).to.be.accessible();
      });
    });

    describe('when state `default` is used', () => {
      it('should pass accessibility tests', async () => {
        // Arrange
        const el = await fixture<SdStep>(html` <sd-step state="default"> </sd-step> `);

        // Assert
        await expect(el).to.be.accessible();
      });
    });

    describe('when `href` is not provided', () => {
      it('should render as a <button>', async () => {
        // Arrange
        const el = await fixture<SdStep>(html` <sd-step> </sd-step> `);

        // Assert
        expect(el.shadowRoot!.querySelector('button')).to.exist;
        expect(el.shadowRoot!.querySelector('a')).not.to.exist;
      });
    });

    describe('when `href` is provided', () => {
      it('should render as an <a>', async () => {
        // Arrange
        const el = await fixture<SdStep>(html` <sd-step href="some/path"> </sd-step> `);

        // Assert
        expect(el.shadowRoot!.querySelector('a')).to.exist;
        expect(el.shadowRoot!.querySelector('button')).not.to.exist;
      });
    });
  });
});
