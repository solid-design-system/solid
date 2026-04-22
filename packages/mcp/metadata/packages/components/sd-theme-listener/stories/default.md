```html
<div id="theme-wrapper" class="sd-theme-ui-light bg-white p-4">
  <sd-theme-listener id="theme-listener"></sd-theme-listener>
  <sd-button id="theme-switcher">Toggle Theme</sd-button>
</div>
<script type="module">
  function onThemeChange() {
    alert('Theme has changed!');
  }

  const listener = document.querySelector('#theme-listener');
  listener.addEventListener('sd-theme-change', onThemeChange);
</script>
<script type="module">
  function toggleTheme() {
    const hasLightTheme = wrapper.classList.contains('sd-theme-ui-light');

    if (hasLightTheme) {
      wrapper.classList.remove('sd-theme-ui-light');
      wrapper.classList.add('sd-theme-ui-dark');
    } else {
      wrapper.classList.remove('sd-theme-ui-dark');
      wrapper.classList.add('sd-theme-ui-light');
    }
  }

  const wrapper = document.querySelector('#theme-wrapper');
  const switcher = document.querySelector('#theme-switcher');
  switcher.addEventListener('click', toggleTheme);
</script>
```
