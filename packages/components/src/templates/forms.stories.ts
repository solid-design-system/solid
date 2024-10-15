import '../solid-components';
import { html } from 'lit-html';

/**
 * ```
 * ```
 */
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

export const loginForm = {
  render: () => html`
    <style>
      #loginForm__submitButton::part(icon-left) {
        display: flex;
      }
      #loginForm__submitButton::part(base) {
        display: flex;
      }
    </style>
    <section class="sd-container">
      <form id="loginForm">
        <h3 class="sd-headline sd-headline--size-3xl mb-8">Login for UnionFondsOnline users</h3>
        <sd-input type="number" label="Access number" class="mb-4" autocomplete></sd-input>
        <sd-input
          type="password"
          label="Password"
          password-toggle
          spellcheck
          class="mb-4"
          autocomplete="current-password"
        ></sd-input>
        <sd-checkbox>Stay logged in on this computer</sd-checkbox>
        <div class="justify-between md:items-center md:flex-row mt-8 flex flex-col">
          <sd-link href="javascript:void(0)" class="mb-4 md:mb-0">Forgot password</sd-link>
          <sd-button id="loginForm__submitButton">
            Login
            <sd-icon name="system/lock-locked" slot="icon-left"></sd-icon>
          </sd-button>
        </div>
      </form>
    </section>
  `
};

export const contactForm = {
  render: () => html`
    <form class="sd-prose">
      <h3 class="sd-headline sd-headline--size-4xl">Contact</h3>
      <sd-radio-group
        id="inquiry-radio-group"
        orientation="horizontal"
        name="radio-group"
        value="general_inquiry"
        class="my-8"
      >
        <sd-radio name="inquiry-type" value="general_inquiry" onclick="toggleRegardingInput()">
          General inquiry
        </sd-radio>
        <sd-radio name="inquiry-type" value="regarding" onclick="toggleRegardingInput()">Regarding</sd-radio>
      </sd-radio-group>
      <div id="regarding-input" class="hidden">
        <sd-input type="text" spellcheck></sd-input>
      </div>
      <div class="flex flex-col gap-6">
        <sd-select label="Salutation" placeholder="Please Select" max-options-visible="3">
          <sd-option value="ms">Ms.</sd-option>
          <sd-option value="mrs">Mrs.</sd-option>
          <sd-option value="miss">Miss</sd-option>
          <sd-option value="mx">Mx.</sd-option>
        </sd-select>
        <div class="gap-6 flex flex-col md:flex-row">
          <sd-input type="text" label="First name" spellcheck></sd-input>
          <sd-input type="text" label="Last name" spellcheck required></sd-input>
        </div>
        <sd-input type="email" label="Email" spellcheck required></sd-input>
        <sd-textarea label="News" rows="4" spellcheck></sd-textarea>
        <sd-checkbox-group>
          <sd-checkbox value="privacy_policy" required>
            I accept the <sd-link href="#">Privacy Policy</sd-link>.
          </sd-checkbox>
          <sd-checkbox value="marketing_emails">I would like to receive marketing emails.</sd-checkbox>
        </sd-checkbox-group>
        <span class="sd-meta sd-meta--size-sm">* Required fields</span>
      </div>
      <div class="flex flex-col gap-4 md:flex-row md:justify-end">
        <sd-button class="md:order-2">Submit registration</sd-button>
        <sd-button variant="secondary" class="md:order-1">Cancel</sd-button>
      </div>
    </form>
    <script>
      const radioGroup = document.getElementById('inquiry-radio-group');
      const regardingInput = document.getElementById('regarding-input');
      console.log(radioGroup, regardingInput);
      function toggleRegardingInput() {
        var selectedValue = radioGroup.getAttribute('value');
        console.log(selectedValue);

        if (selectedValue === 'regarding') {
          setTimeout(() => regardingInput.classList.remove('hidden'), 1);
        } else {
          setTimeout(() => regardingInput.classList.add('hidden'), 1);
        }
      }
    </script>
  `
};
