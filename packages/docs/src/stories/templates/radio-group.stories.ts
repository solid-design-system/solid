import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Radio Group',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2213-9389&t=5PpAC3TA3kYF7ufX-0'
    }
  }
};

/**
 * Example of how to use a radio group for single-choice selection with a required field label. The selected option is highlighted in green, making the current state clearly visible at a glance.
 */

export const radioGroupWithHelpText = {
  name: 'Radio Group with Help text',
  render: () => html`
    <sd-radio-group
      name="greeting"
      value="mr"
      label="Greeting"
      orientation="horizontal"
      help-text="Please select your preferred salutation."
      required
    >
      <sd-radio value="mr">Mr.</sd-radio>
      <sd-radio value="ms">Ms.</sd-radio>
      <sd-radio value="non-binary">Non-binary</sd-radio>
    </sd-radio-group>
  `
};

/**
 * Example of how to display a radio group in an error state when the user submits without making a selection. All options are outlined in red to signal that a choice is required before proceeding.
 */

export const radioGroupWithErrorText = {
  name: 'Radio Group with Error text',
  render: () => html`
    <sd-radio-group
      id="radio-group-error"
      name="role"
      label="What is your role/function?"
      orientation="vertical"
      required
    >
      <sd-radio value="advisor-in-service">Advisor in service</sd-radio>
      <sd-radio value="customer-advisor">Customer advisor</sd-radio>
      <sd-radio value="securities-specialist">Securities specialist/Wealth advisor</sd-radio>
      <sd-radio value="online-branch-employee">Online branch employee</sd-radio>
      <sd-radio value="other">Other</sd-radio>
    </sd-radio-group>

    <script type="module">
      await customElements.whenDefined('sd-radio-group');

      const radioGroup = document.querySelector('#radio-group-error');
      radioGroup.setCustomValidity('Select an option to proceed.');
      radioGroup.reportValidity();

      radioGroup.addEventListener('sd-change', () => {
        radioGroup.setCustomValidity('');
        radioGroup.reportValidity();
      });
    </script>
  `
};
