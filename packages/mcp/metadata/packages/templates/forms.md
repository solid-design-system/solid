---
name: forms
title: Forms
components:
  - sd-button
  - sd-change
  - sd-checkbox
  - sd-checkbox-group
  - sd-container
  - sd-datepicker
  - sd-headline
  - sd-headline--size-3xl
  - sd-headline--size-4xl
  - sd-icon
  - sd-input
  - sd-link
  - sd-meta
  - sd-meta--size-sm
  - sd-option
  - sd-paragraph
  - sd-radio
  - sd-radio-group
  - sd-select
  - sd-textarea
  - sd-tooltip
version: 1.0.0
---

## Template: Login Form

```html
<style>
  #forms-template-login :is(sd-input, sd-select, sd-textarea, sd-datepicker)::part(form-control-label)::after,
  #forms-template-login sd-checkbox::part(label)::after {
    content: none;
  }
</style>
<section class="sd-container max-w-[790px]">
  <form id="forms-template-login" class="flex flex-col gap-4">
    <h3 class="sd-headline sd-headline--size-3xl mb-4">Login for UnionFondsOnline users</h3>
    <sd-input
      type="email"
      inputmode="email"
      label="Email"
      name="email"
      autocomplete="username"
      required
      data-error-message="Please enter your email address, for example name@example.com."
    ></sd-input>
    <sd-input
      type="password"
      label="Password"
      name="password"
      autocomplete="current-password"
      password-toggle
      required
      data-error-message="Please enter your password."
    ></sd-input>
    <sd-checkbox class="max-w-full" name="stayLoggedIn">Stay logged in on this computer (optional)</sd-checkbox>
    <div class="flex flex-col gap-6 mt-4 md:flex-row md:items-center md:justify-between">
      <sd-link href="javascript:void(0)">Forgot password</sd-link>
      <sd-button type="submit" class="w-full md:w-auto">
        <sd-icon name="system/lock-locked" slot="icon-left"></sd-icon>
        Login
      </sd-button>
    </div>
  </form>
</section>
<script type="module">
  await customElements.whenDefined('sd-input');

  const loginForm = document.getElementById('forms-template-login');

  // Replaces the generic browser message with the field-specific text from data-error-message
  const syncErrorMessage = async field => {
    await field.updateComplete;
    field.setCustomValidity('');
    if (!field.validity.valid) field.setCustomValidity(field.dataset.errorMessage);
    // Re-renders so the shown error state matches the new validity right away
    field.requestUpdate();
  };
  const fieldsWithMessage = Array.from(loginForm.querySelectorAll('[data-error-message]'));
  const syncAllErrorMessages = () => Promise.all(fieldsWithMessage.map(syncErrorMessage));
  syncAllErrorMessages();
  ['sd-input', 'sd-change'].forEach(type =>
    loginForm.addEventListener(type, event => {
      if (event.target.dataset?.errorMessage) syncErrorMessage(event.target);
    })
  );
  loginForm.addEventListener('reset', () => setTimeout(syncAllErrorMessages));

  loginForm.addEventListener('submit', event => {
    event.preventDefault();
    alert('Login form submitted');
  });
</script>
```

## Template: Reset Password Form

