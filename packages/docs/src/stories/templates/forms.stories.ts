import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Forms',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Component-Docs?node-id=3060-14503&t=LHCyCYMjDV22qemZ-4'
    }
  }
};

export const LoginForm = {
  render: () => html`
    <style>
      #login-form sd-button::part(icon-left) {
        display: flex;
        justify-content: flex-end;
      }
    </style>
    <section class="sd-container">
      <form id="login-form">
        <h3 class="sd-headline sd-headline--size-3xl mb-8">Login for UnionFondsOnline users</h3>
        <sd-input type="number" inputmode="numeric" label="Access number" class="mb-4" required></sd-input>
        <sd-input
          required
          type="password"
          label="Password"
          class="mb-4"
          autocomplete="current-password"
          password-toggle
        ></sd-input>
        <sd-checkbox>Stay logged in on this computer</sd-checkbox>
        <div class="justify-between md:items-center md:flex-row mt-8 flex flex-col">
          <sd-link href="javascript:void(0)" class="mb-4 md:mb-0">Forgot password</sd-link>
          <sd-button type="submit">
            Login
            <sd-icon name="system/lock-locked" slot="icon-left"></sd-icon>
          </sd-button>
        </div>
      </form>
    </section>
    <script type="module">
      const loginForm = document.getElementById('login-form');
      loginForm.onsubmit = event => {
        event.preventDefault();
        if (loginForm.checkValidity()) {
          alert('Login form submitted');
        }
      };
    </script>
  `
};

export const ContactForm = {
  render: () => html`
    <form class="sd-prose sd-prose--full-width" id="contact-form">
      <h3 class="sd-headline sd-headline--size-4xl">Contact</h3>
      <sd-radio-group id="inquiry-radio-group" orientation="horizontal" value="general-inquiry">
        <sd-radio name="inquiryType" value="general-inquiry">General inquiry</sd-radio>
        <sd-radio name="inquiryType" value="regarding">Regarding</sd-radio>
      </sd-radio-group>
      <sd-input
        type="text"
        inputmode="text"
        id="regarding-input"
        class="hidden"
        name="regardingInput"
        spellcheck
      ></sd-input>
      <div class="flex flex-col gap-6">
        <sd-select label="Salutation" placeholder="Please Select" name="salutation" required>
          <sd-option value="ms">Ms.</sd-option>
          <sd-option value="mrs">Mrs.</sd-option>
          <sd-option value="miss">Miss</sd-option>
          <sd-option value="mx">Mx.</sd-option>
        </sd-select>
        <div class="gap-6 flex flex-col md:flex-row">
          <sd-input
            name="firstName"
            type="text"
            inputmode="text"
            label="First name"
            autocomplete="given-name"
          ></sd-input>
          <sd-input
            name="lastName"
            type="text"
            inputmode="text"
            label="Last name"
            required
            autocomplete="family-name"
          ></sd-input>
        </div>
        <sd-input name="email" type="email" inputmode="email" label="Email" required autocomplete="email"></sd-input>
        <sd-textarea name="news" label="News" rows="4" spellcheck></sd-textarea>
        <sd-checkbox-group>
          <sd-checkbox value="privacy_policy" required>
            I accept the <sd-link href="javascript:void(0)">Privacy Policy</sd-link>.
          </sd-checkbox>
          <sd-checkbox value="marketing_emails">I would like to receive marketing emails.</sd-checkbox>
        </sd-checkbox-group>
        <span class="sd-meta sd-meta--size-sm">* Required fields</span>
      </div>
      <div class="flex flex-col gap-4 md:flex-row md:justify-end">
        <sd-button class="md:order-2" type="submit">Submit registration</sd-button>
        <sd-button variant="secondary" class="md:order-1" onclick="alert('Cancelled process')">Cancel</sd-button>
      </div>
    </form>
    <script type="module">
      await Promise.all([
        customElements.whenDefined('sd-button'),
        customElements.whenDefined('sd-checkbox'),
        customElements.whenDefined('sd-textarea'),
        customElements.whenDefined('sd-radio'),
        customElements.whenDefined('sd-radio-group'),
        customElements.whenDefined('sd-input'),
        customElements.whenDefined('sd-select')
      ]).then(() => {
        const form = document.getElementById('contact-form');
        form.onsubmit = event => {
          event.preventDefault(); // Prevent the default form submission
          const formData = new FormData(form);

          // Collect form values to display in the alert
          let formValues = ['Results:'];
          for (let [key, value] of formData.entries()) {
            formValues.push(key + ': ' + value);
          }
          alert(formValues.join('\\n'));
        };
      });

      const radioGroup = document.getElementById('inquiry-radio-group');
      const regardingInput = document.getElementById('regarding-input');
      radioGroup.addEventListener('sd-change', event => {
        const value = event.target.value;
        if (value === 'regarding') {
          regardingInput.classList.remove('hidden');
        } else {
          regardingInput.classList.add('hidden');
        }
      });
    </script>
  `
};

