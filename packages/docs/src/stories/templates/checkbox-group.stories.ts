import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Checkbox Group',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=2642-24726&t=JCsisVFNkWSlhSSN-4'
    },
    chromatic: { disableSnapshot: true }
  }
};

/**
 * Example of a checkbox group with a label and two checked checkboxes.
 */

export const Default = {
  render: () => html`
    <sd-checkbox-group size="lg">
      <label slot="label">Checkbox Group Label</label>
      <sd-checkbox value="1" checked>Checkbox 1</sd-checkbox>
      <sd-checkbox value="2" checked>Checkbox 2</sd-checkbox>
      <sd-checkbox value="3">Checkbox 3</sd-checkbox>
    </sd-checkbox-group>
  `
};

/**
 * Example of a required checkbox group implementation. Can be used to require the user to select one or more checkboxes from a group.
 *
 * __Hints:__
 *
 * - Add an * to the label to indicate that the checkbox group is required.
 * - An error message should be displayed if the user attempts to submit the form without selecting any checkboxes.
 *
 * __Accessibility hint:__ Add the `aria-required` attribute and set it to true to indicate that the checkbox group is required.
 */
export const RequiredCheckboxGroup = {
  render: () => html`
    <form id="checkbox-group-form">
      <sd-checkbox-group id="checkbox-group" class="mb-2" aria-required="true">
        <label slot="label">Required Checkbox Group*</label>
        <sd-checkbox value="1">Checkbox 1</sd-checkbox>
        <sd-checkbox value="2">Checkbox 2</sd-checkbox>
        <sd-checkbox value="3">Checkbox 3</sd-checkbox>
      </sd-checkbox-group>
      <p id="error-text" class="text-base text-error hidden mb-2" aria-live="polite">Please fill in this field.</p>
      <sd-button type="submit">Submit</sd-button>
    </form>
    <script type="module">
      await Promise.all([customElements.whenDefined('sd-button'), customElements.whenDefined('sd-checkbox')]).then(
        () => {
          const form = document.getElementById('checkbox-group-form');
          const checkboxGroup = form.querySelector('#checkbox-group');
          const checkboxes = checkboxGroup.querySelectorAll('sd-checkbox');
          const errorMessage = document.getElementById('error-text');

          function handleError() {
            errorMessage.classList.remove('hidden');
            checkboxes.forEach(checkbox => {
              checkbox.setCustomValidity('Please fill in this field');
              checkbox.shadowRoot.querySelector('#invalid-message').classList.add('sr-only');
            });
            checkboxGroup.setAttribute('aria-invalid', 'true');
          }

          function handleSuccess() {
            errorMessage.classList.add('hidden');
            checkboxes.forEach(checkbox => {
              checkbox.setCustomValidity('');
              checkbox.reportValidity();
            });
          }

          form.onsubmit = event => {
            event.preventDefault(); // Prevent the default form submission
            const selectedValues = Array.from(checkboxes).filter(checkbox => checkbox.hasAttribute('checked'));

            if (selectedValues.length === 0) {
              handleError();
            } else {
              // Reset the custom validity message
              handleSuccess();
              alert('Login form submitted');
            }
          };

          checkboxes.forEach(checkbox => checkbox.addEventListener('sd-change', handleSuccess));
        }
      );
    </script>
  `
};