```html
<style>
  #forms-template-reset-password :is(sd-input, sd-select, sd-textarea, sd-datepicker)::part(form-control-label)::after {
    content: none;
  }
</style>
<section class="sd-container max-w-[790px]">
  <form id="forms-template-reset-password" class="flex flex-col gap-6">
    <h3 class="sd-headline sd-headline--size-3xl">Reset password</h3>
    <div class="flex flex-col gap-4">
      <p class="sd-paragraph">
        Enter the e-mail address you used to register and click on “Reset password”. We will then send you an e-mail
        with a link that you can use to create a new password. If you do not receive an e-mail, your user account is
        blocked.
      </p>
      <p class="sd-paragraph">
        You can unblock your access using the form
        <sd-link href="javascript:void(0)">Request to unblock your online access</sd-link>.
      </p>
    </div>
    <sd-input
      type="email"
      inputmode="email"
      label="Email"
      name="email"
      autocomplete="email"
      required
      data-error-message="Please enter your email address, for example name@example.com."
    ></sd-input>
    <div class="flex flex-col gap-4 md:flex-row md:justify-end">
      <sd-button type="submit" class="md:order-2">Reset password</sd-button>
      <sd-button type="reset" variant="secondary" class="md:order-1">Cancel</sd-button>
    </div>
  </form>
</section>
<script type="module">
  await customElements.whenDefined('sd-input');

  const resetPasswordForm = document.getElementById('forms-template-reset-password');

  // Replaces the generic browser message with the field-specific text from data-error-message
  const syncErrorMessage = async field => {
    await field.updateComplete;
    field.setCustomValidity('');
    if (!field.validity.valid) field.setCustomValidity(field.dataset.errorMessage);
    // Re-renders so the shown error state matches the new validity right away
    field.requestUpdate();
  };
  const fieldsWithMessage = Array.from(resetPasswordForm.querySelectorAll('[data-error-message]'));
  const syncAllErrorMessages = () => Promise.all(fieldsWithMessage.map(syncErrorMessage));
  syncAllErrorMessages();
  ['sd-input', 'sd-change'].forEach(type =>
    resetPasswordForm.addEventListener(type, event => {
      if (event.target.dataset?.errorMessage) syncErrorMessage(event.target);
    })
  );
  resetPasswordForm.addEventListener('reset', () => setTimeout(syncAllErrorMessages));

  resetPasswordForm.addEventListener('submit', event => {
    event.preventDefault();
    alert('Reset password form submitted');
  });
</script>
```

## Template: Contact Form

```html
<style>
  #forms-template-contact
    :is(sd-input, sd-select, sd-textarea, sd-datepicker, sd-radio-group, sd-checkbox-group)::part(
      form-control-label
    )::after,
  #forms-template-contact sd-checkbox::part(label)::after {
    content: none;
  }
</style>
<form id="forms-template-contact" class="flex flex-col gap-8 max-w-[640px]">
  <h3 class="sd-headline sd-headline--size-4xl">Contact</h3>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-4">
    <sd-radio-group
      label="Type"
      name="inquiryType"
      value="general-inquiry"
      orientation="horizontal"
      class="md:col-span-2"
      required
    >
      <sd-radio value="general-inquiry">General inquiry</sd-radio>
      <sd-radio value="regarding-depot">Regarding depot</sd-radio>
    </sd-radio-group>
    <sd-select
      label="Salutation"
      placeholder="Please select"
      name="salutation"
      class="md:col-span-2"
      required
      data-error-message="Please select a salutation."
    >
      <sd-option value="ms">Ms.</sd-option>
      <sd-option value="mr">Mr.</sd-option>
      <sd-option value="mx">Mx.</sd-option>
    </sd-select>
    <sd-input
      type="text"
      label="First name (optional)"
      name="firstName"
      autocomplete="given-name"
      class="md:col-start-1"
    ></sd-input>
    <sd-input
      type="text"
      label="Last name"
      name="lastName"
      autocomplete="family-name"
      required
      data-error-message="Please enter your last name."
    ></sd-input>
    <sd-input
      type="email"
      inputmode="email"
      label="Email"
      name="email"
      autocomplete="email"
      class="md:col-start-1"
      required
      data-error-message="Please enter your email address, for example name@example.com."
    ></sd-input>
    <sd-textarea
      label="Message"
      name="message"
      rows="4"
      class="md:col-span-2"
      spellcheck
      required
      data-error-message="Please enter your message."
    ></sd-textarea>
    <sd-checkbox-group label="Terms & conditions" class="md:col-span-2">
      <sd-checkbox
        class="max-w-full"
        name="privacyPolicy"
        value="accepted"
        required
        data-error-message="Please accept the Privacy Policy to continue."
      >
        I accept the <sd-link href="javascript:void(0)">Privacy Policy</sd-link>.
      </sd-checkbox>
      <sd-checkbox class="max-w-full" name="marketingEmails" value="accepted">
        I would like to receive marketing emails. (optional)
      </sd-checkbox>
    </sd-checkbox-group>
  </div>
  <div class="flex flex-col gap-4 md:flex-row md:justify-end">
    <sd-button type="submit" class="md:order-2">Submit registration</sd-button>
    <sd-button type="reset" variant="secondary" class="md:order-1">Cancel</sd-button>
  </div>
</form>
<script type="module">
  await Promise.all([
    customElements.whenDefined('sd-input'),
    customElements.whenDefined('sd-select'),
    customElements.whenDefined('sd-textarea'),
    customElements.whenDefined('sd-checkbox'),
    customElements.whenDefined('sd-radio-group')
  ]);

  const contactForm = document.getElementById('forms-template-contact');

  // Replaces the generic browser message with the field-specific text from data-error-message
  const syncErrorMessage = async field => {
    await field.updateComplete;
    field.setCustomValidity('');
    if (!field.validity.valid) field.setCustomValidity(field.dataset.errorMessage);
    // Re-renders so the shown error state matches the new validity right away
    field.requestUpdate();
  };
  const fieldsWithMessage = Array.from(contactForm.querySelectorAll('[data-error-message]'));
  const syncAllErrorMessages = () => Promise.all(fieldsWithMessage.map(syncErrorMessage));
  syncAllErrorMessages();
  ['sd-input', 'sd-change'].forEach(type =>
    contactForm.addEventListener(type, event => {
      if (event.target.dataset?.errorMessage) syncErrorMessage(event.target);
    })
  );
  contactForm.addEventListener('reset', () => setTimeout(syncAllErrorMessages));

  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const formValues = ['Results:'];
    for (const [key, value] of new FormData(contactForm).entries()) {
      formValues.push(key + ': ' + value);
    }
    alert(formValues.join('\\n'));
  });
</script>
```