/**
 * Use the attribute `visually-disabled` to visually disable form elements. Wrap the elements in a `sd-tooltip` to provide information on how to enable them.
 *
 * **Accessibility Hint:** This approach is recommended for accessibility reasons. Disabling elements, will remove them from the tab order and screen readers will not announce them.
 */
export const FromWithVisuallyDisabledElements = {
  render: () => html`
    <form class="sd-prose sd-prose--full-width" id="accessible-form">
      <h3 class="sd-headline sd-headline--size-4xl">Contact</h3>
      <div class="flex flex-col gap-6">
        <sd-input name="firstName" type="text" inputmode="text" label="Name" class="name-input"></sd-input>
        <sd-textarea name="message" label="Message" rows="4" spellcheck></sd-textarea>
        <sd-checkbox-group>
          <sd-checkbox value="privacy_policy" class="policy-checkbox mb-2" required>
            I accept the <sd-link href="javascript:void(0)">Privacy Policy</sd-link>.
          </sd-checkbox>
          <sd-tooltip
            content="Accept Policy Privacy to enable field"
            trigger="click focus"
            size="sm"
            class="checkbox-tooltip"
          >
            <sd-checkbox value="marketing_emails" class="marketing-checkbox" visually-disabled
              >I would like to receive marketing emails.</sd-checkbox
            >
          </sd-tooltip>
        </sd-checkbox-group>
        <span class="sd-meta sd-meta--size-sm">* Required fields</span>
      </div>
      <div class="flex flex-col gap-4 md:flex-row md:justify-end">
        <sd-tooltip
          content="Fill in all fields to enable button"
          trigger="click focus"
          size="sm"
          class="button-tooltip"
        >
          <sd-button class="md:order-2 submit-button" type="submit" visually-disabled>Submit registration</sd-button>
        </sd-tooltip>
        <sd-button variant="secondary" class="md:order-1" onclick="alert('Cancelled process')">Cancel</sd-button>
      </div>
    </form>
    <script type="module">
      await Promise.all([
        customElements.whenDefined('sd-button'),
        customElements.whenDefined('sd-checkbox'),
        customElements.whenDefined('sd-textarea'),
        customElements.whenDefined('sd-input')
      ]).then(() => {
        const form = document.getElementById('accessible-form');
        form.onsubmit = event => {
          event.preventDefault();
          alert('Form submitted');
        };
      });

      const form = document.getElementById('accessible-form');
      const nameInput = form.querySelector('.name-input');
      const emailInput = form.querySelector('.email-input');
      const policyCheckbox = form.querySelector('.policy-checkbox');
      const marketingCheckbox = form.querySelector('.marketing-checkbox');
      const submitButton = form.querySelector('.submit-button');
      const checkboxTooltip = form.querySelector('.checkbox-tooltip');
      const buttonTooltip = form.querySelector('.button-tooltip');

      nameInput.addEventListener('input', () => {
        if (nameInput.value) {
          emailInput.removeAttribute('visually-disabled');
        }
      });

      policyCheckbox.addEventListener('sd-change', event => {
        if (policyCheckbox.checked) {
          if (checkboxTooltip && checkboxTooltip.parentNode) {
            while (checkboxTooltip.firstChild) {
              checkboxTooltip.parentNode.insertBefore(checkboxTooltip.firstChild, checkboxTooltip);
            }
            checkboxTooltip.parentNode.removeChild(checkboxTooltip);
          }

          marketingCheckbox.removeAttribute('visually-disabled');
        }
      });

      form.addEventListener('input', () => {
        const requiredFields = form.querySelectorAll('[required]');
        const isValid = Array.from(requiredFields).every(field => field.value && field.checkValidity());
        if (isValid) {
          if (buttonTooltip && buttonTooltip.parentNode) {
            while (buttonTooltip.firstChild) {
              buttonTooltip.parentNode.insertBefore(buttonTooltip.firstChild, buttonTooltip);
            }
            buttonTooltip.parentNode.removeChild(buttonTooltip);
          }

          submitButton.removeAttribute('visually-disabled');
        }
      });
    </script>
  `
};
