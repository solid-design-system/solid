import { test, expect } from '@playwright/test';

test('Docs', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-quote--docs&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - complementary:
      - navigation "Table of contents":
        - heading "Table of contents" [level=2]
        - list:
          - listitem:
            - link "Size":
              - /url: "#size"
          - listitem:
            - link "Quote Inverted":
              - /url: "#quote-inverted"
          - listitem:
            - link "Quote without Profile Image":
              - /url: "#quote-without-profile-image"
    - heading "Quote" [level=1]
    - paragraph:
      - strong: "Accessibility Information:"
      - text: Use the
      - code: <blockquote>
      - text: HTML element for block quotes and the
      - code: <q>
      - text: HTML element for short inline quotes.
    - heading "Size" [level=3]
    - paragraph: size 4xl
    - blockquote: “The Solid Design System by Union Investment provides a comprehensive toolkit for building consistent and high-quality user interfaces. It includes well-documented components, design tokens, and accessibility features, ensuring seamless integration across platforms.”
    - paragraph: Jane Doe
    - paragraph: Team Member of SDS
    - paragraph: size 3xl
    - blockquote: “The Solid Design System by Union Investment provides a comprehensive toolkit for building consistent and high-quality user interfaces. It includes well-documented components, design tokens, and accessibility features, ensuring seamless integration across platforms.”
    - paragraph: Jane Doe
    - paragraph: Team Member of SDS
    - paragraph: size xl
    - blockquote: “The Solid Design System by Union Investment provides a comprehensive toolkit for building consistent and high-quality user interfaces. It includes well-documented components, design tokens, and accessibility features, ensuring seamless integration across platforms.”
    - paragraph: Jane Doe
    - paragraph: Team Member of SDS
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Quote Inverted" [level=3]
    - blockquote: “The Solid Design System by Union Investment provides a comprehensive toolkit for building consistent and high-quality user interfaces. It includes well-documented components, design tokens, and accessibility features, ensuring seamless integration across platforms.”
    - paragraph: Jane Doe
    - paragraph: Team Member of SDS
    - button "Show code"
    - button "Edit on CodePen"
    - heading "Quote without Profile Image" [level=3]
    - blockquote: “The Solid Design System by Union Investment provides a comprehensive toolkit for building consistent and high-quality user interfaces. It includes well-documented components, design tokens, and accessibility features, ensuring seamless integration across platforms.”
    - paragraph: Jane Doe
    - paragraph: Team Member of SDS
    - button "Show code"
    - button "Edit on CodePen"
  `);
});

test('Size', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-quote--size&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - paragraph: size 4xl
    - blockquote: “The Solid Design System by Union Investment provides a comprehensive toolkit for building consistent and high-quality user interfaces. It includes well-documented components, design tokens, and accessibility features, ensuring seamless integration across platforms.”
    - paragraph: Jane Doe
    - paragraph: Team Member of SDS
    - paragraph: size 3xl
    - blockquote: “The Solid Design System by Union Investment provides a comprehensive toolkit for building consistent and high-quality user interfaces. It includes well-documented components, design tokens, and accessibility features, ensuring seamless integration across platforms.”
    - paragraph: Jane Doe
    - paragraph: Team Member of SDS
    - paragraph: size xl
    - blockquote: “The Solid Design System by Union Investment provides a comprehensive toolkit for building consistent and high-quality user interfaces. It includes well-documented components, design tokens, and accessibility features, ensuring seamless integration across platforms.”
    - paragraph: Jane Doe
    - paragraph: Team Member of SDS
  `);
});

test('Quote Inverted', async ({ page }) => {
  await page.goto('http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-quote--inverted&viewMode=story');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - blockquote: “The Solid Design System by Union Investment provides a comprehensive toolkit for building consistent and high-quality user interfaces. It includes well-documented components, design tokens, and accessibility features, ensuring seamless integration across platforms.”
    - paragraph: Jane Doe
    - paragraph: Team Member of SDS
  `);
});

test('Quote without Profile Image', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-quote--quote-without-profile-image&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - region "Top right notifications"
    - region "Bottom center notifications"
    - blockquote: “The Solid Design System by Union Investment provides a comprehensive toolkit for building consistent and high-quality user interfaces. It includes well-documented components, design tokens, and accessibility features, ensuring seamless integration across platforms.”
    - paragraph: Jane Doe
    - paragraph: Team Member of SDS
  `);
});
