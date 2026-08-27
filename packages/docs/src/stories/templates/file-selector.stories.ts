import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/File Selector',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YDktJcseQIIQbsuCpoKS4V/Solid-DS-%E2%80%93-Component-Docs?node-id=24005-43797&p=f&t=6o5TNSL9q7LrPsy2-0'
    }
  }
};

export const DefaultVariant = {
  name: 'File Selector with Default variant',
  render: () => html`
    <section>
      <form id="identity-form" class="flex flex-col gap-6">
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
          <sd-file-selector name="identityDocument" label="Upload document" show-label required></sd-file-selector>
        </div>
      </form>
    </section>
  `
};

export const DropAreaVariant = {
  name: 'File Selector with Drop Area variant',
  render: () => html`
    <section>
      <form id="droparea-documents-form" class="flex flex-col gap-6">
        <h3 class="sd-headline sd-headline--size-3xl">Tax Documents &amp; Depot Statements</h3>
        <p class="sd-paragraph">
          Please share your tax and depot records for the current year. Digital documents help us provide you with
          accurate tax reporting services.
        </p>
        <div class="flex flex-col">
          <span class="sd-meta sd-meta--size-sm sd-meta--light">Fields marked with * are required.</span>
          <sd-file-selector
            id="droparea-file-selector"
            name="droparea-file-selector"
            label="Upload documents"
            show-label
            drop-area
            multiple
            required
            accept=".pdf,.jpg,.jpeg,.png"
            help-text="Maximum file size 3 MB. Supported: PDF, JPG, PNG."
            class="mt-6"
          ></sd-file-selector>
          <ul id="droparea-file-list" class="file-list flex flex-col gap-2 mt-2" aria-live="polite"></ul>
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
        customElements.whenDefined('sd-icon'),
        customElements.whenDefined('sd-divider')
      ]);

      const MAX_FILE_SIZE = 3 * 1024 * 1024;
      const ALLOWED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png'];
      const fileSelector = document.getElementById('droparea-file-selector');
      const fileList = document.getElementById('droparea-file-list');
      let files = [];

      // preview-ignore:start
      const delay = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
      const simulateUpload = async (file, progressBar, fileName) => {
        for (let progress = 0; progress <= 100; progress += 1) {
          progressBar.value = progress;
          progressBar.label = 'Uploading ' + file.name + ': ' + progress + '%';

          await delay(50);
        }

        progressBar.label = file.name + ' uploaded successfully';
        await delay(300);

        progressBar.remove();
        fileName.classList.remove('shrink-0', 'text-neutral-700');
        fileName.classList.add('flex-1', 'text-black');
      };
      // preview-ignore:end

      fileSelector.addEventListener('sd-input', event => {
        fileList?.replaceChildren();

        files = Array.from(event.currentTarget.files ?? []);
        fileList?.classList.toggle('hidden', files.length === 0);

        files.forEach((file, index) => {
          const listItem = document.createElement('li');
          const listRow = document.createElement('div');
          const fileName = document.createElement('span');
          const removeButton = document.createElement('button');

          listItem.classList.add('flex', 'flex-col', 'text-sm', 'gap-2', 'text-left');
          listRow.classList.add('flex', 'items-center', 'gap-2', 'w-full');
          fileName.classList.add('shrink-0', 'truncate', 'text-neutral-700');
          fileName.textContent = file.name;

          removeButton.type = 'button';
          removeButton.classList.add('sd-interactive', 'sd-interactive--reset', 'shrink-0', 'flex', 'items-center');
          removeButton.title = 'Remove ' + file.name;

          const trashIcon = document.createElement('sd-icon');
          trashIcon.setAttribute('name', 'system/trash');
          trashIcon.setAttribute('color', 'currentColor');
          trashIcon.setAttribute('aria-hidden', 'true');
          trashIcon.classList.add('w-4', 'h-4');

          removeButton.append(trashIcon);
          listRow.append(fileName);

          /**
           * Client-side validation example.
           * Files must also be validated by the server.
           */
          const errors = [];

          if (!ALLOWED_FILE_TYPES.includes(file.type)) errors.push('Unsupported file type');
          if (file.size > MAX_FILE_SIZE) errors.push('The file is too large. Maximum allowed size is 3 MB.');

          if (errors.length === 0) {
            const progressBar = document.createElement('sd-progress-bar');

            progressBar.classList.add('flex-1');
            progressBar.max = 100;
            progressBar.value = 0;
            progressBar.label = 'Uploading ' + file.name + ': 0%';

            listRow.append(progressBar);

            /**
             * Connect the progress bar to your application's
             * upload progress here.
             */

            // preview-ignore:start
            simulateUpload(file, progressBar, fileName);
            // preview-ignore:end
          } else {
            fileName.classList.add('flex-1');
          }
          listRow.append(removeButton);
          listItem.append(listRow);

          errors.forEach(message => {
            const errorMessage = document.createElement('div');

            errorMessage.classList.add('flex', 'items-center', 'gap-2', 'text-error', 'text-left', 'text-sm');
            fileName.classList.remove('text-neutral-700');
            fileName.classList.add('text-black');
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

          removeButton.addEventListener('click', () => {
            const fileIndex = files.indexOf(file);
            const dataTransfer = new DataTransfer();

            files.forEach(remainingFile => {
              dataTransfer.items.add(remainingFile);
            });

            fileSelector.files = dataTransfer.files;
            listItem.remove();

            const lastListItem = fileList?.querySelector('li:last-child');
            const lastDivider = lastListItem?.querySelector(':scope > sd-divider');

            lastDivider?.remove();
            fileList?.classList.toggle('hidden', files.length === 0);
          });

          if (errors.length > 0) listItem.classList.add('invalid');

          if (index < files.length - 1) {
            const divider = document.createElement('sd-divider');
            divider.setAttribute('aria-hidden', 'true');
            listItem.append(divider);
          }

          fileList?.append(listItem);
        });
      });

      const form = document.getElementById('droparea-documents-form');
      form.onsubmit = event => {
        event.preventDefault();
        if (form.checkValidity()) {
          alert('Drop area form submitted');
        }
      };
    </script>
  `
};
