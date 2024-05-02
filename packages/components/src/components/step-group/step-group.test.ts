import { expect, fixture, html } from '@open-wc/testing';
import type SdStepGroup from './step-group';

describe('<sd-step-group>', () => {
  it('should render a step-group with default configuration', async () => {
    // Arrange
    const el = await fixture<SdStepGroup>(html`
      <sd-step-group>
        <sd-step></sd-step>
        <sd-step></sd-step>
        <sd-step></sd-step>
      </sd-step-group>
    `);

    // Assert
    expect(el).to.exist;
    expect(el).to.have.attribute('size', 'lg');
    expect(el).to.have.attribute('orientation', 'horizontal');
    expect(el).to.have.attribute('active-step', '0');
  });

  describe('Configuration', () => {
    describe('when step-group orientation is `horizontal`', () => {
      it('should render the steps horizontally', async () => {
        // Arrange
        const el = await fixture<SdStepGroup>(html`
          <sd-step-group orientation="horizontal">
            <sd-step></sd-step>
            <sd-step></sd-step>
            <sd-step></sd-step>
          </sd-step-group>
        `);

        const steps = el.querySelectorAll('sd-step');

        // Assert
        expect(el).to.have.attribute('orientation', 'horizontal');
        steps.forEach(step => {
          expect(step).to.have.attribute('orientation', 'horizontal');
        });
      });
    });

    describe('when step-group orientation is `vertical`', () => {
      it('should render the steps vertically', async () => {
        // Arrange
        const el = await fixture<SdStepGroup>(html`
          <sd-step-group orientation="vertical">
            <sd-step></sd-step>
            <sd-step></sd-step>
            <sd-step></sd-step>
          </sd-step-group>
        `);

        const steps = el.querySelectorAll('sd-step');

        // Assert
        expect(el).to.have.attribute('orientation', 'vertical');
        steps.forEach(step => {
          expect(step).to.have.attribute('orientation', 'vertical');
        });
      });
    });

    describe('when step-group size is `lg`', () => {
      it('should render the steps size as `lg`', async () => {
        // Arrange
        const el = await fixture<SdStepGroup>(html`
          <sd-step-group>
            <sd-step></sd-step>
            <sd-step></sd-step>
            <sd-step></sd-step>
          </sd-step-group>
        `);

        const steps = el.querySelectorAll('sd-step');

        // Assert
        expect(el).to.have.attribute('size', 'lg');
        steps.forEach(step => {
          expect(step).to.have.attribute('size', 'lg');
        });
      });
    });

    describe('when step-group size is `sm`', () => {
      it('should render the steps size as `sm`', async () => {
        // Arrange
        const el = await fixture<SdStepGroup>(html`
          <sd-step-group size="sm">
            <sd-step></sd-step>
            <sd-step></sd-step>
            <sd-step></sd-step>
          </sd-step-group>
        `);

        const steps = el.querySelectorAll('sd-step');

        // Assert
        expect(el).to.have.attribute('size', 'sm');
        steps.forEach(step => {
          expect(step).to.have.attribute('size', 'sm');
        });
      });
    });

    describe('when step-group orientation is changed', () => {
      it('step orientation should be updated', async () => {
        // Arrange
        const el = await fixture<SdStepGroup>(html`
          <sd-step-group>
            <sd-step></sd-step>
            <sd-step></sd-step>
            <sd-step></sd-step>
          </sd-step-group>
        `);

        const steps = el.querySelectorAll('sd-step');

        // Assert
        expect(el).to.have.attribute('orientation', 'horizontal');
        steps.forEach(step => {
          expect(step).to.have.attribute('orientation', 'horizontal');
        });

        // Act
        el.orientation = 'vertical';
        await el.updateComplete;

        // Assert
        expect(el).to.have.attribute('orientation', 'vertical');

        steps.forEach(step => {
          expect(step).to.have.attribute('orientation', 'vertical');
        });
      });
    });

    describe('when step-group size is changed', () => {
      it('step size should be updated', async () => {
        // Arrange
        const el = await fixture<SdStepGroup>(html`
          <sd-step-group>
            <sd-step></sd-step>
            <sd-step></sd-step>
            <sd-step></sd-step>
          </sd-step-group>
        `);

        const steps = el.querySelectorAll('sd-step');

        // Assert
        expect(el).to.have.attribute('size', 'lg');
        steps.forEach(step => {
          expect(step).to.have.attribute('size', 'lg');
        });

        // Act
        el.size = 'sm';
        await el.updateComplete;

        // Assert
        expect(el).to.have.attribute('size', 'sm');

        steps.forEach(step => {
          expect(step).to.have.attribute('size', 'sm');
        });
      });
    });
  });

  describe('Accessibility', () => {
    describe('when using default configuration', () => {
      it('should pass accessibility tests', async () => {
        // Arrange
        const el = await fixture<SdStepGroup>(html`
          <sd-step-group>
            <sd-step></sd-step>
            <sd-step></sd-step>
            <sd-step></sd-step>
          </sd-step-group>
        `);

        // Assert
        await expect(el).to.be.accessible();
      });
    });
  });
});
