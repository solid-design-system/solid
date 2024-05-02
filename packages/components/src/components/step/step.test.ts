import { expect, fixture, html } from '@open-wc/testing';
import type SdStep from './step';

describe('<sd-step>', () => {
  it('should render a step with default configuration', async () => {
    // Arrange
    const el = await fixture<SdStep>(html` <sd-step></sd-step> `);

    // Assert
    expect(el).to.exist;
    expect(el).to.have.attribute('state', 'waiting');
    expect(el).to.have.attribute('orientation', 'horizontal');
    expect(el).to.have.attribute('number', '1');
    expect(el).to.have.attribute('size', 'lg');
  });

  describe('Accessibility', () => {
    describe('when state `waiting` is used', () => {
      it('should pass accessibility tests', async () => {
        // Arrange
        const el = await fixture<SdStep>(html` <sd-step state="waiting"> </sd-step> `);

        // Assert
        await expect(el).to.be.accessible();
      });
    });

    describe('when state `inProgress` is used', () => {
      it('should pass accessibility tests', async () => {
        // Arrange
        const el = await fixture<SdStep>(html` <sd-step state="inProgress"> </sd-step> `);

        // Assert
        await expect(el).to.be.accessible();
      });
    });

    describe('when state `finished` is used', () => {
      it('should pass accessibility tests', async () => {
        // Arrange
        const el = await fixture<SdStep>(html` <sd-step state="finished"> </sd-step> `);

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
