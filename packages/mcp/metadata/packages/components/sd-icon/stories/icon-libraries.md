You can register additional icons to use with the `<sd-icon>` component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.
Solid ships with three built-in icon libraries, `default`, `_internal`, and `sd-status-assets`:

- `default`: The `default` icon library refers to the official CDN by Union Investment which is fed by Celum. It is provided by the brand department, therefore requests towards the icons itself need to be addressed accordingly.
- `sd-status-assets`: This library contains icons specifically for status indicators like the `sd-status-badge` component.
- `_internal`: These icons are an integrated library of the Solid Components to ensure they're always available. They are a subset of Union Investment's official icons and are themed for consistency. As names and visuals may change over time, internal icons should NOT be used directly!
  To register an additional icon library, use the `registerIconLibrary()` function that's exported from `utilities/icon-library.js`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.
  If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via currentColor, so you may need to apply fill="currentColor or stroke="currentColor" to the SVG element using this function.
  Here's an example that registers an icon library located in the `/assets/icons` directory.

```html
<script type="module">
  import { registerIconLibrary } from '@solid-design-system/components/dist/components/icon/library';
  registerIconLibrary('my-icons', {
    resolver: name => `/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

If you use the IIFE bundle, you have to access the `registerIconLibrary()` function from the `SolidComponents` global.

```html
<script src="https://solid-design-system.fe.union-investment.de/components/%COMPONENTS-VERSION%/cdn/solid-components.iife.js"></script>
<script>
  const { registerIconLibrary } = window['SolidComponents'];
  registerIconLibrary('my-icons', {
    resolver: name => `/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

Please have in mind, that you have to make sure that `window['SolidComponents']` is available before you call `registerIconLibrary()` e. g. via polling or similar.
To display an icon, set the library and name attributes of an <sd-icon> element.

```html
<!-- This will show the icon located at /assets/icons/smile.svg -->
<sd-icon library="my-icons" name="smile"></sd-icon>
```

You can even version your icon libraries:

```html
<script type="module">
  import { registerIconLibrary } from '@solid-design-system/components/unversioned/icon/library';
  registerIconLibrary('my-icons-2-3-0', {
    resolver: name => `/2-3-0/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

If an icon is used before registration occurs, it will be empty initially but shown when registered.
The following examples demonstrate how to register icons from Union Investment's Global Resources CDN. Checkout [Shoelace's Docs](https://shoelace.style/components/icon?id=icon-libraries)
to examples of popular, open source icon libraries.

```html
<sd-icon name="system/image"> </sd-icon>

<script type="module">
  // ESM:
  // import { registerIconLibrary } from '@solid-design-system/components/unversioned/icon/library';

  // IIFE:
  // const { registerIconLibrary } = window['SolidComponents'];

  // preview-ignore:start
  // Note on this script:
  // - It's actual registration happens in preview.js, here it is replicated for the code preview.
  // - To prevent errors, the registration is wrapped in a hidden conditional statement that is always false.
  if (false) {
    // preview-ignore:end
    registerIconLibrary('global-resources', {
      resolver: name => {
        // split path and name
        let path = name.split('/');
        let iconName = path.pop();

        // "system" and "system/colored" should both resolve to "system/colored", same for "content"
        if (path.length === 1) {
          path.push('colored');
        }

        return (
          'https://global-resources.fe.union-investment.de/latest/scripts/services/svg/icons/' +
          path.join('/') +
          '/' +
          iconName +
          '.svg'
        );
      },

      // We need currentColor as the main color for the icons
      mutator: svg => {
        const recoloredElements = {};
        recoloredElements['currentColorFills'] = svg.querySelectorAll('[fill="#00358e"], [fill="#fff"]');
        recoloredElements['currentColorStrokes'] = svg.querySelectorAll('[stroke="#00358e"], [stroke="#fff"]');
        recoloredElements['greenFills'] = svg.querySelectorAll('[fill="#43b02a"]');
        recoloredElements['greenStrokes'] = svg.querySelectorAll('[stroke="#43b02a"]');

        recoloredElements.currentColorFills.forEach(filledElement => {
          filledElement.setAttribute('fill', 'currentColor');
        });

        recoloredElements.currentColorStrokes.forEach(strokedElement => {
          strokedElement.setAttribute('stroke', 'currentColor');
        });

        recoloredElements.greenFills.forEach(filledElement => {
          filledElement.setAttribute('fill', 'var(--sd-color-accent, 45 157 0)');
        });

        recoloredElements.greenStrokes.forEach(strokedElement => {
          strokedElement.setAttribute('stroke', 'var(--sd-color-accent, 45 157 0)');
        });
        return svg;
      }
    });
    // preview-ignore:start
  }
  // preview-ignore:end
</script>
```
