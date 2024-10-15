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
        <sd-input type="number" inputmode="numeric" label="Access number" class="mb-4"></sd-input>
        <sd-input
          type="password"
          label="Password"
          class="mb-4"
          autocomplete="current-password"
          password-toggle
        ></sd-input>
        <sd-checkbox>Stay logged in on this computer</sd-checkbox>
        <div class="justify-between md:items-center md:flex-row mt-8 flex flex-col">
          <sd-link href="javascript:void(0)" class="mb-4 md:mb-0">Forgot password</sd-link>
          <sd-button id="loginForm__submitButton" type="submit">
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
      <sd-radio-group id="inquiry-radio-group" orientation="horizontal" name="radio-group" value="general-inquiry">
        <sd-radio name="inquiry-type" value="general-inquiry">General inquiry</sd-radio>
        <sd-radio name="inquiry-type" value="regarding">Regarding</sd-radio>
      </sd-radio-group>
      <sd-input type="text" inputmode="text" id="regarding-input" class="hidden" spellcheck></sd-input>
      <div class="flex flex-col gap-6">
        <sd-select label="Salutation" placeholder="Please Select" required>
          <sd-option value="ms">Ms.</sd-option>
          <sd-option value="mrs">Mrs.</sd-option>
          <sd-option value="miss">Miss</sd-option>
          <sd-option value="mx">Mx.</sd-option>
        </sd-select>
        <div class="gap-6 flex flex-col md:flex-row">
          <sd-input type="text" inputmode="text" label="First name" autocomplete="given-name"></sd-input>
          <sd-input type="text" inputmode="text" label="Last name" required autocomplete="family-name"></sd-input>
        </div>
        <sd-input type="email" inputmode="email" label="Email" required autocomplete="email"></sd-input>
        <sd-textarea label="News" rows="4" spellcheck></sd-textarea>
        <sd-checkbox-group>
          <sd-checkbox value="privacy_policy" required>
            I accept the <sd-link href="javascript:void(0)">Privacy Policy</sd-link>.
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
