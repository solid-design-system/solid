import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'skip-a11y-[link-name]'],
  title: 'Templates/Footnotes',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

export const LinkedFootnotes = {
  render: () => html`
    <div class="sd-prose">
      <h2 class="sd-headline sd-headline--3xl">The Power of a Solid Design System</h2>
      <p class="sd-paragraph">
        A solid design system is the backbone of a cohesive product, offering a single source of truth that promotes
        consistency across all platforms and teams <a id="ref_1" href="#note_1" class="sd-footnotes--marker">1</a>. By
        providing reusable UI components and guided principles, design systems ensure that designers and developers work
        efficiently without reinventing the wheel. This consistency not only streamlines workflows but also enhances
        scalability, enabling teams to quickly roll out features that look and feel unified
        <a id="ref_2a" href="#note_2" class="sd-footnotes--marker">2</a>.
      </p>
      <p>
        Moreover, design systems empower teams to focus on refining user experience rather than repeatedly tackling
        foundational design challenges. When every component aligns with the brand’s visual language, users benefit from
        a familiar, intuitive interface that fosters trust. This familiarity is especially critical for products with
        diverse user bases, as it allows for seamless navigation and higher satisfaction
        <a id="ref_2b" href="#note_2" class="sd-footnotes--marker">2</a>.
      </p>
      <p>
        A solid design system also evolves with changing needs. By integrating regular feedback, teams can keep the
        system adaptable and relevant, meeting both emerging design trends and technological advancements
        <a id="ref_3" href="#note_3" class="sd-footnotes--marker">3</a>. Ultimately, investing in a design system yields
        long-term returns, ensuring that products are consistent, scalable, and efficient
        <a id="ref_2c" href="#note_2" class="sd-footnotes--marker">2</a>.
      </p>
      <p>
        Furthermore, as companies scale, maintaining design consistency across multiple teams and projects becomes
        increasingly complex. A well-defined design system mitigates these challenges by acting as a blueprint for
        future iterations, preventing visual drift and maintaining brand integrity across diverse touchpoints. Teams can
        confidently experiment and innovate within the system’s boundaries, knowing that their work aligns with
        established guidelines <a id="ref_4" href="#note_4" class="sd-footnotes--marker">4</a>.
      </p>
      <p>
        By continuously evolving with feedback and technological advancements, a design system remains a living entity
        rather than a static framework. Regular updates ensure that it stays relevant, adapting to new design paradigms,
        device capabilities, and user expectations. The investment in a design system, therefore, extends far beyond
        initial implementation—it serves as a foundation for scalable, efficient, and user-friendly digital experiences.
      </p>
      <p>A well-maintained design system is not just a tool—it’s a long-term strategy for success.</p>
    </div>
    <ol class="sd-footnotes mt-12">
      <li id="note_1">
        <a href="#ref_1" class="sd-footnotes--marker"></a>
        Design systems act as a "single source of truth," promoting consistency across all products.
      </li>
      <li id="note_2">
        <a href="#ref_2a" class="sd-footnotes--marker"></a>
        <a href="#ref_2b" class="sd-footnotes--marker"></a>
        <a href="#ref_2c" class="sd-footnotes--marker"></a>
        Component libraries in design systems streamline workflows, boosting efficiency and scalability.
      </li>
      <li id="note_3">
        <a href="#ref_3" class="sd-footnotes--marker"></a>
        A design system’s consistency helps reinforce brand identity and user trust.
      </li>
      <li id="note_4">
        <a href="#ref_4" class="sd-footnotes--marker"></a>
        Effective design systems evolve, remaining adaptable to product and user needs over time.
      </li>
    </ol>
  `
};
