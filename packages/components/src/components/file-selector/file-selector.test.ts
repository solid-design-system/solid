import '../../../dist/solid-components';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type SdFileSelector from './file-selector.js';

describe('<sd-file-selector>', () => {
  describe('accessibility', () => {
    it('should pass accessibility tests (default variant)', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);
      await expect(el).to.be.accessible();
    });

    it('should pass accessibility tests (drop-area variant)', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload" drop-area></sd-file-selector> `);
      await expect(el).to.be.accessible();
    });
  });

  describe('default properties', () => {
    it('should have expected defaults', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector></sd-file-selector> `);

      expect(el.name).to.equal('');
      expect(el.title).to.equal('');
      expect(el.value).to.equal('');
      expect(el.defaultValue).to.equal('');
      expect(el.size).to.equal('lg');
      expect(el.label).to.equal('');
      expect(el.showLabel).to.be.false;
      expect(el.helpText).to.equal('');
      expect(el.disabled).to.be.false;
      expect(el.visuallyDisabled).to.be.false;
      expect(el.droparea).to.be.false;
      expect(el.accept).to.equal('');
      expect(el.styleOnValid).to.be.false;
      expect(el.multiple).to.be.false;
      expect(el.webkitdirectory).to.be.false;
      expect(el.form).to.equal('');
      expect(el.required).to.be.false;
      expect(el.hideValue).to.be.false;
      expect(el.files!.length).to.equal(0);
    });
  });

  describe('rendering', () => {
    it('should render the button variant by default', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);

      expect(el.shadowRoot!.querySelector('[part~="button-wrapper"]')).to.exist;
      expect(el.shadowRoot!.querySelector('[part~="droparea"]')).to.not.exist;
    });

    it('should render the drop-area variant when drop-area is set', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload" drop-area></sd-file-selector> `);

      expect(el.shadowRoot!.querySelector('[part~="droparea"]')).to.exist;
      expect(el.shadowRoot!.querySelector('[part~="button-wrapper"]')).to.not.exist;
    });

    it('should render the label from the attribute', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);
      const label = el.shadowRoot!.querySelector('#form-control-label')!;

      expect(label).to.exist;
      expect(label.textContent).to.contain('Upload');
    });

    it('should visually hide the label by default', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);
      const label = el.shadowRoot!.querySelector('#form-control-label')!;

      expect(label.classList.contains('sr-only')).to.be.true;
    });

    it('should visually show the label when show-label is set', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload" show-label></sd-file-selector> `);
      const label = el.shadowRoot!.querySelector('#form-control-label')!;

      expect(label.classList.contains('sr-only')).to.be.false;
      expect(label.classList.contains('inline-block')).to.be.true;
    });

    it('should render help text from the attribute', async () => {
      const el = await fixture<SdFileSelector>(html`
        <sd-file-selector label="Upload" help-text="Max 3 MB"></sd-file-selector>
      `);
      const helpText = el.shadowRoot!.querySelector('#help-text')!;

      expect(helpText).to.exist;
      expect(helpText.textContent).to.contain('Max 3 MB');
      expect(helpText.getAttribute('aria-hidden')).to.equal('false');
    });

    it('should mark help-text as aria-hidden when empty', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);
      const helpText = el.shadowRoot!.querySelector('#help-text')!;

      expect(helpText.getAttribute('aria-hidden')).to.equal('true');
    });

    it('should render the value element', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);
      const value = el.shadowRoot!.querySelector('#file-status')!;

      expect(value).to.exist;
      expect(value.getAttribute('role')).to.equal('status');
      expect(value.getAttribute('aria-live')).to.equal('polite');
    });

    it('should visually hide the value when hide-value is set', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload" hide-value></sd-file-selector> `);
      const value = el.shadowRoot!.querySelector('#file-status')!;

      expect(value.classList.contains('sr-only')).to.be.true;
    });

    it('should reflect the size attribute to the sd-button', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload" size="sm"></sd-file-selector> `);
      const button = el.shadowRoot!.querySelector('sd-button')!;

      expect(button.getAttribute('size')).to.equal('sm');
    });

    it('should render invalid icon only when invalid', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);

      expect(el.shadowRoot!.querySelector('[part~="invalid-icon"]')).to.not.exist;

      el.setCustomValidity('Error');
      el.reportValidity();
      await el.updateComplete;
      await el.updateComplete;

      expect(el.shadowRoot!.querySelector('[part~="invalid-icon"]')).to.exist;
    });
  });

  describe('disabled state', () => {
    it('should disable the native input when disabled', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload" disabled></sd-file-selector> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input.input__control')!;

      expect(input.disabled).to.be.true;
    });

    it('should apply aria-disabled when visually-disabled', async () => {
      const el = await fixture<SdFileSelector>(html`
        <sd-file-selector label="Upload" visually-disabled></sd-file-selector>
      `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input.input__control')!;

      expect(input.getAttribute('aria-disabled')).to.equal('true');
    });

    it('should not trigger the file input when clicking a disabled control', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload" disabled></sd-file-selector> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input.input__control')!;
      const clickSpy = sinon.spy(input, 'click');

      const button = el.shadowRoot!.querySelector<HTMLElement>('sd-button')!;
      button.click();

      expect(clickSpy).to.not.have.been.called;
    });
  });

  describe('multiple, directory and accept attributes', () => {
    it('should set multiple on the native input when multiple is true', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload" multiple></sd-file-selector> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input.input__control')!;

      expect(input.multiple).to.be.true;
    });

    it('should set webkitdirectory on the native input when set', async () => {
      const el = await fixture<SdFileSelector>(html`
        <sd-file-selector label="Upload" webkitdirectory></sd-file-selector>
      `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input.input__control')!;

      expect(input.webkitdirectory).to.be.true;
    });

    it('should set accept on the native input', async () => {
      const el = await fixture<SdFileSelector>(html`
        <sd-file-selector label="Upload" accept=".png,.jpg"></sd-file-selector>
      `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input.input__control')!;

      expect(input.accept).to.equal('.png,.jpg');
    });
  });

  describe('focus and blur', () => {
    it('should focus the sd-button in the default variant', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);
      const button = el.shadowRoot!.querySelector('sd-button')!;

      el.focus();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(button);
    });

    it('should focus the drop area wrapper in the drop-area variant', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload" drop-area></sd-file-selector> `);
      const dropArea = el.shadowRoot!.querySelector('[part~="droparea"]')!;

      el.focus();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(dropArea);
    });

    it('should emit sd-focus when the control receives focus', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);
      const focusHandler = sinon.spy();

      el.addEventListener('sd-focus', focusHandler);
      el.focus();
      await waitUntil(() => focusHandler.calledOnce);

      expect(focusHandler).to.have.been.calledOnce;
    });

    it('should emit sd-blur when the control loses focus', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);
      const blurHandler = sinon.spy();

      el.addEventListener('sd-blur', blurHandler);
      el.focus();
      await el.updateComplete;
      el.blur();
      await waitUntil(() => blurHandler.calledOnce);

      expect(blurHandler).to.have.been.calledOnce;
    });
  });

  describe('click behavior', () => {
    it('should trigger the native input click when clicking the sd-button', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input.input__control')!;
      const clickSpy = sinon.spy(input, 'click');
      const button = el.shadowRoot!.querySelector<HTMLElement>('sd-button')!;

      button.click();

      expect(clickSpy).to.have.been.calledOnce;
    });

    it('should trigger the native input click when clicking the drop area', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload" drop-area></sd-file-selector> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input.input__control')!;
      const clickSpy = sinon.spy(input, 'click');
      const dropArea = el.shadowRoot!.querySelector<HTMLElement>('[part~="droparea"]')!;

      dropArea.click();

      expect(clickSpy).to.have.been.calledOnce;
    });

    it('should trigger the native input click on Enter in the drop area', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload" drop-area></sd-file-selector> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input.input__control')!;
      const clickSpy = sinon.spy(input, 'click');
      const dropArea = el.shadowRoot!.querySelector<HTMLElement>('[part~="droparea"]')!;

      dropArea.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }));

      expect(clickSpy).to.have.been.calledOnce;
    });

    it('should trigger the native input click on Space in the drop area', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload" drop-area></sd-file-selector> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input.input__control')!;
      const clickSpy = sinon.spy(input, 'click');
      const dropArea = el.shadowRoot!.querySelector<HTMLElement>('[part~="droparea"]')!;

      dropArea.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true }));

      expect(clickSpy).to.have.been.calledOnce;
    });

    it('should not trigger the native input click on other keys in the drop area', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload" drop-area></sd-file-selector> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input.input__control')!;
      const clickSpy = sinon.spy(input, 'click');
      const dropArea = el.shadowRoot!.querySelector<HTMLElement>('[part~="droparea"]')!;

      dropArea.dispatchEvent(new KeyboardEvent('keydown', { key: 'a', bubbles: true, cancelable: true }));

      expect(clickSpy).to.not.have.been.called;
    });
  });

  describe('change event handling', () => {
    it('should emit sd-input and sd-change when the native input changes', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('input.input__control')!;
      const inputHandler = sinon.spy();
      const changeHandler = sinon.spy();

      el.addEventListener('sd-input', inputHandler);
      el.addEventListener('sd-change', changeHandler);

      input.dispatchEvent(new Event('change', { bubbles: true }));

      expect(inputHandler).to.have.been.calledOnce;
      expect(changeHandler).to.have.been.calledOnce;
    });
  });

  describe('accessibility attributes', () => {
    it('should reference label, file-status, help-text and invalid-message on the sd-button (default variant)', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);
      const button = el.shadowRoot!.querySelector('sd-button')!;

      expect(button.getAttribute('aria-labelledby')).to.equal('form-control-label');
      expect(button.getAttribute('aria-describedby')).to.equal('file-status help-text invalid-message');
    });

    it('should reference label, file-status, help-text and invalid-message on the drop area', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload" drop-area></sd-file-selector> `);
      const dropArea = el.shadowRoot!.querySelector('[part~="droparea"]')!;

      expect(dropArea.getAttribute('aria-labelledby')).to.equal('form-control-label');
      expect(dropArea.getAttribute('aria-describedby')).to.equal('file-status help-text invalid-message');
      expect(dropArea.getAttribute('role')).to.equal('button');
    });

    it('should set aria-invalid on the sd-button when invalid', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);
      const button = el.shadowRoot!.querySelector('sd-button')!;

      expect(button.getAttribute('aria-invalid')).to.equal('false');

      el.setCustomValidity('Error');
      el.reportValidity();
      await el.updateComplete;
      await el.updateComplete;

      expect(button.getAttribute('aria-invalid')).to.equal('true');
    });

    it('should make the drop area non-tabbable when disabled', async () => {
      const el = await fixture<SdFileSelector>(html`
        <sd-file-selector label="Upload" drop-area disabled></sd-file-selector>
      `);
      const dropArea = el.shadowRoot!.querySelector('[part~="droparea"]')!;

      expect(dropArea.getAttribute('tabindex')).to.equal('-1');
    });
  });

  describe('constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-valid')).to.be.true;
      expect(el.hasAttribute('data-invalid')).to.be.false;
    });

    it('should be invalid when required and empty', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload" required></sd-file-selector> `);

      expect(el.checkValidity()).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.true;
    });

    it('should be invalid when setCustomValidity() is called with a non-empty value', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);

      el.setCustomValidity('Invalid selection');
      await el.updateComplete;

      expect(el.checkValidity()).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.true;
    });

    it('should show invalid-message when calling reportValidity() with a custom validity message', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);

      el.setCustomValidity('Invalid selection');
      await el.updateComplete;

      el.reportValidity();
      await el.updateComplete;
      await el.updateComplete;

      const message = el.shadowRoot!.querySelector('#invalid-message')!;
      expect(message.hasAttribute('hidden')).to.be.false;
      expect(message.textContent).to.contain('Invalid selection');
    });

    it('should hide invalid-message when the custom validity is cleared', async () => {
      const el = await fixture<SdFileSelector>(html` <sd-file-selector label="Upload"></sd-file-selector> `);

      el.setCustomValidity('Invalid selection');
      await el.updateComplete;

      el.reportValidity();
      await el.updateComplete;
      await el.updateComplete;

      expect(el.shadowRoot!.querySelector('#invalid-message')!.hasAttribute('hidden')).to.be.false;

      el.setCustomValidity('');
      await el.updateComplete;

      el.reportValidity();
      await el.updateComplete;
      await el.updateComplete;

      expect(el.shadowRoot!.querySelector('#invalid-message')!.hasAttribute('hidden')).to.be.true;
    });
  });

  describe('when submitting a form', () => {
    it('should serialize its name with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form><sd-file-selector name="upload" label="Upload"></sd-file-selector></form>
      `);
      const formData = new FormData(form);

      expect(formData.has('upload')).to.be.true;
    });
  });
});
