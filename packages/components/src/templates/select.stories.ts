import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Select',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

/**
 * Use `<sl-divider>` to group listbox items visually. You can also use `<small>` to provide labels, but they won’t be announced by most assistive devices.
 */

export const Default = {
  name: 'Grouping Options',
  render: () =>
    html`<div class="h-[290px] w-[420px]">
      <sd-select size="lg" placement="bottom" label="Label" placeholder="Please Select" max-options-visible="3">
        <div class="text-black px-4 font-bold">Nisi eu excepteur anim esse</div>
        <sd-option value="option-1">Option 1</sd-option>
        <sd-option value="option-2">Option 2</sd-option>
        <sd-divider class="mb-2"></sd-divider>
        <div class="text-black px-4 font-bold">Nisi eu excepteur anim esse</div>
        <sd-option value="option-3">Option 3</sd-option>
      </sd-select>
    </div>`
};

/**
 * Demonstrates the form behavior with validation styles when the required attribute is set to `true`.
 */
export const Form = {
  render: () =>
    html`<form action="" method="get" id="testForm" name="testForm" class="w-[370px]">
        <div class="mb-6">
          <sd-select
            size="lg"
            placement="bottom"
            label="Required"
            placeholder="Please Select"
            clearable=""
            max-options-visible="3"
            form="testForm"
            name="required field"
            required=""
          >
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
          </sd-select>
        </div>
        <div class="mb-6">
          <sd-select
            size="lg"
            placement="bottom"
            label="Required Multiple"
            placeholder="Please Select"
            clearable=""
            multiple=""
            max-options-visible="3"
            form="testForm"
            name="required multiple field"
            required=""
          >
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
          </sd-select>
        </div>
        <div class="mb-8">
          <sd-select
            size="lg"
            placement="bottom"
            label="Required Multiple w/ Tags"
            placeholder="Please Select"
            clearable=""
            multiple=""
            usetags=""
            max-options-visible="3"
            form="testForm"
            name="required multiple tags field"
            required=""
          >
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
          </sd-select>
        </div>
        <sd-button type="submit">Submit</sd-button>
      </form>
      <script>
        function handleSubmit(event) {
          const form = document.querySelector('#testForm');
          const sdSelects = Array.from(document.querySelectorAll('sd-select'));

          const isValid = sdSelect => sdSelect.checkValidity();

          if (sdSelects.every(isValid)) {
            event.preventDefault(); // Prevent the default form submission behavior

            const formData = new FormData(form);
            const formValues = Object.fromEntries(formData);

            alert('Form submitted successfully with the following values: ' + JSON.stringify(formValues, null, 2));
          }
        }

        document.querySelector('#testForm').addEventListener('submit', handleSubmit);
      </script>`
};

/**
 * 1. You can use the `setCustomValidity` method to set a custom validation message. This will override any native validation messages.
 * 2. Set an empty string to clear the custom validity and make the input valid.
 * 3. To show the validation message, call the `reportValidity` method. Originally this would show a native validation bubble, but we show the error messages inline.
 */
export const setCustomValidity = {
  render: () =>
    html`<!-- block submit and show alert instead -->
      <form id="validationForm" class="flex flex-col gap-2">
        <sd-select id="custom-input" style-on-valid>
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-select>
        <div>
          <sd-button type="submit">Submit</sd-button>
          <sd-button id="error-button" variant="secondary">Set custom error</sd-button>
          <sd-button id="success-button" variant="secondary">Set success</sd-button>
          <sd-button type="reset" variant="secondary">Reset</sd-button>
        </div>
      </form>
      <script type="module">
        // Wait for custom elements to be defined
        await Promise.all([
          customElements.whenDefined('sd-select'),
          customElements.whenDefined('sd-button'),
          customElements.whenDefined('sd-option')
        ]).then(() => {
          const form = document.getElementById('validationForm');
          const input = document.getElementById('custom-input');
          const setErrorButton = document.getElementById('error-button');
          const setSuccessButton = document.getElementById('success-button');

          // Initial error
          const errorMessage = \`This is an initial custom error (\${new Date().toLocaleTimeString()})\`;
          input.setCustomValidity(errorMessage);
          input.reportValidity();

          // Show error message
          setErrorButton.addEventListener('click', () => {
            const errorMessage = \`This is a new custom error (\${new Date().toLocaleTimeString()})\`;
            input.setCustomValidity(errorMessage);
            input.reportValidity();
          });

          // Show success message
          setSuccessButton.addEventListener('click', () => {
            input.setCustomValidity(''); // Clear custom validity
            input.reportValidity();
          });

          form.addEventListener('submit', event => {
            event.preventDefault();
            alert('All fields are valid!');
          });
        });
      </script> `
};

/**
 * Demonstrates a form containing all existing Solid form elements.
 */
export const SolidForm = {
  render: () =>
    html`<form action="" method="get" id="testForm" name="testForm" class="">
        <h1 class="text-lg text-white bg-primary p-4">Solid Form</h1>
        <div class="[&amp;&gt;:nth-child(even)]:bg-neutral-100 [&amp;&gt;*]:p-4">
          <sd-checkbox form="testForm" name="field 1" required=""> Field 1 </sd-checkbox>
          <sd-input form="testForm" name="field 2" label="Field 2" required=""></sd-input>
          <sd-select form="testForm" name="field 3" label="Field 3" required="">
            <sd-option value="option-1">Option 1</sd-option>
            <sd-option value="option-2">Option 2</sd-option>
            <sd-option value="option-3">Option 3</sd-option>
            <sd-option value="option-4">Option 4</sd-option>
            <sd-option value="option-5">Option 5</sd-option>
            <sd-option value="option-6">Option 6</sd-option>
            <sd-option value="option-7">Option 7</sd-option>
          </sd-select>
          <sd-radio-group form="testForm" name="field 4" label="Field 4" required="">
            <sd-radio value="option-1">Option 1</sd-radio>
            <sd-radio value="option-2">Option 2</sd-radio>
            <sd-radio value="option-3">Option 3</sd-radio>
          </sd-radio-group>
          <sd-radio-group value="option-1" form="testForm" name="field 5" label="Field 5" required="">
            <sd-radio-button value="option-1">Option 1</sd-radio-button>
            <sd-radio-button value="option-2">Option 2</sd-radio-button>
            <sd-radio-button value="option-3">Option 3</sd-radio-button>
          </sd-radio-group>
          <sd-switch form="testForm" name="field 6" required="">Field 6</sd-switch>
          <sd-textarea form="testForm" name="field 7" label="Field 7" required=""></sd-textarea>
        </div>
        <sd-button class="my-4" type="submit">Submit</sd-button>
        <sd-button class="my-4" type="reset">Reset</sd-button>
      </form>

      <script>
        function handleSubmit(event) {
          const form = document.querySelector('#testForm');

          const formData = new FormData(form);
          const formValues = Object.fromEntries(formData);

          if (form.reportValidity()) {
            event.preventDefault(); // Prevent the default form submission behavior
            alert('Form submitted with the following values: ' + JSON.stringify(formValues, null, 2));
          }
        }

        document.querySelector('#testForm').addEventListener('submit', handleSubmit);
      </script>`
};
