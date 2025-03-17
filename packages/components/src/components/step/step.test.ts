import '../../../dist/solid-components';
import { expect, fixture, html } from '@open-wc/testing';
import type SdStep from './step';

describe('<sd-step>', () => {
  it('should render a step with default configuration', async () => {
    // Arrange
    const el = await fixture<SdStep>(html` <sd-step></sd-step> `);

    // Assert
    expect(el).to.exist;
    expect(el).to.have.attribute('orientation', 'horizontal');
    expect(el).to.have.attribute('index', '1');
    expect(el).to.have.attribute('size', 'lg');
  });

  describe('Accessibility', () => {
    describe('`disabled` is true', () => {
      it('should pass accessibility tests', async () => {
        // Arrange
        const el = await fixture<SdStep>(html`
          <sd-step-group>
            <sd-step disabled></sd-step>
          </sd-step-group>
        `);

        // Assert
        await expect(el).to.be.accessible();
      });
    });

    describe('check aria attributes', () => {
      it('should have aria-labelledby and aria-describedby if interactive and label and description exist', async () => {
        const el = await fixture<SdStep>(html` <sd-step label="Step 1" description="This is step 1"></sd-step> `);
        const button = el.shadowRoot?.querySelector('[part="circle"]');

        expect(button?.getAttribute('aria-labelledby')).to.exist;
        expect(button?.getAttribute('aria-describedby')).to.exist;
      });

      it('should not have aria-labelledby and aria-describedby if not-interactive', async () => {
        const el = await fixture<SdStep>(html`
          <sd-step-group not-interactive
            ><sd-step label="Step 1" description="This is step 1"></sd-step>
          </sd-step-group>
        `);

        const slottedElements = el.shadowRoot?.querySelector('slot')?.assignedElements();
        const button = slottedElements?.[0].shadowRoot?.querySelector('[part="circle"]');

        expect(button?.getAttribute('aria-labelledby')).to.not.exist;
        expect(button?.getAttribute('aria-describedby')).to.not.exist;
      });
    });

    describe('`current` is true', () => {
      it('should pass accessibility tests', async () => {
        // Arrange
        const el = await fixture<SdStep>(html`
          <sd-step-group>
            <sd-step current> </sd-step>
          </sd-step-group>
        `);

        // Assert
        await expect(el).to.be.accessible();
      });
    });

    describe('the `default` state', () => {
      it('should pass accessibility tests', async () => {
        // Arrange
        const el = await fixture<SdStep>(
          html` <sd-step-group>
            <sd-step> </sd-step>
          </sd-step-group>`
        );

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
