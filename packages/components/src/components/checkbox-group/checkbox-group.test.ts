import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';

describe('when submitting a form', () => {
  it('should submit the correct value when a value is provided', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <sd-checkbox-group>
          <sd-checkbox id="checkbox-1" name="a" value="1"></sd-checkbox>
          <sd-checkbox id="checkbox-2" name="a" value="2"></sd-checkbox>
          <sd-checkbox id="checkbox-3" name="a" value="3"></sd-checkbox>
        </sd-checkbox-group>
        <sd-button type="submit">Submit</sd-button>
      </form>
    `);
    const button = form.querySelector('sd-button')!;
    const checkbox = form.querySelectorAll('sd-checkbox')[1];
    const checkbox2 = form.querySelectorAll('sd-checkbox')[2];
    const submitHandler = sinon.spy((event: SubmitEvent) => {
      formData = new FormData(form);

      event.preventDefault();
    });
    let formData: FormData;

    form.addEventListener('submit', submitHandler);
    checkbox2.click();
    checkbox.click();
    button.click();
    await waitUntil(() => submitHandler.calledOnce);
    expect(formData!.getAll('a')).to.eql(['2', '3']);
  });

  it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
    const el = await fixture<HTMLFormElement>(html`
      <div>
        <form id="f">
          <sd-button type="submit">Submit</sd-button>
        </form>
        <sd-checkbox-group>
          <sd-checkbox id="checkbox-1" name="a" value="1" checked form="f"></sd-checkbox>
          <sd-checkbox id="checkbox-2" name="a" value="2" form="f"></sd-checkbox>
          <sd-checkbox id="checkbox-3" name="a" value="3" checked form="f"></sd-checkbox>
        </sd-checkbox-group>
      </div>
    `);
    const form = el.querySelector('form')!;
    const formData = new FormData(form);

    expect(formData.getAll('a')).to.eql(['1', '3']);
  });
});
