import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Navigation Item',
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};

export const BottomBarNavigation = {
  name: 'Bottom Bar Navigation',
  render: () => {
    return html`
      <!-- Storybook specific styles - DO NOT COPY -->
      <style>
        #anchor--templates-navigation-item--bottom-bar-navigation .innerZoomElementWrapper {
          min-height: 820px;
        }
      </style>

      <div class="mx-auto w-[390px]">
        <div class="relative h-[760px] overflow-hidden rounded-xl border border-neutral-400 bg-white">
          <div class="h-full overflow-y-auto">
            <div class="sticky top-0 z-10">
              <sd-header>
                <div class="relative flex min-h-10 items-center justify-center">
                  <sd-navigation-item href="javascript:void(0)" class="absolute left-0 top-1/2 -translate-y-1/2">
                    <sd-icon name="system/arrow-left" label="Go back" class="text-xl"></sd-icon>
                  </sd-navigation-item>
                  <img
                    class="h-5 w-auto object-contain [.sd-theme-ui-dark_&]:hidden"
                    src="images/logo-unikidstarter.svg"
                    alt="KidStarter"
                  />
                  <img
                    class="hidden h-5 w-auto object-contain [.sd-theme-ui-dark_&]:block"
                    src="images/logo-unikidstarter-dark.svg"
                    alt="KidStarter"
                  />
                </div>
              </sd-header>
            </div>

            <main class="flex flex-col gap-6 px-4 py-6">
              <div class="flex flex-col gap-4">
                <h1 class="sd-headline sd-headline--size-3xl">Willkommen</h1>
                <p class="sd-paragraph">
                  Hier findest du alles rund um Vorsorge, Sparen und Finanztipps für Familien – kompakt, verständlich
                  und unabhängig.
                </p>
              </div>

              <section class="flex flex-col gap-2">
                <h2 class="sd-headline sd-headline--size-lg">Dein nächster Schritte</h2>
                <sd-teaser variant="white border-neutral-400" breakpoint="9999" inset class="flex flex-col">
                  <div slot="media">
                    <img
                      class="aspect-video object-cover"
                      src="./placeholders/images/family-reading.jpg"
                      alt="A parent and child reading a book together on the couch."
                    />
                  </div>
                  <h3 slot="headline" class="sd-headline sd-headline--size-base">
                    Steuerliche und rechtliche Basics beim Sparen fürs Kind
                  </h3>
                  <p class="sd-paragraph mt-2">
                    Beim Sparen fürs Kind gibt es neben der Finanzplanung auch wichtige steuerliche und rechtliche
                    Punkte zu beachten.
                  </p>
                </sd-teaser>
              </section>

              <section class="flex flex-col gap-2">
                <h2 class="sd-headline sd-headline--size-lg">Für dich empfohlen</h2>
                <div class="grid grid-cols-2 gap-4">
                  <a
                    href="javascript:void(0)"
                    class="sd-interactive flex flex-col gap-2 break-words rounded border border-neutral-400 p-4"
                  >
                    <sd-icon name="content/piggy-bank" class="text-2xl text-primary"></sd-icon>
                    <p class="sd-paragraph font-bold">Je früher, desto besser!</p>
                    <p class="sd-paragraph">Warum Eltern jetzt an später denken sollten</p>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="sd-interactive flex flex-col gap-2 break-words rounded border border-neutral-400 p-4"
                  >
                    <sd-icon name="content/coins" class="text-2xl text-primary"></sd-icon>
                    <p class="sd-paragraph font-bold">Kleine Beträge, große Wirkung</p>
                    <p class="sd-paragraph">Warum jeder Euro für dein Kind wichtig ist</p>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="sd-interactive flex flex-col gap-2 break-words rounded border border-neutral-400 p-4"
                  >
                    <sd-icon name="content/files" class="text-2xl text-primary"></sd-icon>
                    <p class="sd-paragraph font-bold">Förderkompass Familie</p>
                    <p class="sd-paragraph">Alle wichtigen Unterstützungen für Eltern &amp; Kinder auf einen Blick.</p>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="sd-interactive flex flex-col gap-2 break-words rounded border border-neutral-400 p-4"
                  >
                    <sd-icon name="content/book" class="text-2xl text-primary"></sd-icon>
                    <p class="sd-paragraph font-bold">Baby on Board:</p>
                    <p class="sd-paragraph">Dein Guide für Anmeldungen &amp; Anträge</p>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="sd-interactive flex flex-col gap-2 break-words rounded border border-neutral-400 p-4"
                  >
                    <sd-icon name="content/letter" class="text-2xl text-primary"></sd-icon>
                    <p class="sd-paragraph font-bold">Kindergeld – Was Eltern wissen sollten</p>
                    <p class="sd-paragraph">
                      Kindergeld ist eine wichtige staatliche Unterstützung für Familien und hilft, die Kosten für
                      Kinder zu stemmen.
                    </p>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="sd-interactive flex flex-col gap-2 break-words rounded border border-neutral-400 p-4"
                  >
                    <sd-icon name="content/calculator" class="text-2xl text-primary"></sd-icon>
                    <p class="sd-paragraph font-bold">
                      Digitale Helfer für werdende Eltern: Diese Tools vom Familienportal lohnen sich
                    </p>
                    <p class="sd-paragraph">
                      Beim Familienportal des Bundes gibt es eine ganze Reihe praktischer Rechner und Tools, die
                      werdende Eltern bei Grundsatzentscheidungen unterstützen.
                    </p>
                  </a>
                </div>
              </section>

              <div aria-hidden="true" class="h-20"></div>
            </main>
          </div>

          <nav id="bottom-bar-navigation" aria-label="Main" class="absolute inset-x-4 bottom-4">
            <ul
              class="flex items-center justify-around rounded-full px-2 py-1 shadow backdrop-blur-lg bg-[rgb(var(--sd-header-color-background))]/80"
            >
              <li>
                <sd-navigation-item stacked current href="javascript:void(0)">
                  <sd-icon name="system/home"></sd-icon>
                  <span>Home</span>
                </sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item stacked href="javascript:void(0)">
                  <sd-icon name="system/file"></sd-icon>
                  <span>Inhalte</span>
                </sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item stacked href="javascript:void(0)">
                  <sd-icon name="system/user"></sd-icon>
                  <span>Profil</span>
                </sd-navigation-item>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <script type="module">
        await customElements.whenDefined('sd-navigation-item');

        const nav = document.getElementById('bottom-bar-navigation');
        const items = [...nav.querySelectorAll('sd-navigation-item')];

        items.forEach(item =>
          item.addEventListener('click', () => {
            items.forEach(other => other.removeAttribute('current'));
            item.setAttribute('current', '');
          })
        );
      </script>
    `;
  }
};
