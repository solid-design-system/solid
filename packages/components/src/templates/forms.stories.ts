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
    <section class="sd-container">
      <form>
        <h3 class="sd-headline sd-headline--size-3xl mb-8">Login for UnionFondsOnline users</h3>
        <sd-input type="text" label="Access number" spellcheck class="mb-4"></sd-input>
        <sd-input type="password" label="Access number" password-toggle spellcheck class="mb-4"></sd-input>
        <sd-checkbox>Stay logged in on this computer</sd-checkbox>
        <div class="justify-between md:items-center md:flex-row mt-8 flex flex-col">
          <sd-link href="#" class="mb-4 md:mb-0">Forgot password</sd-link>
          <sd-button>
            <sd-icon name="system/lock-locked" slot="icon-left"></sd-icon>
            Login
          </sd-button>
        </div>
      </form>
    </section>
  `
};

export const contactForm = {
  render: () => html`
    <form>
      <h3 class="sd-headline sd-headline--size-4xl mb-8">Contact</h3>
      <p class="sd-paragraph sd-paragraph--size-sm mb-8">Please fill out all fields marked *.</p>
      <sd-radio-group value="1" orientation="horizontal" name="radio-group" class="mb-8">
        <sd-radio value="general_inquiry">General inquiry</sd-radio>
        <sd-radio value="regarding">Regarding</sd-radio>
      </sd-radio-group>
      <div class="flex flex-col gap-6 mb-8">
        <sd-select label="Salutation" placeholder="Please Select" max-options-visible="3">
          <sd-option value="option-1">Option 1</sd-option>
          <sd-option value="option-2">Option 2</sd-option>
          <sd-option value="option-3">Option 3</sd-option>
        </sd-select>
        <sd-input type="text" label="First name" spellcheck></sd-input>
        <sd-input type="text" label="Last name" spellcheck required></sd-input>
        <sd-input type="email" label="Email" spellcheck required></sd-input>
        <sd-textarea label="News" rows="4" spellcheck></sd-textarea>
      </div>
      <sd-checkbox-group class="mb-8">
        <sd-checkbox value="privacy_policy">I accept the <sd-link href="#">Privacy Policy</sd-link>.</sd-checkbox>
        <sd-checkbox value="marketing_emails">I would like to receive marketing emails.</sd-checkbox>
      </sd-checkbox-group>
      <div class="flex flex-col gap-4 md:flex-row md:justify-end">
        <sd-button class="md:order-2">Submit registration</sd-button>
        <sd-button variant="secondary" class="md:order-1">Cancel</sd-button>
      </div>
    </form>
  `
};
