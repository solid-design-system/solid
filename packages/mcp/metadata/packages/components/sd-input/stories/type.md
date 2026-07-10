Use the `type` attribute to control the type of input the browser renders.

```html
<div class="grid grid-cols-2 gap-12 content-end">
  <sd-input type="text" placeholder="Lorem ipsum" label="Text (default)" help-text="Default type" spellcheck></sd-input>

  <sd-input type="search" placeholder="Search term" label="Search" help-text="Use search format" spellcheck></sd-input>

  <sd-input
    type="date"
    label="Date"
    value="2025-03-01"
    help-text="Value is restricted to date format"
    spellcheck
  ></sd-input>

  <sd-input
    type="datetime-local"
    label="Date time"
    value="2025-03-01T10:30"
    help-text="Value is restricted to datetime format"
    spellcheck
  ></sd-input>

  <sd-input type="time" label="Time" value="10:30" help-text="Value is restricted to time format" spellcheck></sd-input>

  <sd-input
    type="number"
    placeholder="123456"
    label="Number"
    help-text="Value is restricted to numbers"
    spin-buttons
    spellcheck
  ></sd-input>

  <sd-input
    type="email"
    placeholder="someone@example.com"
    label="Email"
    help-text="Validate with email address format"
    spellcheck
  ></sd-input>

  <sd-input
    type="tel"
    placeholder="+49 1234 567891"
    label="Tel"
    help-text="Shows optimized keyboard on touch devices or similar"
    spellcheck
  ></sd-input>

  <sd-input
    type="password"
    label="Password"
    value="8SyW4jNDdrIDe2L"
    help-text="Use password display format"
    password-toggle
    spellcheck
  ></sd-input>

  <sd-input
    type="password"
    label="Password"
    value="8SyW4jNDdrIDe2L"
    help-text="Use password display format"
    password-toggle
    password-visible
    spellcheck
  ></sd-input>

  <sd-input
    type="url"
    placeholder="https://www.union-investment.de/"
    label="URL"
    help-text="Validate with url format"
    name="url field"
    spellcheck
  ></sd-input>
</div>
```
