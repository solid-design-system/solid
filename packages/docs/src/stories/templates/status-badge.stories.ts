import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Status Badge',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/Solid-DS-%E2%80%93-Component-Library?node-id=18391-37775&t=LaSTkqB8MKXGCZbc-0'
    }
  }
};

/**
 *
 * The icons used in this component, should be exclusively from the `sd-status-assets` [icon library](?path=/story/components-sd-icon-default--status-library).
 */
export const StatusBadgeWithCustomIcon = {
  name: 'Status Badge with Custom Icon',
  render: () => html`
    <div class="grid col-span-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
      <div class="sd-status-badge sd-status-badge--success">
        <sd-icon name="status-check" library="sd-status-assets"></sd-icon>
        Available
      </div>
      <div class="sd-status-badge sd-status-badge--success">
        <sd-icon name="status-check" library="sd-status-assets"></sd-icon>
        Identified
      </div>
      <div class="sd-status-badge sd-status-badge--success">
        <sd-icon name="status-check" library="sd-status-assets"></sd-icon>
        Active
      </div>
      <div class="sd-status-badge sd-status-badge--success">
        <sd-icon name="status-check" library="sd-status-assets"></sd-icon>
        Approved
      </div>

      <div class="sd-status-badge sd-status-badge--warning">
        <sd-icon name="status-exclamation" library="sd-status-assets"></sd-icon>
        Issue
      </div>
      <div class="sd-status-badge sd-status-badge--warning">
        <sd-icon name="status-exclamation" library="sd-status-assets"></sd-icon>
        Degraded
      </div>
      <div class="sd-status-badge sd-status-badge--warning">
        <sd-icon name="status-clock" library="sd-status-assets"></sd-icon>
        Back soon
      </div>
      <div class="sd-status-badge sd-status-badge--warning">
        <sd-icon name="status-clock" library="sd-status-assets"></sd-icon>
        Maintenance
      </div>

      <div class="sd-status-badge sd-status-badge--error">
        <sd-icon name="status-exclamation" library="sd-status-assets"></sd-icon>
        Attention
      </div>
      <div class="sd-status-badge sd-status-badge--error">
        <sd-icon name="status-close" library="sd-status-assets"></sd-icon>
        Canceled
      </div>
      <div class="sd-status-badge sd-status-badge--error">
        <sd-icon name="status-close" library="sd-status-assets"></sd-icon>
        Unavailable
      </div>
      <div class="sd-status-badge sd-status-badge--error">
        <sd-icon name="status-minus" library="sd-status-assets"></sd-icon>
        Don't disturb
      </div>

      <div class="sd-status-badge sd-status-badge--info">
        <sd-icon name="status-info" library="sd-status-assets"></sd-icon>
        Status Info
      </div>
      <div class="sd-status-badge sd-status-badge--info">
        <sd-icon name="status-questionmark" library="sd-status-assets"></sd-icon>
        Investigating
      </div>
      <div class="sd-status-badge sd-status-badge--info">
        <sd-icon name="status-questionmark" library="sd-status-assets"></sd-icon>
        Unknown
      </div>
    </div>
  `
};

