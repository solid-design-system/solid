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

      const radioGroup = document.querySelector('.radio-group-error');
      radioGroup.setCustomValidity('Select an option to proceed.');
      radioGroup.reportValidity();
    </script>
  `
};
