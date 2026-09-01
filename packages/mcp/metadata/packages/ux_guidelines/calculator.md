---
description: >
  Use when a user needs information about the UX principles for building calculator patterns. This includes guidelines on creating intuitive, accessible, and engaging user experiences that align with the brand's values and enhance user satisfaction across all digital touchpoints.
name: calculator
title: Calculator
components:
  - sd-step-group
  - sd-headline
  - sd-leadtext
  - sd-headline
  - sd-paragraph
  - sd-checkbox-group
  - sd-radio-group
  - sd-input
  - sd-range
  - sd-switch
  - sd-select
  - sd-combobox
  - sd-button
  - sd-container
  - sd-divider
  - sd-table-cell
version: 1.0.0
---

# Pattern Guide: Calculator

Calculators help customers explore financial scenarios by adjusting inputs such as contribution amounts, interest rates, or time horizons and instantly seeing projected outcomes. They support informed decision-making by visualizing the impact of financial decisions before commitment.

## Overview

Use this pattern whenever users need to simulate a financial outcome, compare alternatives, or understand the consequences of varying inputs. Calculators are especially effective in early-stage decision flows, product discovery, and advisory contexts.

## Single-Page Calculator

### Anatomy

Use a one-page calculator when the scenario is simple, requires only a small set of inputs, and benefits from instant, real-time feedback. This format allows users to experiment quickly by adjusting values and immediately seeing results. This makes it ideal for early discovery, education, and low-stakes decision support where all information can comfortably fit on a single screen without overwhelming the user.

- Calculator Head: Contains a title that clearly communicates the purpose (e.g., “Savings Plan Calculator”) and a short description that sets expectations about what the user can explore.
- Multi-Calculator Selection Panel (optional): If needed this panel lets a user switch between different specialized calculators related to the aforementioned topic.
- Input Panels: The input panels are the user’s primary control areas for defining the variables of a financial scenario. They typically contain elements such as numeric fields, sliders, dropdowns, toggles, and helper text that guide users in providing accurate inputs. When designing the input panels, ensure clarity through well-labeled fields, intuitive default values, and immediate, unobtrusive validation. Group related inputs logically, reduce cognitive load with concise explanations, and maintain consistent formatting for currencies, units, and ranges so users can adjust values confidently and without confusion.
- Output Panel: The output panel presents the calculated results based on the user’s inputs, translating financial data into clear, actionable insights. It may include key figures, supporting metrics, charts, tables, or explanatory text that help users understand the impact of their choices. When designing the output panel, prioritize clarity and hierarchy: surface the most important outcome first, use visualizations sparingly and purposefully, and ensure assumptions or disclaimers are accessible but unobtrusive. The panel should update predictably, remain easy to interpret across devices, and reinforce trust through transparency and consistency.
- Call to Action: Call-To Action to guide users into a sales funnel.
- Legal Disclaimer: The disclaimer provides essential legal and compliance context, clarifying that the calculator’s results are estimates rather than binding offers or financial advice.

## Multi-Step Calculator

### Anatomy

Use a multi-step calculator when the scenario involves many inputs, complex dependencies, or requires guidance to help users provide accurate information. This structured approach breaks the task into manageable steps, ensuring clarity and compliance while reducing cognitive load. This makes it suitable for high-stakes decisions such as mortgages, retirement planning, or detailed affordability assessments.

- Step Indicator: The step indicator provides users with a clear sense of progress in multi-step calculators, showing where they are in the journey and how many steps remain.
- Calculator Head: Contains a title that clearly communicates the purpose (e.g., “Savings Plan Calculator”) and a short description that sets expectations about this specific Step.
- Input Panel: The input panel is the user’s primary control area for defining the variables of a financial scenario. It typically contains elements such as numeric fields, sliders, dropdowns, toggles, and helper text that guide users in providing accurate inputs. When designing the input panel, ensure clarity through well-labeled fields, intuitive default values, and immediate, unobtrusive validation. Group related inputs logically, reduce cognitive load with concise explanations, and maintain consistent formatting for currencies, units, and ranges so users can adjust values confidently and without confusion.
- Next & Previous Step Button: The Next Step button advances users through a multi-step calculator by confirming their current inputs and moving them to the following stage. The Previous Step button allows users to move back in a multi-step calculator to review or adjust earlier inputs without losing progress. These buttons’ labels should contain the title of the respective step as they are labeled on the step indicator.
- Legal Disclaimer: The disclaimer provides essential legal and compliance context, clarifying that the calculator’s results are estimates rather than binding offers or financial advice. In multi-step calculators the Legal Disclaimer is typically placed on the last input step before starting the calculation.
- Calculator Result Head: Contains a title that clearly communicates the purpose (e.g., “Savings Plan Calculator”) and a short description that sets expectations about this specific Step.
- Output Panel: The output panel presents the calculated results based on the user’s inputs, translating financial data into clear, actionable insights and a clear Call-To Action to guide users into a sales funnel. It may include key figures, supporting metrics, charts, tables, or explanatory text that help users understand the impact of their choices. When designing the output panel, prioritize clarity and hierarchy: surface the most important outcome first, use visualizations sparingly and purposefully, and ensure assumptions or disclaimers are accessible but unobtrusive. The panel should update predictably, remain easy to interpret across devices, and reinforce trust through transparency and consistency. Optionally the output panel can be split horizontally and an input panel can be placed on the left to manipulate the results as shown on the single -page calculator.
- Further Information: Provides or asks for further information to assess.
- Input Overview Accordion: The input overview accordion consolidates the key inputs of a multi-step calculator into a clear, digestible overview. It allows users to revisit their inputs without going back to previous steps. When designing the summary panel, present information with strong visual hierarchy, group related details logically, and ensure the panel is easy to scan while offering direct input editing.
- Call to Action & Print PDF Button: Call-To Action guide users into a sales funnel.The Print PDF button allows users to generate and download a printer-friendly version of their calculator results, including key inputs, outputs, charts, and any relevant disclaimers.

## Related Templates

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
