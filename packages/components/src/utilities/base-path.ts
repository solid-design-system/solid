let basePath = '';

/** Sets the library's base path to the specified directory. */
export function setBasePath(path: string) {
  basePath = path;
}

/**
 * Gets the library's base path.
 *
 * The base path is used to load assets such as icons and images, so it needs to be set for components to work properly.
 * By default, this script will look for a script ending in solid.js and set the base path to the directory that
 * contains that file. To override this behavior, you can add the data-solid attribute to any script on the page
 * (it probably makes the most sense to attach it to the Solid script, but it could also be on a bundle). The value
 * can be a local folder or it can point to a CORS-enabled endpoint such as a CDN.
 *
 *   <script src="bundle.js" data-solid="/custom/base/path"></script>
 *
 * Alternatively, you can set the base path manually using the exported setBasePath() function.
 */
export function getBasePath() {
  if (!basePath) {
    const scripts = [...document.getElementsByTagName('script')] as HTMLScriptElement[];
    const configScript = scripts.find(script => script.hasAttribute('data-solid'));

    if (configScript) {
      // Use the data-solid attribute
      setBasePath(configScript.getAttribute('data-solid')!);
    } else {
      const fallbackScript = scripts.find(s => /solid(\.min)?\.js($|\?)/.test(s.src));
      let path = '';

      if (fallbackScript) {
        path = fallbackScript.getAttribute('src')!;
      }

      setBasePath(path.split('/').slice(0, -1).join('/'));
    }
  }

  return basePath.replace(/\/$/, '');
}
