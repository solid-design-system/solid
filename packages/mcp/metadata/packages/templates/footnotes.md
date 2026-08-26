---
name: footnotes
title: Footnotes
components:
  - sd-container
  - sd-container--variant-primary
  - sd-footnotes
  - sd-footnotes--inverted
  - sd-footnotes--marker
  - sd-headline
  - sd-headline--inverted
  - sd-headline--size-3xl
  - sd-paragraph
  - sd-paragraph--inverted
  - sd-prose
  - sd-prose--inverted
version: 1.0.0
---

## Template: Linked Footnotes

```html
<div class="sd-prose">
  <h2 class="sd-headline sd-headline--size-3xl">The Power of a Solid Design System</h2>
  <p class="sd-paragraph">
    A solid design system is the backbone of a cohesive product, offering a single source of truth that promotes
    consistency across all platforms and teams
    <span id="ref_1" class="sd-footnotes--marker"><a href="#note_1">1</a></span> . By providing reusable UI components
    and guided principles, design systems ensure that designers and developers work efficiently without reinventing the
    wheel. This consistency not only streamlines workflows but also enhances scalability, enabling teams to quickly roll
    out features that look and feel unified
    <span id="ref_2a" class="sd-footnotes--marker"><a href="#note_2">2</a></span> .
  </p>
  <p>
    Moreover, design systems empower teams to focus on refining user experience rather than repeatedly tackling
    foundational design challenges. When every component aligns with the brand’s visual language, users benefit from a
    familiar, intuitive interface that fosters trust. This familiarity is especially critical for products with diverse
    user bases, as it allows for seamless navigation and higher satisfaction
    <span id="ref_2b" class="sd-footnotes--marker"><a href="#note_2">2</a></span> .
  </p>
  <p>
    A solid design system also evolves with changing needs. By integrating regular feedback, teams can keep the system
    adaptable and relevant, meeting both emerging design trends and technological advancements
    <span id="ref_3" class="sd-footnotes--marker"><a href="#note_3">3</a></span> . Ultimately, investing in a design
    system yields long-term returns, ensuring that products are consistent, scalable, and efficient
    <span id="ref_2c" class="sd-footnotes--marker"><a href="#note_2">2</a></span> .
  </p>
  <p>
    Furthermore, as companies scale, maintaining design consistency across multiple teams and projects becomes
    increasingly complex. A well-defined design system mitigates these challenges by acting as a blueprint for future
    iterations, preventing visual drift and maintaining brand integrity across diverse touchpoints. Teams can
    confidently experiment and innovate within the system’s boundaries, knowing that their work aligns with established
    guidelines <span id="ref_4" class="sd-footnotes--marker"><a href="#note_4">4</a></span> .
  </p>
  <p>
    By continuously evolving with feedback and technological advancements, a design system remains a living entity
    rather than a static framework. Regular updates ensure that it stays relevant, adapting to new design paradigms,
    device capabilities, and user expectations. The investment in a design system, therefore, extends far beyond initial
    implementation—it serves as a foundation for scalable, efficient, and user-friendly digital experiences.
  </p>
  <p>A well-maintained design system is not just a tool—it’s a long-term strategy for success.</p>
</div>
<ol class="sd-footnotes mt-12">
  <li id="note_1">
    <a href="#ref_1" class="sd-footnotes--marker"></a>
    A design system centralizes guidelines, ensuring consistency across teams and products.
  </li>
  <li id="note_2">
    <a href="#ref_2a" class="sd-footnotes--marker"></a>
    <a href="#ref_2b" class="sd-footnotes--marker"></a>
    <a href="#ref_2c" class="sd-footnotes--marker"></a>
    A consistent UI fosters familiarity, trust, and better accessibility for diverse users.
  </li>
  <li id="note_3">
    <a href="#ref_3" class="sd-footnotes--marker"></a>
    Regular updates keep the design system adaptable to new trends and technologies.
  </li>
  <li id="note_4">
    <a href="#ref_4" class="sd-footnotes--marker"></a>
    Standardized components and documentation reduce development time and design inconsistencies.
  </li>
</ol>
```

## Template: Linked Footnotes in Container

```html
<div class="sd-container sd-container--variant-primary flex flex-col gap-8 max-w-xl">
  <div class="sd-prose sd-prose--inverted">
    <h2 class="sd-headline sd-headline--inverted sd-headline--size-3xl">Financing that fits your life</h2>
    <p class="sd-paragraph sd-paragraph--inverted">
      A clear loan structure helps customers understand exactly what they're signing up for, before they commit to
      anything
      <span id="ref_c_1" class="sd-footnotes--marker sd-footnotes--inverted"><a href="#note_c_1">1</a></span> .
      Transparent rates, honest fees, and flexible repayment options work together to reduce surprises, helping build
      long-term trust between the bank and the people it serves.
    </p>
    <p class="sd-paragraph sd-paragraph--inverted">
      Every application is reviewed individually, factoring in income, credit history, and personal financial goals
      <span id="ref_c_2" class="sd-footnotes--marker sd-footnotes--inverted"><a href="#note_c_2">2</a></span> . This
      tailored approach means financing decisions reflect each customer's real situation, rather than applying a
      one-size-fits-all model that ignores individual circumstances.
    </p>
  </div>
  <ol class="sd-footnotes sd-footnotes--inverted flex flex-col gap-2">
    <li id="note_c_1">
      <a href="#ref_c_1" class="sd-footnotes--marker"></a>
      Rates shown are indicative and subject to credit approval.
    </li>
    <li id="note_c_2">
      <a href="#ref_c_2" class="sd-footnotes--marker"></a>
      Terms may vary based on income and repayment history.
    </li>
  </ol>
</div>
```
