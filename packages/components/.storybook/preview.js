import 'normalize.css';
import '../src/solid-styles.css';
import '../src/styles/tailwind.css';
import { registerIconLibrary } from '../src/utilities/icon-library';
import { storybookUtilities } from '../scripts/storybook/helper';

/**
 * This registers iconLibraries for the sd-icon component
 */

registerIconLibrary('global-resources', {
  resolver: name => {
    // split path and name
    let path = name.split('/');
    let iconName = path.pop();

    // "system" and "system/colored" should both resolve to "system/colored", same for "content"
    if (path.length === 1) {
      path.push('colored');
    }

    return `https://global-resources.fe.union-investment.de/latest/scripts/services/svg/icons/${path.join(
      '/'
    )}/${iconName}.svg`;
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
      filledElement.setAttribute('fill', 'rgb(var(--sd-color-accent, 67 176 42) / var(--tw-bg-opacity, 1))');
    });

    recoloredElements.greenStrokes.forEach(strokedElement => {
      strokedElement.setAttribute('stroke', 'rgb(var(--sd-color-accent, 67 176 42) / var(--tw-bg-opacity, 1))');
    });
    return svg;
  }
});

registerIconLibrary('global-resources-overriden', {
  resolver: name => {
    // split path and name
    let path = name.split('/');
    let iconName = path.pop();

    // "system" and "system/colored" should both resolve to "system/colored", same for "content"
    if (path.length === 1) {
      path.push('colored');
    }

    // Override icon names which are baked into components
    if (path[0] === 'system') {
      iconName =
        {
          picture: 'dokumentimage'
        }[iconName] || iconName;
    } else if (path[0] === 'content') {
      iconName =
        {
          picture: 'dokumentimage'
        }[iconName] || iconName;
    }

    return `https://global-resources.fe.union-investment.de/latest/scripts/services/svg/attrax-icons/${path.join(
      '/'
    )}/${iconName}.svg`;
  },
  // We need currentColor as the main color for the icons
  mutator: svg => svg.setAttribute('fill', 'currentColor')
});

export const parameters = {
  docs: {
    story: { inline: true },
    toc: true,
    source: { transform: code => storybookUtilities.codeOptimizer(code), format: 'html' }
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fff'
      },
      {
        name: 'primary',
        value: 'rgb(var(--sd-color-primary, 0 53 142))'
      },
      {
        name: 'primary-100',
        value: 'rgb(var(--sd-color-primary-100, 236 240 249))'
      },
      {
        name: 'neutral-200',
        value: 'rgb(var(--sd-color-neutral-200, 242 242 242))'
      }
    ]
  },
  options: {
    storySort: {
      order: ['*', 'Legal']
    }
  }
};

/**
 * This mocks the fetch API to return a mocked HTML response
 */

const originalFetch = global.fetch;

const defaultResponse = content => {
  // Mocked HTML response
  const init = {
    status: 200,
    statusText: 'OK'
  };
  const blob = new Blob([content], { type: 'text/html' });
  return new Response(blob, init);
};

