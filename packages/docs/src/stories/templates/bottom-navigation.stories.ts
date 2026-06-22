import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Bottom Bar Navigation',
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
        .mobile-scroll {
          scrollbar-width: none;
        }
        .mobile-scroll::-webkit-scrollbar {
          display: none;
        }

        .bottom-bar-navigation-teaser::part(content) {
          gap: 0.5rem;
        }

        .bottom-bar-navigation-teaser {
          --sd-text-lg: var(--sd-text-base);
          --text-lg--line-height: var(--text-base--line-height);
        }
      </style>

      <div class="mx-auto w-[380px]">
        <div class="relative h-[760px] overflow-hidden border border-neutral-400 bg-white">
          <div class="mobile-scroll h-full overflow-y-auto">
            <div class="sticky top-0 z-10">
              <sd-header>
                <div class="relative flex min-h-10 items-center justify-center">
                  <sd-navigation-item href="javascript:void(0)" class="absolute left-0 top-1/2 -translate-y-1/2">
                    <sd-icon
                      library="sd-multi-theming"
                      name="system/arrow-left"
                      label="Go back"
                      class="text-xl"
                    ></sd-icon>
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
                <h2 class="sd-headline sd-headline--size-lg">Dein nächster Schritt</h2>
                <sd-teaser class="bottom-bar-navigation-teaser" variant="white border-neutral-400">
                  <div slot="media">
                    <img
                      class="aspect-video object-cover"
                      src="./placeholders/images/family-play-02.jpg"
                      alt="A parent and child reading a book together on the couch."
                    />
                  </div>
                  <h3 slot="headline" class="sd-headline sd-headline--size-base">
                    Steuerliche und rechtliche Basics beim Sparen fürs Kind
                  </h3>
                  <p class="sd-paragraph">
                    Beim Sparen fürs Kind gibt es neben der Finanzplanung auch wichtige steuerliche und rechtliche
                    Punkte zu beachten.
                  </p>
                </sd-teaser>
              </section>

              <section class="flex flex-col gap-2">
                <h2 class="sd-headline sd-headline--size-lg">Für dich empfohlen</h2>
                <div class="flex items-start gap-4">
                  <div class="flex min-w-0 flex-1 flex-col gap-4">
                    <a
                      href="javascript:void(0)"
                      class="sd-interactive flex flex-col gap-2 break-words border border-neutral-400 p-4"
                    >
                      <sd-icon library="sd-multi-theming" name="content/person-newspaper" class="text-3xl"></sd-icon>
                      <h3 class="sd-paragraph font-bold text-sm">Sparen – Je früher, desto besser!</h3>
                      <p class="sd-paragraph text-sm">Warum Eltern jetzt an später denken sollten</p>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="sd-interactive flex flex-col gap-2 break-words border border-neutral-400 p-4"
                    >
                      <sd-icon library="sd-multi-theming" name="content/video" class="text-2xl"></sd-icon>
                      <h3 class="sd-paragraph font-bold text-sm">Förderkompass Familie</h3>
                      <p class="sd-paragraph text-sm">
                        Alle wichtigen Unterstützungen für Eltern &amp; Kinder auf einen Blick.
                      </p>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="sd-interactive flex flex-col gap-2 break-words border border-neutral-400 p-4"
                    >
                      <sd-icon library="sd-multi-theming" name="content/person-newspaper" class="text-xl"></sd-icon>
                      <h3 class="sd-paragraph font-bold text-sm">Kindergeld – Was Eltern wissen sollten</h3>
                      <p class="sd-paragraph text-sm">
                        Kindergeld ist eine wichtige staatliche Unterstützung für Familien und hilft, die Kosten für
                        Kinder zu stemmen.
                      </p>
                    </a>
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col gap-4">
                    <a
                      href="javascript:void(0)"
                      class="sd-interactive flex flex-col gap-2 break-words border border-neutral-400 p-4"
                    >
                      <sd-icon library="sd-multi-theming" name="content/video" class="text-2xl"></sd-icon>
                      <h3 class="sd-paragraph font-bold text-sm">Kleine Beiträge, große Wirkung</h3>
                      <p class="sd-paragraph text-sm">Warum jeder Euro für dein Kind wichtig ist</p>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="sd-interactive flex flex-col gap-2 break-words border border-neutral-400 p-4"
                    >
                      <sd-icon library="sd-multi-theming" name="content/person-newspaper" class="text-3xl"></sd-icon>
                      <h3 class="sd-paragraph font-bold text-sm">Baby on Board:</h3>
                      <p class="sd-paragraph text-sm">Dein Guide für Anmeldungen &amp; Anträge</p>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="sd-interactive flex flex-col gap-2 break-words border border-neutral-400 p-4"
                    >
                      <sd-icon library="sd-multi-theming" name="content/calculator" class="text-xl"></sd-icon>
                      <h3 class="sd-paragraph font-bold text-sm">
                        Digitale Helfer für werdende Eltern: Diese Tools vom Familienportal lohnen sich
                      </h3>
                      <p class="sd-paragraph text-sm">
                        Beim Familienportal des Bundes gibt es eine ganze Reihe praktischer Rechner und Tools, die
                        werdende Eltern bei wichtigen Grundsatzentscheidungen unterstützen.
                      </p>
                    </a>
                  </div>
                </div>
              </section>

              <div aria-hidden="true" class="h-24"></div>
            </main>
          </div>

          <nav id="bottom-bar-navigation" aria-label="Main" class="absolute bottom-4 left-1/2 -translate-x-1/2">
            <ul class="flex h-20 items-center justify-center rounded-full bg-white/80 backdrop-blur-lg px-3">
              <li>
                <sd-navigation-item stacked current href="javascript:void(0)">
                  <sd-icon library="sd-multi-theming" name="system/home"></sd-icon>
                  <span>Home</span>
                </sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item stacked href="javascript:void(0)">
                  <sd-icon library="sd-multi-theming" name="system/website"></sd-icon>
                  <span>Inhalte</span>
                </sd-navigation-item>
              </li>
              <li>
                <sd-navigation-item stacked href="javascript:void(0)">
                  <sd-icon library="sd-multi-theming" name="system/user"></sd-icon>
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
