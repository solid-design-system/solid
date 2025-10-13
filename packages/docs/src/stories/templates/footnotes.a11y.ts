import { test, expect } from '@playwright/test';

test('Linked Footnotes', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6998/iframe.html?globals=&args=&id=templates-footnotes--linked-footnotes&viewMode=story'
  );
  await expect(page.locator('body')).toMatchAriaSnapshot(`
      - region "Top right notifications"
      - region "Bottom center notifications"
      - heading "The Power of a Solid Design System" [level=2]
      - paragraph:
        - text: A solid design system is the backbone of a cohesive product, offering a single source of truth that promotes consistency across all platforms and teams
        - link "[ 1 ]":
          - /url: "#note_1"
        - text: . By providing reusable UI components and guided principles, design systems ensure that designers and developers work efficiently without reinventing the wheel. This consistency not only streamlines workflows but also enhances scalability, enabling teams to quickly roll out features that look and feel unified
        - link "[ 2 ]":
          - /url: "#note_2"
        - text: .
      - paragraph:
        - text: Moreover, design systems empower teams to focus on refining user experience rather than repeatedly tackling foundational design challenges. When every component aligns with the brand’s visual language, users benefit from a familiar, intuitive interface that fosters trust. This familiarity is especially critical for products with diverse user bases, as it allows for seamless navigation and higher satisfaction
        - link "[ 2 ]":
          - /url: "#note_2"
        - text: .
      - paragraph:
        - text: A solid design system also evolves with changing needs. By integrating regular feedback, teams can keep the system adaptable and relevant, meeting both emerging design trends and technological advancements
        - link "[ 3 ]":
          - /url: "#note_3"
        - text: . Ultimately, investing in a design system yields long-term returns, ensuring that products are consistent, scalable, and efficient
        - link "[ 2 ]":
          - /url: "#note_2"
        - text: .
      - paragraph:
        - text: Furthermore, as companies scale, maintaining design consistency across multiple teams and projects becomes increasingly complex. A well-defined design system mitigates these challenges by acting as a blueprint for future iterations, preventing visual drift and maintaining brand integrity across diverse touchpoints. Teams can confidently experiment and innovate within the system’s boundaries, knowing that their work aligns with established guidelines
        - link "[ 3 ]":
          - /url: "#note_4"
        - text: .
      - paragraph: By continuously evolving with feedback and technological advancements, a design system remains a living entity rather than a static framework. Regular updates ensure that it stays relevant, adapting to new design paradigms, device capabilities, and user expectations. The investment in a design system, therefore, extends far beyond initial implementation—it serves as a foundation for scalable, efficient, and user-friendly digital experiences.
      - paragraph: A well-maintained design system is not just a tool—it’s a long-term strategy for success.
      - list:
        - listitem:
          - link:
            - /url: "#ref_1"
          - text: Design systems act as a "single source of truth," promoting consistency across all products.
        - listitem:
          - link:
            - /url: "#ref_2a"
          - link:
            - /url: "#ref_2b"
          - link:
            - /url: "#ref_2c"
          - text: Component libraries in design systems streamline workflows, boosting efficiency and scalability.
        - listitem:
          - link:
            - /url: "#ref_3"
          - text: A design system’s consistency helps reinforce brand identity and user trust.
        - listitem:
          - link:
            - /url: "#ref_4"
          - text: Effective design systems evolve, remaining adaptable to product and user needs over time.
    `);
});
