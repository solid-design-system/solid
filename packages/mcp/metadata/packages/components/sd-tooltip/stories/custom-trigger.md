It is possible to change the tooltip trigger element by defining the new trigger in the default slot.
However, be aware that this affects the accessibility of the component due to the loss of the aria reference to the trigger element which will be located in the shadow DOM.
In this example we provide a solution to this problem by using a live region to announce the tooltip content when the trigger element is clicked.

```html
<sd-tooltip size="lg" content="This tooltip is accessible" placement="bottom" trigger="click" class="custom-tooltip">
  <sd-button class="custom-button">Custom Trigger</sd-button>
</sd-tooltip>
<div aria-live="assertive" class="sr-only live-region"></div>
<script>
  const liveRegion = document.querySelector('.live-region');
  const tooltip = document.querySelector('.custom-tooltip');
  const tooltipContent = tooltip.getAttribute('content');
  const tooltipLabel = tooltipContent;

  tooltip.addEventListener('sd-after-show', event => {
    liveRegion.textContent = liveRegion.textContent === tooltipContent ? tooltipContent + '\\u200B' : tooltipContent;
  });
</script>
```