## Template: Personal Information Form

```html
<form id="forms-template-personal-information" class="flex flex-col gap-8 max-w-[640px]">
  <div class="flex flex-col gap-4">
    <h3 class="sd-headline sd-headline--size-4xl">Personal Information</h3>
    <p class="sd-meta sd-meta--size-sm">Fields marked with * are required.</p>
  </div>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-4">
    <sd-select
      label="Salutation"
      placeholder="Please select"
      name="salutation"
      required
      data-error-message="Please select a salutation."
    >
      <sd-option value="ms">Ms.</sd-option>
      <sd-option value="mr">Mr.</sd-option>
      <sd-option value="mx">Mx.</sd-option>
    </sd-select>
    <sd-select label="Academic title" placeholder="Select academic title" name="academicTitle" class="md:col-start-1">
      <sd-option value="dr">Dr.</sd-option>
      <sd-option value="prof">Prof.</sd-option>
      <sd-option value="prof-dr">Prof. Dr.</sd-option>
    </sd-select>
    <sd-select label="Title of nobility" placeholder="Select title of nobility" name="titleOfNobility">
      <sd-option value="baron">Baron</sd-option>
      <sd-option value="baroness">Baroness</sd-option>
      <sd-option value="count">Count</sd-option>
      <sd-option value="countess">Countess</sd-option>
    </sd-select>
    <sd-input
      type="text"
      label="First name"
      name="firstName"
      autocomplete="given-name"
      class="md:col-start-1"
      required
      data-error-message="Please enter your first name."
    ></sd-input>
    <sd-input
      type="text"
      label="Last name"
      name="lastName"
      autocomplete="family-name"
      class="md:col-start-1"
      required
      data-error-message="Please enter your last name."
    ></sd-input>
    <sd-datepicker label="Date of birth" name="dateOfBirth" class="md:col-span-2"></sd-datepicker>
    <sd-select label="Nationality" placeholder="Select nationality" name="nationality" class="md:col-span-2">
      <sd-option value="de">German</sd-option>
      <sd-option value="at">Austrian</sd-option>
      <sd-option value="ch">Swiss</sd-option>
      <sd-option value="other">Other</sd-option>
    </sd-select>
    <sd-input type="text" label="Position" name="position" autocomplete="organization-title"></sd-input>
  </div>
  <div class="flex flex-col gap-4 md:flex-row md:justify-end">
    <sd-button type="submit" class="md:order-2">Save</sd-button>
    <sd-button type="reset" variant="secondary" class="md:order-1">Cancel</sd-button>
  </div>
</form>
<script type="module">
  await Promise.all([
    customElements.whenDefined('sd-input'),
    customElements.whenDefined('sd-select'),
    customElements.whenDefined('sd-datepicker')
  ]);

  const personalInformationForm = document.getElementById('forms-template-personal-information');

  // Replaces the generic browser message with the field-specific text from data-error-message
  const syncErrorMessage = async field => {
    await field.updateComplete;
    field.setCustomValidity('');
    if (!field.validity.valid) field.setCustomValidity(field.dataset.errorMessage);
    // Re-renders so the shown error state matches the new validity right away
    field.requestUpdate();
  };
  const fieldsWithMessage = Array.from(personalInformationForm.querySelectorAll('[data-error-message]'));
  const syncAllErrorMessages = () => Promise.all(fieldsWithMessage.map(syncErrorMessage));
  syncAllErrorMessages();
  ['sd-input', 'sd-change'].forEach(type =>
    personalInformationForm.addEventListener(type, event => {
      if (event.target.dataset?.errorMessage) syncErrorMessage(event.target);
    })
  );
  personalInformationForm.addEventListener('reset', () => setTimeout(syncAllErrorMessages));

  personalInformationForm.addEventListener('submit', event => {
    event.preventDefault();
    const formValues = ['Results:'];
    for (const [key, value] of new FormData(personalInformationForm).entries()) {
      formValues.push(key + ': ' + value);
    }
    alert(formValues.join('\\n'));
  });
</script>
```