export const StatusBadgeWithChip = {
  name: 'Status Badge with Chip',
  render: () => html`
    <style>
      .data-wrapper {
        container-type: inline-size;
      }

      .info-wrapper {
        gap: 0.25rem;
      }

      .info-wrapper,
      .inner-wrapper {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }

      @container (min-width: 700px) {
        .info-wrapper {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .inner-wrapper {
          grid-template-columns: auto 1fr;
        }
      }
    </style>

    <div class="flex flex-col gap-8 contacts">
      <div>
        <div class="flex justify-between">
          <div>
            <div class="flex flex-col lg:flex-row">
              <h2 class="sd-headline">Max Mustermann</h2>
              <div class="sd-status-badge sd-status-badge--success my-4 lg:ml-4">
                <sd-icon name="status-check" library="sd-status-assets"></sd-icon>
                Available
              </div>
            </div>
            <span class="sd-chip sd-chip--primary-200">Authorized for telephone information</span>
          </div>

          <sd-button class="edit-button" variant="secondary">
            Edit
            <sd-icon name="system/pen" slot="icon-left"></sd-icon>
          </sd-button>
        </div>

        <div class="sd-container sd-container--variant-neutral-100 mt-8 data-wrapper">
          <p class="sd-headline sd-headline--size-xl">Master data</p>

          <div class="grid mt-4 info-wrapper">
            <div class="grid gap-x-4 gap-y-1 inner-wrapper">
              <div class="sd-paragraph">Intermediary</div>
              <div class="sd-paragraph font-bold">VR-Bank Musterstadt eG</div>

              <div class="sd-paragraph">Geno ID</div>
              <div class="sd-paragraph font-bold">YC12345</div>

              <div class="sd-paragraph">Branch number</div>
              <div class="sd-paragraph font-bold flex items-center">1234 – GST Musterstadt</div>

              <div class="sd-paragraph">Consultant number</div>
              <div class="sd-paragraph font-bold inline-flex items-center">1234 4678 A – Service-Kunden</div>
            </div>

            <div class="grid gap-x-4 gap-y-1 self-start inner-wrapper">
              <div class="sd-paragraph">E-Mail</div>
              <div class="sd-paragraph font-bold">max.mustermann@union-investment.de</div>

              <div class="sd-paragraph">Telephone</div>
              <div class="sd-paragraph font-bold">+49 (0) 00 123 456 78</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="flex justify-between">
          <div>
            <div class="flex flex-col lg:flex-row">
              <h2 class="sd-headline">Jane Doe</h2>
              <div class="sd-status-badge sd-status-badge--warning my-4 lg:ml-4">
                <sd-icon name="status-exclamation" library="sd-status-assets"></sd-icon>
                Be right back
              </div>
            </div>
            <span class="sd-chip sd-chip--primary-200">Not authorized for telephone information</span>
          </div>

          <sd-button class="edit-button" variant="secondary">
            Edit
            <sd-icon name="system/pen" slot="icon-left"></sd-icon>
          </sd-button>
        </div>

        <div class="sd-container sd-container--variant-neutral-100 mt-8 data-wrapper">
          <p class="sd-headline sd-headline--size-xl">Master data</p>

          <div class="grid mt-4 info-wrapper">
            <div class="grid gap-x-4 gap-y-1 inner-wrapper">
              <div class="sd-paragraph">Intermediary</div>
              <div class="sd-paragraph font-bold">VR-Bank Gotham City eG</div>

              <div class="sd-paragraph">Geno ID</div>
              <div class="sd-paragraph font-bold">YC67891</div>

              <div class="sd-paragraph">Branch number</div>
              <div class="sd-paragraph font-bold flex items-center">5678 – GST Gotham City</div>

              <div class="sd-paragraph">Consultant number</div>
              <div class="sd-paragraph font-bold inline-flex items-center">1234 4678 B – Service-Kunden</div>
            </div>

            <div class="grid gap-x-4 gap-y-1 self-start inner-wrapper">
              <div class="sd-paragraph">E-Mail</div>
              <div class="sd-paragraph font-bold">jane.doe@union-investment.de</div>

              <div class="sd-paragraph">Telephone</div>
              <div class="sd-paragraph font-bold">+49 (0) 00 987 565 32</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script type="module">
      const editButtons = document.querySelectorAll('.contacts .edit-button');

      const debounce = (func, timeout = 10) => {
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => {
            func.apply(this, args);
          }, timeout);
        };
      };

      editButtons.forEach(button => {
        button.addEventListener('click', () => {
          alert('Edit button clicked!');
        });
      });

      const updateButtonSizes = size => {
        editButtons.forEach(button => {
          button.setAttribute('size', size);
        });
      };

      const handleResize = debounce(() => {
        const size = window.innerWidth < 640 ? 'sm' : 'lg';
        updateButtonSizes(size);
      }, 250);

      window.addEventListener('resize', handleResize);
    </script>
  `
};