const mocks = {
  /**
   * Content
   */
  'https://union-investment.de/lorem-ipsum':
    '<h2 class="font-bold text-xl mb-4">Imprint</h2>Ad Lorem aliquip adipisicing tempor in mollit proident.',
  /**
   * System icons
   */
  '/icons/system/colored/multi-functions.svg':
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#00358e" d="M14 4c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"/><path fill="#00358e" d="M14 12c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"/><path fill="#00358e" d="M14 20c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"/></svg>',
  '/icons/system/colored/minus.svg':
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#00358e" d="M21 11h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h18c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"/></svg>',
  '/icons/system/colored/picture.svg':
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#00358e" d="M21 2h-18c-0.552 0-1 0.448-1 1v0 18c0 0.552 0.448 1 1 1v0h18c0.552 0 1-0.448 1-1v0-18c0-0.552-0.448-1-1-1v0zM20 4v9.253l-1.627-1.627c-0.181-0.181-0.431-0.292-0.707-0.292s-0.526 0.112-0.707 0.292v0l-2.96 2.96-4.96-4.96c-0.181-0.181-0.431-0.292-0.707-0.292s-0.526 0.112-0.707 0.292v0l-3.627 3.627v-9.253zM4 16.080l4.333-4.333 8.253 8.253h-12.587zM19.413 20l-4-4 2.253-2.253 2.333 2.333v3.92z"/><path fill="#00358e" d="M16 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"/></svg>',
  '/icons/system/colored/arrow-right.svg':
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#00358e" d="M14.707 4.293c-0.183-0.196-0.443-0.318-0.732-0.318-0.552 0-1 0.448-1 1 0 0.289 0.122 0.549 0.318 0.731l0.001 0.001 5.293 5.293h-15.587c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h15.587l-5.293 5.293c-0.181 0.181-0.292 0.431-0.292 0.707s0.112 0.526 0.292 0.707v0c0.181 0.181 0.431 0.292 0.707 0.292s0.526-0.112 0.707-0.292v0l7-7c0.181-0.181 0.292-0.431 0.292-0.707s-0.112-0.526-0.292-0.707v0z"></path></svg>',
  '/icons/system/colored/sort-down.svg':
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21 6.33301H2.99995C2.44895 6.33401 2.00195 6.78101 2.00195 7.33301C2.00195 7.59001 2.09895 7.82401 2.25695 8.00101L2.25595 8.00001L11.256 18C11.44 18.204 11.705 18.331 11.999 18.331C12.293 18.331 12.559 18.204 12.742 18.001L12.743 18L21.743 8.00001C21.901 7.82401 21.998 7.59001 21.998 7.33301C21.998 6.78101 21.551 6.33401 21 6.33301ZM12 15.84L5.24695 8.33301H18.754L12 15.84Z"/></svg>',
  '/icons/system/colored/sort-down-filled.svg':
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21 6.33301H2.99995C2.44895 6.33401 2.00195 6.78101 2.00195 7.33301C2.00195 7.59001 2.09895 7.82401 2.25695 8.00101L2.25595 8.00001L11.256 18C11.44 18.204 11.705 18.331 11.999 18.331C12.293 18.331 12.559 18.204 12.742 18.001L12.743 18L21.743 8.00001C21.901 7.82401 21.998 7.59001 21.998 7.33301C21.998 6.78101 21.551 6.33401 21 6.33301Z"/></svg>',
  '/icons/system/colored/sort-up.svg':
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12.743 5.99959C12.555 5.80459 12.291 5.68359 12 5.68359C11.709 5.68359 11.445 5.80459 11.257 5.99859L2.25695 15.9986C2.09895 16.1746 2.00195 16.4086 2.00195 16.6656C2.00195 17.2176 2.44895 17.6646 2.99995 17.6656H21C21.551 17.6646 21.998 17.2176 21.998 16.6656C21.998 16.4086 21.901 16.1746 21.743 15.9976L21.744 15.9986L12.743 5.99959ZM5.24695 15.6666L12 8.15959L18.753 15.6666H5.24695Z"/></svg>',
  '/icons/system/colored/sort-up-filled.svg':
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.68359C12.291 5.68359 12.555 5.80459 12.743 5.99959L21.744 15.9986L21.743 15.9976C21.901 16.1746 21.998 16.4086 21.998 16.6656C21.998 17.2176 21.551 17.6646 21 17.6656H2.99995C2.44895 17.6646 2.00195 17.2176 2.00195 16.6656C2.00195 16.4086 2.09895 16.1746 2.25695 15.9986L11.257 5.99859C11.445 5.80459 11.709 5.68359 12 5.68359Z"/></svg>',
  '/icons/system/colored/menu.svg':
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21 17h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h18c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path><path fill="currentColor" d="M21 11h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h18c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path><path fill="currentColor" d="M21 5h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h18c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path></svg>',
  '/icons/system/colored/website.svg':
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21 2h-18c-0.552 0-1 0.448-1 1v0 18c0 0.552 0.448 1 1 1v0h18c0.552 0 1-0.448 1-1v0-18c0-0.552-0.448-1-1-1v0zM4 4h16v2h-16zM4 20v-12h16v12z"></path><path fill="currentColor" d="M17 10h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0-4c0-0.552-0.448-1-1-1v0zM16 14h-2v-2h2z"></path><path fill="currentColor" d="M10 10h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h3c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path><path fill="currentColor" d="M10 13h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h3c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path><path fill="currentColor" d="M10 16h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h3c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path></svg>',
  '/icons/system/colored/magnifying-glass.svg':
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.707 20.293l-6.967-6.96c-0.046-0.046-0.096-0.087-0.15-0.124l-0.004-0.002c0.882-1.162 1.413-2.632 1.413-4.227 0-3.881-3.146-7.027-7.027-7.027s-7.027 3.146-7.027 7.027c0 3.881 3.146 7.027 7.027 7.027 1.594 0 3.065-0.531 4.244-1.426l-0.017 0.013c0.039 0.057 0.081 0.107 0.127 0.153l6.967 6.967c0.181 0.181 0.431 0.292 0.707 0.292s0.526-0.112 0.707-0.292v0c0.183-0.181 0.296-0.432 0.296-0.71s-0.113-0.529-0.296-0.71l-0-0zM9 14c-2.761 0-5-2.239-5-5s2.239-5 5-5c2.761 0 5 2.239 5 5v0c0 2.761-2.239 5-5 5v0z"></path></svg>',
  '/icons/system/colored/profile.svg':
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10.667c1.933 0 4-1.14 4-4.333s-2.067-4.333-4-4.333-4 1.14-4 4.333 2.067 4.333 4 4.333zM12 4c1.333 0 2 0.763 2 2.333s-0.667 2.333-2 2.333-2-0.763-2-2.333 0.667-2.333 2-2.333z"></path><path fill="currentColor" d="M17.127 11.417c-0.117-0.052-0.254-0.083-0.398-0.083-0.257 0-0.492 0.097-0.669 0.257l0.001-0.001-4.060 3.657-4.060-3.667c-0.176-0.159-0.412-0.257-0.669-0.257-0.145 0-0.283 0.031-0.407 0.086l0.006-0.003c-0.87 0.387-2.87 1.647-2.87 5.2v4.393c0 0.552 0.448 1 1 1v0h14c0.552 0 1-0.448 1-1v0-4.393c0-3.557-2-4.813-2.873-5.19zM18 20h-12v-3.393c0-1.713 0.59-2.593 1.147-3.040l3.58 3.223c0.335 0.305 0.782 0.492 1.273 0.492s0.938-0.187 1.275-0.494l-0.002 0.001 3.58-3.223c0.557 0.433 1.147 1.323 1.147 3.040z"></path></svg>',
  '/icons/system/colored/lock-locked.svg':
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11h-1v-3.667c0-2.94-2.69-5.333-6-5.333s-6 2.393-6 5.333v3.667h-1c-0.552 0-1 0.448-1 1v0 9c0 0.552 0.448 1 1 1v0h14c0.552 0 1-0.448 1-1v0-9c0-0.552-0.448-1-1-1v0zM8 7.333c0-1.837 1.793-3.333 4-3.333s4 1.497 4 3.333v3.667h-8zM18 20h-12v-7h12z"></path><path fill="currentColor" d="M12 14.667c-0.552 0-1 0.448-1 1v0 1.667c0 0.552 0.448 1 1 1s1-0.448 1-1v0-1.667c0-0.552-0.448-1-1-1v0z"></path></svg>',
  /**
   * Content icons
   */
  '/icons/content/colored/picture.svg': `<svg id="picture_svg__Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"> <path d="M52.13,4H12V58c0,5.61,3.46,10,7.87,10H60V14C60,8.39,56.54,4,52.13,4Zm0,4C54.23,8,56,10.75,56,14V48.17l-8-8-7,6.95-15-16L16,41.17V8ZM19.87,64C17.77,64,16,61.25,16,58V46.83l10-9.95,15,16,7-7.05,8,8V64Z" fill="#00358e"/> <circle cx="44" cy="20" r="6" fill="#43b02a"/> </svg> `,
  /**
   * Attrax icons
   */
  '/attrax-icons/system/colored/dokumentimage.svg': `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 32"> <path d="M21.632 6.656c0 1.467-1.189 2.656-2.656 2.656s-2.656-1.189-2.656-2.656c0-1.467 1.189-2.656 2.656-2.656s2.656 1.189 2.656 2.656zM11.584 30.016h11.136c1.184 0 2.24-0.736 2.656-1.76 0.16-0.352 0.224-0.736 0.224-1.152v-24.192c0-1.6-1.312-2.912-2.912-2.912h-19.776c-1.6 0-2.912 1.312-2.912 2.912v24.192c0 1.6 1.312 2.912 2.912 2.912h8.672zM23.84 20.608l-3.488-3.68-3.488 3.488-9.632-9.632-5.472 5.536v-13.408c0-0.608 0.512-1.152 1.152-1.152h19.776c0.608 0 1.152 0.512 1.152 1.152v17.696z"/> </svg> `,
  'attrax-icons/content/colored/dokumentimage.svg': `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 32"> <path d="M21.632 6.656c0 1.467-1.189 2.656-2.656 2.656s-2.656-1.189-2.656-2.656c0-1.467 1.189-2.656 2.656-2.656s2.656 1.189 2.656 2.656zM11.584 30.016h11.136c1.184 0 2.24-0.736 2.656-1.76 0.16-0.352 0.224-0.736 0.224-1.152v-24.192c0-1.6-1.312-2.912-2.912-2.912h-19.776c-1.6 0-2.912 1.312-2.912 2.912v24.192c0 1.6 1.312 2.912 2.912 2.912h8.672zM23.84 20.608l-3.488-3.68-3.488 3.488-9.632-9.632-5.472 5.536v-13.408c0-0.608 0.512-1.152 1.152-1.152h19.776c0.608 0 1.152 0.512 1.152 1.152v17.696z"/> </svg> `
};

global.fetch = (input, init) => {
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;

  return new Promise((resolve, reject) => {
    const mock = mocks[Object.keys(mocks).find(key => url.includes(key))];
    if (mock) {
      console.log(`ℹ️ Mocked fetch: ${url}`);
      resolve(defaultResponse(mock));
    } else {
      // Fallback to original fetch method for all other requests
      return originalFetch(input, init).then(response => resolve(response));
    }
  });
};
