import { html } from 'lit-html';
import '../../../../components/src/solid-components';

export default {
  tags: ['!dev'],
  title: 'Templates/Navigation Item',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
};

/**
 * This option has clickable navigation items, with and without descriptions, and highlights the current page for easy navigation.
 */
export const SampleA01 = {
  name: 'Mega Menu Sample A-01',
  render: () => {
    return html`
      <style>
        #anchor--templates-navigation-item--sample-a-01 .innerZoomElementWrapper {
          height: 900px;
        }
      </style>

      <sd-header fixed style="--sd-header-padding: 24px 48px 0;">
        <a class="inline-flex mb-3 sd-interactive" href="#">
          <img class="h-8 md:h-12 lg:h-14" src="images/logo-unioninvestment-lg.svg" alt="Union Investment Homepage" />
        </a>

        <div class="relative flex justify-between">
          <div class="flex -ms-4">
            <sd-dropdown>
              <sd-navigation-item href="javascript:void(0)" class="font-bold" slot="trigger">
                Funds & Depot
              </sd-navigation-item>

              <div class="grid grid-cols-4 justify-between gap-6 px-6 py-8">
                <div>
                  <sd-navigation-item vertical current>
                    <span class="font-bold">Funds & Depot Overview</span>
                    <p slot="description">Everything you need to know about our funds and the UnionDepot</p>
                  </sd-navigation-item>
                </div>

                <div>
                  <sd-navigation-item vertical>
                    <span class="font-bold">Find Funds</span>
                    <p slot="description">Get to our funds quickly</p>
                  </sd-navigation-item>

                  <sd-navigation-item vertical> Top funds </sd-navigation-item>
                  <sd-navigation-item vertical> Fund prices </sd-navigation-item>
                </div>

                <div>
                  <sd-navigation-item vertical>
                    <span class="font-bold">Understanding Funds</span>
                    <p slot="description">Funds explained simply and understandably for you</p>
                  </sd-navigation-item>

                  <sd-navigation-item vertical> Sustainability-related disclosures </sd-navigation-item>
                  <sd-navigation-item vertical> Lexicon </sd-navigation-item>
                </div>

                <div>
                  <sd-navigation-item vertical>
                    <span class="font-bold">UnionDepot</span>
                    <p slot="description">Manage your funds flexibly with UnionDepot</p>
                  </sd-navigation-item>

                  <sd-navigation-item vertical> UnionDepot in Online Banking </sd-navigation-item>
                  <sd-navigation-item vertical> UnionDepotOnline </sd-navigation-item>
                </div>
              </div>
            </sd-dropdown>

            <sd-navigation-item href="javascript:void(0)" class="font-bold">About Us</sd-navigation-item>
            <sd-navigation-item href="javascript:void(0)" class="font-bold">Savings</sd-navigation-item>

            <sd-dropdown>
              <sd-navigation-item href="javascript:void(0)" class="font-bold" slot="trigger">
                Investing
              </sd-navigation-item>
              <div class="grid grid-cols-4 justify-between gap-6 px-6 py-8">
                <div>
                  <sd-navigation-item vertical>
                    <span class="font-bold">Investing at a glance</span>
                    <p slot="description">Investing money – with flexible solutions from Union Investment</p>
                  </sd-navigation-item>
                </div>

                <div>
                  <sd-navigation-item vertical>
                    <span class="font-bold text-black">Structuring your assets</span>
                    <p slot="description">Benefit from modern solutions for your assets</p>
                  </sd-navigation-item>

                  <sd-navigation-item vertical current> Private Funds </sd-navigation-item>
                  <sd-navigation-item vertical> UniDistribution Fund </sd-navigation-item>
                </div>

                <div>
                  <sd-navigation-item vertical>
                    <span class="font-bold text-black">Investing money according to ESG </span>
                    <p slot="description">Shaping the future responsibly with your investments</p>
                  </sd-navigation-item>

                  <sd-navigation-item vertical> Funds with a sustainability strategy </sd-navigation-item>
                </div>

                <div>
                  <sd-navigation-item vertical>
                    <span class="font-bold text-black">Calculators</span>
                    <p slot="description">Manage your funds flexibly with UnionDepot</p>
                  </sd-navigation-item>

                  <sd-navigation-item vertical> Investment planner </sd-navigation-item>
                  <sd-navigation-item vertical> Wealth planner </sd-navigation-item>
                </div>
              </div>
            </sd-dropdown>

            <sd-dropdown>
              <sd-navigation-item href="javascript:void(0)" class="font-bold" slot="trigger">
                Our Services
              </sd-navigation-item>
              <div class="grid grid-cols-4 justify-between gap-6 px-6 py-8">
                <div>
                  <sd-navigation-item vertical class="font-bold"> Investing at a glance </sd-navigation-item>
                  <sd-navigation-item vertical class="font-bold"> Contact </sd-navigation-item>
                </div>

                <div>
                  <sd-navigation-item vertical class="font-bold"> Current news </sd-navigation-item>
                  <sd-navigation-item vertical class="font-bold"> Forms and Downloads </sd-navigation-item>
                </div>

                <div>
                  <sd-navigation-item vertical class="font-bold"> Subscription </sd-navigation-item>
                  <sd-navigation-item vertical class="font-bold"> Media </sd-navigation-item>
                </div>

                <div>
                  <sd-navigation-item vertical class="font-bold"> Our calculators </sd-navigation-item>
                  <sd-navigation-item vertical class="font-bold"> Frequently Asked Questions </sd-navigation-item>
                </div>
              </div>
            </sd-dropdown>
          </div>
          <div class="flex">
            <sd-navigation-item href="javascript:void(0)">
              <sd-icon name="system/user" class="text-xl mr-2"></sd-icon>
              <span>Login</span>
            </sd-navigation-item>
            <sd-navigation-item href="javascript:void(0)">
              <sd-icon name="system/website" class="text-xl" label="Website"></sd-icon>
            </sd-navigation-item>
            <sd-navigation-item href="javascript:void(0)">
              <sd-icon name="system/magnifying-glass" class="text-xl" label="Search"></sd-icon>
            </sd-navigation-item>
          </div>
        </div>
      </sd-header>

      <style>
        sd-dropdown:has(sd-navigation-item[slot='trigger'])::part(base__popup) {
          left: 0;
          width: 100%;
        }
      </style>

      <script type="module">
        const dropdowns = document.querySelectorAll('sd-dropdown');
        const items = document.querySelectorAll('sd-dropdown > sd-navigation-item[slot="trigger"]');

        function handleDropdownShow(event, dropdown) {
          const item = dropdown.querySelector('sd-navigation-item[slot="trigger"]');
          item.setAttribute('current', true);
        }

        function handleDropdownHide(event, dropdown) {
          const item = dropdown.querySelector('sd-navigation-item[slot="trigger"]');
          item.removeAttribute('current');
        }

        function handleDropdownPointerOut(event, dropdown) {
          if (event.pointerType !== 'mouse' || dropdown.contains(event.relatedTarget)) return;
          dropdown.hide();
        }

        function handleItemPointerOver(event, item) {
          if (event.pointerType !== 'mouse') return;
          item.closest('sd-dropdown').show();
        }

        dropdowns.forEach(dropdown => {
          dropdown.addEventListener('sd-show', e => handleDropdownShow(e, dropdown));
          dropdown.addEventListener('sd-hide', e => handleDropdownHide(e, dropdown));
          dropdown.addEventListener('pointerout', e => handleDropdownPointerOut(e, dropdown));
        });

        items.forEach(item => {
          item.addEventListener('pointerover', e => handleItemPointerOver(e, item));
        });
      </script>
    `;
  }
};
