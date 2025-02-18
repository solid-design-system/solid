# required-sd-icon-label

This rule enforces the `label` attribute on a `sd-icon` when it is placed inside a `sd-button` without any text content

## Why?

When a `sd-button` has a `sd-icon` but doesn't have any text content, screenreaders won't be able to identify any content. The `label` attribute will help the screenreader identify the buttons' content.

## Rule Details

### Invalid

```
<sd-button>
  <sd-icon></sd-icon>
</sd-button>
```

### Valid

```
<sd-button>
  <sd-icon label="Lorem ipsum"></sd-icon>
</sd-button>
```

```
<sd-button>
  <sd-icon></sd-icon>
  <span>Text</span>
</sd-button>
```
