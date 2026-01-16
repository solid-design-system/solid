import '../../../dist/solid-components';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SdThemeListener from './theme-listener';

describe('<sd-theme-listener>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sd-theme-listener></sd-theme-listener> `);
    expect(el).to.exist;
  });

  it('should emit an event when theme changes', async () => {
    const el: SdThemeListener = await fixture(html` <sd-theme-listener></sd-theme-listener> `);
    const handleThemeChange = sinon.spy();

    el.style.setProperty('--sd-theme', 'light');
    el.addEventListener('sd-theme-change', handleThemeChange);
    el.style.setProperty('--sd-theme', 'dark');
    await waitUntil(() => handleThemeChange.calledOnce);

    expect(handleThemeChange).to.have.been.calledOnce;
  });
});
