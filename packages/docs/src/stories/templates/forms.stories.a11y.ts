import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-forms--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Login Form":
              - /url: "#login-form"
          - listitem:
            - link "Contact Form":
              - /url: "#contact-form"
          - listitem:
            - link "Form With Visually Disabled Elements":
              - /url: "#form-with-visually-disabled-elements"
    - heading "Forms" [level=1]
    - heading "Login Form" [level=3]
    - heading "Login for UnionFondsOnline users" [level=3]
    - text: Access number *
    - spinbutton "Access number *"
    - text: Password *
    - textbox "Password *"
    - button "Show password"
    - checkbox "Stay logged in on this computer"
    - text: Stay logged in on this computer
    - link "Forgot password":
      - /url: javascript:void(0)
    - button "Login"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Contact Form" [level=3]
    - heading "Contact" [level=3]
    - radiogroup:
      - radio "General inquiry" [checked]
      - radio "Regarding"
    - text: Salutation *
    - combobox "Salutation *"
    - button "Salutation *"
    - text: First name
    - textbox "First name"
    - text: Last name *
    - textbox "Last name *"
    - text: Email *
    - textbox "Email *"
    - text: News
    - textbox "News"
    - group:
      - checkbox "I accept the Privacy Policy . *"
      - text: I accept the
      - link "Privacy Policy":
        - /url: javascript:void(0)
      - text: . *
      - checkbox "I would like to receive marketing emails."
      - text: I would like to receive marketing emails.
    - text: "* Required fields"
    - button "Submit registration"
    - button "Cancel"
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Form With Visually Disabled Elements" [level=3]
    - paragraph:
      - text: Use the attribute
      - code: visually-disabled
      - text: to visually disable form elements. Wrap the elements in a
      - code: sd-tooltip
      - text: to provide information on how to enable them.
    - paragraph:
      - strong: "Accessibility Hint:"
      - text: This approach is recommended for accessibility reasons. Disabling elements, will remove them from the tab order and screen readers will not announce them.
    - heading "Contact" [level=3]
    - text: Name
    - textbox "Name"
    - text: Message
    - textbox "Message"
    - group:
      - checkbox "I accept the Privacy Policy . *"
      - text: I accept the
      - link "Privacy Policy":
        - /url: javascript:void(0)
      - text: . *
      - checkbox "I would like to receive marketing emails." [disabled]
      - text: I would like to receive marketing emails.
    - text: "* Required fields"
    - button "Submit registration" [disabled]
    - button "Cancel"
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Login Form', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-forms--login-form&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - heading "Login for UnionFondsOnline users" [level=3]
    - text: Access number *
    - spinbutton "Access number *"
    - text: Password *
    - textbox "Password *"
    - button "Show password"
    - checkbox "Stay logged in on this computer"
    - text: Stay logged in on this computer
    - link "Forgot password":
      - /url: javascript:void(0)
    - button "Login"
  `);
});

test('Contact Form', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-forms--contact-form&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - heading "Contact" [level=3]
    - radiogroup:
      - radio "General inquiry" [checked]
      - radio "Regarding"
    - text: Salutation *
    - combobox "Salutation *"
    - button "Salutation *"
    - text: First name
    - textbox "First name"
    - text: Last name *
    - textbox "Last name *"
    - text: Email *
    - textbox "Email *"
    - text: News
    - textbox "News"
    - group:
      - checkbox "I accept the Privacy Policy . *"
      - text: I accept the
      - link "Privacy Policy":
        - /url: javascript:void(0)
      - text: . *
      - checkbox "I would like to receive marketing emails."
      - text: I would like to receive marketing emails.
    - text: "* Required fields"
    - button "Submit registration"
    - button "Cancel"
  `);
});

test('Form With Visually Disabled Elements', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-forms--form-with-visually-disabled-elements&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - heading "Contact" [level=3]
    - text: Name
    - textbox "Name"
    - text: Message
    - textbox "Message"
    - group:
      - checkbox "I accept the Privacy Policy . *"
      - text: I accept the
      - link "Privacy Policy":
        - /url: javascript:void(0)
      - text: . *
      - checkbox "I would like to receive marketing emails." [disabled]
      - text: I would like to receive marketing emails.
    - text: "* Required fields"
    - button "Submit registration" [disabled]
    - button "Cancel"
  `);
});
