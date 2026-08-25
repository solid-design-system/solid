import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/File Selector',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const DefaultVariant = {
  name: 'File Selector with Default variant',
  render: () => html`
    <section>
      <form id="identity-form" class="flex flex-col gap-10">
        <div class="flex flex-col gap-2">
          <h3 class="sd-headline sd-headline--size-4xl">Confirm your identity</h3>
          <p class="sd-paragraph">
            To safeguard your account, we need to verify who you are. Choose a document type below and upload a clear
            scan.
          </p>
        </div>
        <div class="flex flex-col gap-6">
          <span class="sd-meta sd-meta--size-sm sd-meta--light">Fields marked with * are required.</span>
          <sd-select name="documentType" label="Document type" placeholder="Please select" required>
            <sd-option value="passport">Passport</sd-option>
            <sd-option value="id-card">ID card</sd-option>
          </sd-select>
          <sd-file-selector
            name="identityDocument"
            label="Upload document"
            show-label
            required
            accept=".pdf,.jpg,.jpeg,.png"
          ></sd-file-selector>
        </div>
      </form>
    </section>
    <script type="module">
      await Promise.all([customElements.whenDefined('sd-file-selector'), customElements.whenDefined('sd-select')]).then(
        () => {
          const form = document.getElementById('identity-form');
          form.onsubmit = event => {
            event.preventDefault();
            if (form.checkValidity()) {
              alert('Identity form submitted');
            }
          };
        }
      );
    </script>
  `
};

export const DropAreaVariant = {
  name: 'File Selector with Drop Area variant',
  render: () => html`
    <section>
      <form id="droparea-documents-form" class="flex flex-col gap-10">
        <h3 class="sd-headline sd-headline--size-3xl">Tax Documents &amp; Depot Statements</h3>
        <p class="sd-paragraph">
          Please share your tax and depot records for the current year. Digital documents help us provide you with
          accurate tax reporting services.
        </p>
        <div class="flex flex-col gap-6">
          <span class="sd-meta sd-meta--size-sm sd-meta--light">Fields marked with * are required.</span>
          <sd-file-selector
            id="droparea-file-selector"
            name="droparea-file-selector"
            label="Document upload"
            show-label
            drop-area
            multiple
            required
            hide-value
            accept=".pdf,.jpg,.jpeg,.png"
            help-text="Maximum file size 3 MB. Supported: PDF, JPG, PNG."
          ></sd-file-selector>
          <ul id="droparea-file-list" class="file-list flex flex-col gap-2" aria-live="polite"></ul>
        </div>
        <div class="flex flex-col gap-4 md:flex-row md:justify-end">
          <sd-button variant="secondary" onclick="alert('Cancelled process')">Cancel</sd-button>
          <sd-button type="submit">Submit documents</sd-button>
        </div>
      </form>
    </section>
    <script type="module">
      await Promise.all([
        customElements.whenDefined('sd-file-selector'),
        customElements.whenDefined('sd-progress-bar'),
        customElements.whenDefined('sd-button'),
        customElements.whenDefined('sd-icon')
      ]).then(() => {
        const MAX_FILE_SIZE = 3 * 1024 * 1024;
        const ALLOWED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png'];

        const form = document.getElementById('droparea-documents-form');
        const fileSelector = document.getElementById('droparea-file-selector');
        const fileList = document.getElementById('droparea-file-list');
        let files = [];

        fileSelector.addEventListener('sd-input', event => {
          fileList?.replaceChildren();

          files = Array.from(event.currentTarget.files ?? []);

          files.length === 0 ? fileList.classList.add('hidden') : fileList.classList.remove('hidden');
          files.forEach((file, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('flex', 'flex-col', 'text-sm', 'gap-2', 'text-left', 'text-black');
            listItem.textContent = file.name;

            const errors = [];

            ALLOWED_FILE_TYPES.includes(file.type) || errors.push('Unsupported file type');
            file.size <= MAX_FILE_SIZE || errors.push('The file is too large. Maximum allowed size is 3 MB.');

            errors.forEach(message => {
              const errorMessage = document.createElement('div');
              errorMessage.classList.add('flex', 'items-center', 'gap-2', 'mt-2', 'text-error', 'text-left', 'text-sm');
              errorMessage.setAttribute('role', 'alert');

              const errorIcon = document.createElement('sd-icon');
              errorIcon.setAttribute('library', '_internal');
              errorIcon.setAttribute('name', 'risk');
              errorIcon.setAttribute('color', 'currentColor');
              errorIcon.setAttribute('aria-hidden', 'true');

              const errorText = document.createElement('span');
              errorText.textContent = message;

              errorMessage.append(errorIcon, errorText);
              listItem.append(errorMessage);
            });

            if (errors.length > 0) {
              listItem.classList.add('invalid');
            }

            if (index < files.length - 1) {
              const divider = document.createElement('sd-divider');
              listItem.append(divider);
            }

            fileList?.append(listItem);
          });
        });
      });
    </script>
  `
};
