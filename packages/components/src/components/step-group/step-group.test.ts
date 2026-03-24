import '../../../dist/solid-components';
import { expect, fixture, html } from '@open-wc/testing';
import type SdStepGroup from './step-group';
import type SdStep from '../step/step';

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

  it('should set steps before activeStep as active and not waiting/disabled, when activeStep is not -1', async () => {
    const el = await fixture<SdStepGroup>(html`
      <sd-step-group active-step="2">
        <sd-step></sd-step>
        <sd-step></sd-step>
        <sd-step></sd-step>
      </sd-step-group>
    `);

    await el.updateComplete;

    const steps = el.querySelectorAll<SdStep>('sd-step');

    expect(el.activeStep).to.equal(2);

    // Step 0 and 1: not disabled, not waiting
    expect(steps[0].current).to.be.false;
    expect(steps[0].waiting).to.be.false;
    expect(steps[0].disabled).to.be.false;

    expect(steps[1].current).to.be.false;
    expect(steps[1].waiting).to.be.false;
    expect(steps[1].disabled).to.be.false;

    // Step 2: current
    expect(steps[2].current).to.be.true;
    expect(steps[2].waiting).to.be.false;
    expect(steps[2].disabled).to.be.false;
  });

  it('should mark steps after activeStep as waiting, when activeStep is not -1', async () => {
    const el = await fixture<SdStepGroup>(html`
      <sd-step-group active-step="1">
        <sd-step></sd-step>
        <sd-step></sd-step>
        <sd-step></sd-step>
      </sd-step-group>
    `);

    await el.updateComplete;

    const steps = el.querySelectorAll<SdStep>('sd-step');

    expect(el.activeStep).to.equal(1);

    // Step 0: before activeStep, not waiting or disabled
    expect(steps[0].current).to.be.false;
    expect(steps[0].waiting).to.be.false;
    expect(steps[0].disabled).to.be.false;

    // Step 1: current
    expect(steps[1].current).to.be.true;
    expect(steps[1].waiting).to.be.false;
    expect(steps[1].disabled).to.be.false;

    // Step 2: after activeStep, waiting
    expect(steps[2].current).to.be.false;
    expect(steps[2].waiting).to.be.true;
    expect(steps[2].disabled).to.be.false;
  });

  describe('Manual State Management', () => {
    it('should preserve step states when activeStep is -1', async () => {
      const el = await fixture<SdStepGroup>(html`
        <sd-step-group active-step="-1">
          <sd-step current></sd-step>
          <sd-step disabled></sd-step>
          <sd-step waiting></sd-step>
        </sd-step-group>
      `);

      await el.updateComplete;

      const steps = el.querySelectorAll<SdStep>('sd-step');

      // Step states should be preserved as set in markup
      expect(steps[0].current).to.be.true;
      expect(steps[0].waiting).to.be.false;
      expect(steps[0].disabled).to.be.false;

      expect(steps[1].disabled).to.be.true;
      expect(steps[1].current).to.be.false;
      expect(steps[1].waiting).to.be.false;

      expect(steps[2].waiting).to.be.true;
      expect(steps[2].current).to.be.false;
      expect(steps[2].disabled).to.be.false;
    });

    it('should handle negative activeStep values other than -1', async () => {
      const el = await fixture<SdStepGroup>(html`
        <sd-step-group active-step="-5">
          <sd-step></sd-step>
          <sd-step></sd-step>
          <sd-step></sd-step>
        </sd-step-group>
      `);

      expect(el.activeStep).to.equal(-5);
      const steps = el.querySelectorAll<SdStep>('sd-step');
      steps.forEach(step => {
        expect(step.current).to.be.false;
        expect(step.waiting).to.be.false;
      });
    });

    it('should ignore activeStep greater than steps length', async () => {
      const el = await fixture<SdStepGroup>(html`
        <sd-step-group active-step="10">
          <sd-step></sd-step>
          <sd-step></sd-step>
          <sd-step></sd-step>
        </sd-step-group>
      `);

      const steps = el.querySelectorAll<SdStep>('sd-step');
      // activeStep remains as set, but no steps should be marked current
      expect(el.activeStep).to.equal(10);
      steps.forEach(step => {
        expect(step.current).to.be.false;
        expect(step.waiting).to.be.false;
      });
    });
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
