---
description: >
  Use when a user needs information about the UX principles for building navigation patterns. This includes guidelines on creating intuitive, accessible, and engaging user experiences that align with the brand's values and enhance user satisfaction across all digital touchpoints.
name: navigation
title: Navigation
components:
  - sd-button
  - sd-divider
  - sd-drawer
  - sd-dropdown
  - sd-header
  - sd-header-calculated-height
  - sd-header-padding
  - sd-headline
  - sd-icon
  - sd-navigation-item
version: 1.0.0
---

# Pattern Guide: Navigation

Header navigation streamlines user access to crucial site sections, serving as a guide for easy exploration and enhanced usability. Including meta-information links, it contributes to accessibility and transparency, fostering seamless user interaction. Its primary role is to facilitate swift and convenient exploration of the website's features and content.

## General Principles

Website navigation encompasses various user interface components facilitating visitors in finding content and features on a site. These components, presented as copy, link text, buttons, and menus, play a crucial role in enhancing user experience.

- Keep the navigation fixed at the top of the page when scrolling.
- Use the number of navigation items that best suits the content — always ensure categories are clearly labelled and mutually exclusive
- Do not inject non-navigation content into the header container — it distracts assistive technology.
- Use clear, concise labels. Do not use icons alone unless they are universally understood — pair icons with labels.
- Be consistent with descriptions: use them for all items at the same level, keeping them similar in length.
- Provide a logical tab order that follows the visual sequence of navigation items and their levels.

## Design Guidelines

### Header Navigation

#### Anatomy

Top navigation menus, with horizontal organization, are ideal for landing pages and consumer-facing web apps. To optimize usability, maintain a balance of 2 to 7 first level menu items, each featuring a title with fewer than 15 characters.

- Top Bar: Displays branding and contextual actions and provides access to the home page.
- First level menu: The first level of navigation should reflect the main categories or primary functions of the website or application. These categories remain stable.
- Second level navigation with or without description: This level provides a more detailed breakdown of the main categories. Description texts can optionally help users understand the content or purpose of each subcategory.
- Third level navigation: This level offers direct access to specific high-priority products, features, or subcategories within the second level.
- Utility menu: Contains actions that are global and functional, not content-based sections of the site. Typically from right to left: global search, site switcher and language switcher (all icon only) and max. two further actions that are displayed with left icon and label (e.g. login).
- Divider: Creates a visual reference to set elements or sections apart. Column width dividers separate second level nav items when they stack within a column; full width dividers separate mega menu sections.
- Mega Menu section: When using a Mega Menu to divide content into distinct thematic sections, a Divider combined with a Subheadline is employed to create clear visual distinctions between these sections. The section headline serves as a brief title summarizing the content of the subsequent section.

#### Application Rules

- First level menu should not exceed 7 nav items
- When to use which second level nav pattern:
  - For 1 to 4 second level nav items use a single row
  - For 4 to 8 second level nav items add a second row separated by divider in column
  - For more than 8 second level nav items consider using a mega menu
- Avoid mixing second level nav items with and without descripitions
- When using a second row of second level nav, display max. 3 third level nav items each
- If possible, display the same amount of third level nav items for each second level nav item to avoid chaotic column heights
- Utility menu usually consists of:
  - Global search – search input field will hide all other utility menu items
  - Site switcher – will open a dropdown with navigation items listing products and systems
  - Language switcher – will open a dropdown with navigation items listing language options
  - Max. 2 further global actions

### Side Navigation

#### Anatomy

Vertical navigation offers flexibility, allowing easy extension of menu items downward and accommodating longer labels. Utilize a scrollbar for an unlimited number of items, making it suitable for multi-level, operation-intensive, and dashboard-like web apps.

Constant Visibility of Side Navigation: To maintain a clear and consistent structure, it's crucial to ensure that the side navigation remains visible at all times. Only the content area should change, allowing users to seamlessly transition between different sections.

- First level navigation with and without subsidiary second level: The first level of navigation should reflect the main categories or primary functions of the website or application. Those items with a subsidiary second level will have a chevron and navigating into a second level will cause a page switch (cf. Investment funds).
- Divider: Creates a visual reference to set elements or sections apart.
- Global Actions button group: Contains a set of max. 3 actions that are global and need to be visible on every site. This button group will stick to the bottom of the sidebar.
- Back button: When on a second or third level page, the back button will allow a user to navigate back to first level categories.
- Active first level category: When on a second or third level page, the actvive first level Category is Highlighted.
- Second level navigation with and without subsidiary third level: Second level items provide a more detailed breakdown of the main categories and are in relaxed position. Those items with a subsidiary second level will have a chevron (up when opened and down when closed) and opening these will act comparably to an accordion and reveal subsidiary third level items.
- Third level navigation: This level offers direct access to specific high-priority products, features, or subcategories within the second level.
- Utility navigation: Contains actions that are global and functional, not content-based sections of the site.

#### Application Rules

- Keep the sidebar hierarchy strictly two levels: Level 1 (first level nav items) → Level 2 (subsequent levels)
- Menu can hold any amount of nav items. If content exceeds viewport height, scroll only the navigation list, not the branding or global action buttons
- Never mix navigation items (destinations) with actions (operations); separate them visually.
- Expandable second level nav items will always be collapsed by default, unless they or one of their subsequent third level nav items is active
- Show only one expanded second level item at a time to reduce cognitive load. Expanding another item will collapse others
- Each navigation label must match its page header to maintain clarity of location

### Drawer Navigation (Mobile)

#### Anatomy

Top navigation menus, with horizontal organization, are ideal for landing pages and consumer-facing web apps. To optimize usability, maintain a balance of 2 to 7 first level menu items, each featuring a title with fewer than 15 characters.

- Top Bar: The Top Bar on screens below 1024px width contains the Union Investment Logo, which provides access to the home page, as well as a search button that triggers opening of the search drawer and a menu button that triggers opening of the navigation drawer.
- Close button: Triggers the closing of the navigation drawer.
- Back button: When on a second level page, the back button will allow a user to navigate back to first level categories.
- First level menu: The first level of navigation should reflect the main categories or primary functions of the website or application. These categories remain stable.
- Active first level category: When on a second level page, the active first level category is highlighted.
- Second level navigation with or without description: This level provides a more detailed breakdown of the main categories. Description texts can optionally help users understand the content or purpose of each subcategory.
- Third level navigation: This level offers direct access to specific high-priority products, features, or subcategories within the second level.
- Mega Menu section: When using a Mega Menu to divide content into distinct thematic sections, a divider combined with a subheadline is employed to create clear visual distinctions between these sections. The section headline serves as a brief title summarizing the content of the subsequent section.
- Divider: Creates a visual reference to set elements or sections apart.
- Utility menu: Contains actions that are global and functional, not content-based sections of the site. Typically those are: site switcher, language switcher and max. two further actions such as login

#### Application Rules

- Header and Side Navigation desktop hierarchies translate directly into drawer navigation on mobile
- Keep the drawer hierarchy strictly two levels: Level 1 (first level nav items) → Level 2 (subsequent levels)
- Menu can hold any amount of nav items. If content exceeds viewport height, scroll only the navigation list, not the close, back or global action buttons
- Never mix navigation items (destinations) with actions (operations); separate them visually.
- Expandable second level nav items will always be collapsed by default, unless they or one of their subsequent third level nav items is active
- Show only one expanded second level item at a time to reduce cognitive load. Expanding another item will collapse others
- Each navigation label must match its page header to maintain clarity of location

## Related Templates

- header-navigation

Use the templates tool (with `template` arg) to retrieve the full code for any of these templates.
