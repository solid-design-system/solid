---
name: skeleton
title: Skeleton
components:
  - sd-accordion
  - sd-accordion-group
  - sd-skeleton
version: 1.0.0
---

## Template: Accordion Group with Skeleton

```html
<div class="w-[800px]">
    <sd-accordion-group>
        <sd-accordion summary="Shareholder structure">
            <div class="flex flex-col gap-4 w-full">
            <sd-skeleton class="h-8"></sd-skeleton>
            <sd-skeleton class="h-8"></sd-skeleton>
            <sd-skeleton class="w-8 h-8"></sd-skeleton>
            </div>
        </sd-accordion>
        <sd-accordion summary="Cooperative financial network">
          <div class="flex flex-row gap-4 mx-auto">
                <div class="flex flex-col gap-4 w-full">
                    <sd-skeleton class="h-8"></sd-skeleton>
                    <sd-skeleton class="w-20 h-8"></sd-skeleton>
                </div>
            </div>
        </sd-accordion>
    </div>
```
