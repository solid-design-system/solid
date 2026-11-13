import { expect, fixture, html, nextFrame, waitUntil } from '@open-wc/testing';
import { observeTheme, readTheme } from './theme-observer';
import sinon from 'sinon';

const setup = async (template = html`<div style="--sd-theme: 'ui-light'"><span></span></div>`) => {
  const wrapper = await fixture<HTMLElement>(template);
  const target = wrapper.querySelector('span')!;
  const callback = sinon.spy();
  const unobserve = observeTheme(target, callback);
  // The baseline is read in the next frame
  await nextFrame();
  await nextFrame();
  return { wrapper, target, callback, unobserve };
};

describe('theme-observer', () => {
  let unobserve: (() => void) | undefined;

  afterEach(() => {
    unobserve?.();
    unobserve = undefined;
  });

  it('reads the theme without quotes', async () => {
    const el = await fixture<HTMLElement>(html`<div style="--sd-theme: 'vb'"></div>`);
    expect(readTheme(el)).to.equal('vb');
  });

  it('reports inline --sd-theme changes on an ancestor', async () => {
    const result = await setup();
    unobserve = result.unobserve;

    result.wrapper.style.setProperty('--sd-theme', `'bb'`);
    await waitUntil(() => result.callback.calledOnce);

    expect(result.callback).to.have.been.calledOnceWith('bb');
  });

  it('reports theme class changes on an ancestor', async () => {
    const result = await setup(html`
      <div>
        <style>
          .sd-theme-test-a {
            --sd-theme: 'a';
          }
          .sd-theme-test-b {
            --sd-theme: 'b';
          }
        </style>
        <div class="sd-theme-test-a"><span></span></div>
      </div>
    `);
    unobserve = result.unobserve;

    result.target.parentElement!.className = 'sd-theme-test-b';
    await waitUntil(() => result.callback.calledOnce);

    expect(result.callback).to.have.been.calledOnceWith('b');
  });

  it('reports theme changes on wrappers inside a shadow root', async () => {
    const host = await fixture<HTMLElement>(html`<div></div>`);
    const shadow = host.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<div style="--sd-theme: 'ui-light'"><span></span></div>`;
    const wrapper = shadow.querySelector('div')!;
    const callback = sinon.spy();
    unobserve = observeTheme(shadow.querySelector('span')!, callback);
    await nextFrame();
    await nextFrame();

    wrapper.style.setProperty('--sd-theme', `'ui-dark'`);
    await waitUntil(() => callback.calledOnce);

    expect(callback).to.have.been.calledOnceWith('ui-dark');
  });

  it('ignores unrelated mutations and unchanged themes', async () => {
    const result = await setup();
    unobserve = result.unobserve;

    result.wrapper.className = 'something-else';
    result.wrapper.style.setProperty('color', 'red');
    // Theme related mutation that keeps the same resolved theme
    result.wrapper.style.setProperty('--sd-theme', `'ui-light'`);
    await nextFrame();
    await nextFrame();

    expect(result.callback).not.to.have.been.called;
  });

  it('stops reporting after unsubscribing', async () => {
    const result = await setup();
    result.unobserve();

    result.wrapper.style.setProperty('--sd-theme', `'bb'`);
    await nextFrame();
    await nextFrame();

    expect(result.callback).not.to.have.been.called;
  });

  it('reports themes changed by stylesheets added to the head', async () => {
    const result = await setup(html`<div class="theme-observer-test"><span></span></div>`);
    unobserve = result.unobserve;

    const style = document.createElement('style');
    style.textContent = `.theme-observer-test { --sd-theme: 'from-stylesheet'; }`;
    document.head.appendChild(style);

    try {
      await waitUntil(() => result.callback.calledOnce);
      expect(result.callback).to.have.been.calledOnceWith('from-stylesheet');
    } finally {
      style.remove();
    }
  });

  it('notifies every subscriber of a change', async () => {
    const wrapper = await fixture<HTMLElement>(html`<div style="--sd-theme: 'ui-light'"></div>`);
    const callback = sinon.spy();
    const unsubscribers = Array.from({ length: 200 }, () => {
      const el = document.createElement('span');
      wrapper.appendChild(el);
      return observeTheme(el, callback);
    });
    await nextFrame();
    await nextFrame();

    wrapper.style.setProperty('--sd-theme', `'vb'`);
    await waitUntil(() => callback.callCount === 200);

    expect(callback.alwaysCalledWith('vb')).to.be.true;
    unsubscribers.forEach(fn => fn());
  });
});