## Template: Form With Visually Disabled Elements

```html
<style>
  #forms-template-visually-disabled :is(sd-input, sd-textarea, sd-checkbox-group)::part(form-control-label)::after,
  #forms-template-visually-disabled sd-checkbox::part(label)::after {
    content: none;
  }
</style>
<form id="forms-template-visually-disabled" class="flex flex-col gap-8 max-w-[640px]">
  <h3 class="sd-headline sd-headline--size-4xl">Contact</h3>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-4">
    <sd-input
      type="text"
      label="Name"
      name="name"
      autocomplete="name"
      required
      data-error-message="Please enter your name."
    ></sd-input>
    <sd-textarea
      label="Message"
      name="message"
      rows="4"
      class="md:col-span-2"
      spellcheck
      required
      data-error-message="Please enter your message."
    ></sd-textarea>
    <sd-checkbox-group label="Terms & conditions" class="md:col-span-2">
      <sd-checkbox
        class="max-w-full"
        name="privacyPolicy"
        value="accepted"
        required
        data-error-message="Please accept the Privacy Policy to continue."
      >
        I accept the <sd-link href="javascript:void(0)">Privacy Policy</sd-link>.
      </sd-checkbox>
      <sd-checkbox class="max-w-full" name="marketingEmails" value="accepted">
        I would like to receive marketing emails. (optional)
      </sd-checkbox>
    </sd-checkbox-group>
  </div>
  <div class="flex flex-col gap-4 md:flex-row md:justify-end">
    <sd-tooltip content="Fill in all fields to enable the button." trigger="hover focus" size="sm" class="md:order-2">
      <sd-button type="submit" class="w-full" visually-disabled>Send</sd-button>
    </sd-tooltip>
    <sd-button type="reset" variant="secondary" class="md:order-1">Cancel</sd-button>
  </div>
</form>
<script type="module">
  await Promise.all([
    customElements.whenDefined('sd-input'),
    customElements.whenDefined('sd-textarea'),
    customElements.whenDefined('sd-checkbox'),
    customElements.whenDefined('sd-button')
  ]);

  const visuallyDisabledForm = document.getElementById('forms-template-visually-disabled');
  const tooltip = visuallyDisabledForm.querySelector('sd-tooltip');
  const submitButton = visuallyDisabledForm.querySelector('sd-button[type="submit"]');

  // Replaces the generic browser message with the field-specific text from data-error-message
  const syncErrorMessage = async field => {
    await field.updateComplete;
    field.setCustomValidity('');
    if (!field.validity.valid) field.setCustomValidity(field.dataset.errorMessage);
    // Re-renders so the shown error state matches the new validity right away
    field.requestUpdate();
  };
  const fieldsWithMessage = Array.from(visuallyDisabledForm.querySelectorAll('[data-error-message]'));
  const syncAllErrorMessages = () => Promise.all(fieldsWithMessage.map(syncErrorMessage));
  syncAllErrorMessages();

  // Re-checks after every change so the button also gets disabled again when a field is cleared
  const updateSubmitState = async () => {
    await syncAllErrorMessages();
    const isValid = fieldsWithMessage.every(field => field.validity.valid);
    submitButton.toggleAttribute('visually-disabled', !isValid);
    tooltip.disabled = isValid;
  };

  visuallyDisabledForm.addEventListener('sd-input', updateSubmitState);
  visuallyDisabledForm.addEventListener('sd-change', updateSubmitState);
  visuallyDisabledForm.addEventListener('reset', () => setTimeout(updateSubmitState));

  visuallyDisabledForm.addEventListener('submit', event => {
    event.preventDefault();
    alert('Form submitted');
  });
</script>
```
