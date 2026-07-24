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

        .sd-theme-ui-dark svg [fill='#00358e'] {
          fill: rgba(var(--sd-color-icon-fill-primary));
        }

        .bottom-bar-navigation-icon-teasers sd-icon {
          color: rgba(var(--sd-headline--3xl-onwards-color-text, rgba(var(--sd-color-primary))));
        }

        .bottom-bar-navigation {
          background-color: rgba(var(--sd-header-color-background) / 0.8);
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
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-full" viewBox="0 0 123 20">
                    <g clip-path="url(#a)">
                      <path
                        fill="#00358e"
                        d="M8.7 15.6a1 1 0 0 1-.9-.8q0-.7.6-.8a6 6 0 0 0 2-1.7q0-.1-.2-.4l-.9.1-.3.2q-.7.4-1.6.6c-1.5.3-3.5 0-3.6 0-1.8-.3-2.6-2.4-2.7-2.6q-.3-.8.5-1t1.1.4c.2.4.7 1.4 1.4 1.5.5 0 2 .2 3 0q.5 0 1-.4l.4-.2c.7-.4 1.9-.5 2.7 0s1 1.6.9 2.2c0 .2-.2.9-1.6 2q-1.2.9-1.8 1"
                      />
                      <path
                        fill="#00358e"
                        d="m21 17-1-1.5q1.4-.8 1.8-1.3l.2-1V7.9q-.3 0-.7.5c-.8.7-.5 1.8-.5 1.8q0 .5-.2.8t-.6.3q-1.4 0-2.4 1.2c-.7.6-.6 1.8-.5 2.2q0 .4-.2.7t-.7.4H6.5V14h8.8q-.1-1.5 1-2.8T19 9.7q-.1-1.2 1-2.5a3 3 0 0 1 3.2-1q.5.3.6.9v6.1c0 .2-.1 1.3-.6 2-.3.5-1.6 1.4-2.1 1.7"
                      />
                      <path
                        fill="#00358e"
                        d="M18.7 11.4h-4q-1.1 0-2.5-.8c-1-.7-1.5-2.2-1.5-2.5q-.1-.9.7-1t1 .6c.1.5.4 1.3.8 1.5a3 3 0 0 0 1.6.5h4c1 0 .8.4.8.9q0 .7-.9.8"
                      />
                      <path
                        fill="#00358e"
                        d="M16.4 11.5q-.2-.2-.3-.5-.7-.4-.4-.9c.2-.2.7-1 .8-1.5.3-1 .3-1.2.1-1.6 0 0-.2-.6-.8-.5q-.4.1-.4.4v.4q.1.7-.2 1.4c-.3.6-1.1 1.4-1.4 1.7a1 1 0 0 1-1.2 0 1 1 0 0 1 0-1.2q.8-.8 1-1.3V6.7q.1-1.4 1.8-1.9c1.4-.3 2.5.6 2.9 1.6s.2 1.5 0 2.6c-.3 1-1.1 2-1.2 2.2q-.3.3-.7.3M1.5 2H0v1.8h1.5zM13.8 2h-1.6v1.8h1.6zM4.1 6q1 0 1-1t-1-1a1 1 0 0 0-1 1q0 1 1 1M9.7 6q1 0 1-1t-1-1a1 1 0 0 0-1 1q0 1 1 1"
                      />
                      <path
                        fill="#00358e"
                        d="M9 9.9q-1.2 0-2-.7a4 4 0 0 1-4 .3A5 5 0 0 1 .3 5.2C.3 2.3 3.3 0 6.9 0c3.7 0 6.6 2.3 6.6 5.2Q13.4 8 11 9.3q-1 .6-2 .5M7 7.2q.4 0 .7.3c.1.2 1 1.1 2.4.3a3 3 0 0 0 1.7-2.6c0-2-2.2-3.5-4.9-3.5S2 3.3 2 5.2A3 3 0 0 0 3.7 8c1.7.7 2.5-.3 2.6-.4q.2-.3.7-.3"
                      />
                      <path
                        fill="#00358e"
                        d="M14.7 20q-2.8.1-5.7-.5c-.1 0-8-2-8-9.8q0-1 .2-2l1.7.4-.1 1.6c0 6.5 6.5 8.1 6.6 8.2 2 .4 4.1.4 5.3.4 1 0 3.5 0 5.2-.4 1.1-.3 6.6-2 6.7-8.2q0-2-.8-3.3v.5c-.4 3.3-2.7 4-2.7 4l-.5-1.7s1.2-.4 1.4-2.4c.2-1.7-3-3.5-4.2-4a1 1 0 0 1-.5-1q.2-.7 1-.6s8 .9 8 8.5c0 7.4-6.6 9.5-8 9.8-1.6.4-3.9.5-5.6.5"
                      />
                      <path fill="#2d9d00" d="M7 7.2h-.2Q5.4 6.6 5.5 6c0-.1.1-1 1.5-1s1.4.9 1.4 1c0 .4-.1 1-1.2 1.1z" />
                      <path
                        fill="#00358e"
                        d="M37.6 16.2H35V3.6h2.6v5.5L40 6.4l2.5-2.8h3.3L40 9.5l6 6.7h-3.5l-2.9-3.4-2-2.7zM47.5 5.1V2.8H50v2.3zm0 1.8H50v9.3h-2.5zM61.6 13.4l.1 2.8h-2.3v-1.7a4 4 0 0 1-3.3 1.9c-2.5 0-4.1-2-4.1-4.9s1.6-4.8 4.2-4.8q2.1 0 3 1.6V2.6h2.4zm-7-1.9q0 2.8 2.2 3c1.4 0 2.4-1.3 2.4-3s-1-3-2.4-3c-1.5 0-2.3 1.3-2.3 3"
                      />
                      <path
                        fill="#2d9d00"
                        d="M71.3 5.9q-1.5-.6-2.6-.6-2.2 0-2.3 1.5c0 .7.4 1.2 2.4 1.9q3.5 1 3.4 3.8c0 2.4-1.9 3.9-4.9 3.9q-1.9 0-3.4-.6l.2-2.2q1.7.7 3 .7 2.3 0 2.4-1.5c0-1-.5-1.5-2.5-2.2q-3.4-1-3.3-3.6c0-2.2 1.9-3.6 4.7-3.6q1.6 0 3.1.4zM72.7 8.7V6.9h1.8v-2l2.4-.7v2.7h2.3v1.8h-2.3v3.6q-.1 2 1.5 2l1-.1V16q-.7.3-1.8.3-3.2.1-3.1-3.5V8.7zM81.4 7.4q1.6-.7 3.5-.7 4.3.2 4.1 3.8v2.7l.1 3H87v-1.6q-.9 1.6-3.3 1.7-3 0-3.2-2.8.1-3 5-3h1.3q0-2-2.3-2-1.5 0-2.9.8zm4.5 4.5q-3 0-3 1.4t1.4 1.3q2.3 0 2.4-2.7zM93.7 8.7q.7-2 2.8-2h.8V9l-1-.2q-2.4 0-2.4 3.7v3.8h-2.6V6.9h2.3zM98 8.7V6.9h1.9v-2l2.3-.7v2.7h2.3v1.8h-2.3v3.6q-.1 2 1.5 2l1-.1V16q-.7.3-1.7.3-3.2.1-3.2-3.5V8.7zM108 12.2c0 1.4 1.3 2.3 3 2.3q1.6 0 2.8-.7v2q-1.3.5-3 .6c-3.2 0-5.3-1.8-5.3-5 0-2.7 2-4.7 4.8-4.7q4.3 0 4.2 5v.5zm4.2-1.7q0-2.2-2-2.1-1.7 0-2.2 2.1zM118.8 8.7q.7-2 2.8-2h.8V9l-1-.2q-2.4 0-2.4 3.7v3.8h-2.6V6.9h2.3z"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="transparent" d="M0 0h122.5v20H0z" />
                      </clipPath>
                    </defs>
                  </svg>
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

              <section class="flex flex-col gap-2 bottom-bar-navigation-icon-teasers">
                <h2 class="sd-headline sd-headline--size-lg">Für dich empfohlen</h2>
                <div class="flex items-start gap-4">
                  <div class="flex min-w-0 flex-1 flex-col gap-4">
                    <a
                      href="javascript:void(0)"
                      class="sd-interactive flex flex-col gap-2 break-words border border-neutral-400 p-4"
                    >
                      <sd-icon
                        color="primary"
                        library="sd-multi-theming"
                        name="content/person-newspaper"
                        class="text-3xl"
                      ></sd-icon>
                      <h3 class="sd-paragraph font-bold text-sm">Sparen – Je früher, desto besser!</h3>
                      <p class="sd-paragraph text-sm">Warum Eltern jetzt an später denken sollten</p>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="sd-interactive flex flex-col gap-2 break-words border border-neutral-400 p-4"
                    >
                      <sd-icon library="sd-multi-theming" name="content/video" class="text-3xl"></sd-icon>
                      <h3 class="sd-paragraph font-bold text-sm">Förderkompass Familie</h3>
                      <p class="sd-paragraph text-sm">
                        Alle wichtigen Unterstützungen für Eltern &amp; Kinder auf einen Blick.
                      </p>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="sd-interactive flex flex-col gap-2 break-words border border-neutral-400 p-4"
                    >
                      <sd-icon library="sd-multi-theming" name="content/person-newspaper" class="text-3xl"></sd-icon>
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
                      <sd-icon library="sd-multi-theming" name="content/video" class="text-3xl"></sd-icon>
                      <h3 class="sd-paragraph font-bold text-sm">Kleine Beiträge, große Wirkung</h3>
                      <p class="sd-paragraph text-sm">Warum jeder Euro für dein Kind wichtig ist</p>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="sd-interactive flex flex-col gap-2 break-words border border-neutral-400 p-4"
                    >
                      <sd-icon
                        color="primary"
                        library="sd-multi-theming"
                        name="content/person-newspaper"
                        class="text-3xl"
                      ></sd-icon>
                      <h3 class="sd-paragraph font-bold text-sm">Baby on Board:</h3>
                      <p class="sd-paragraph text-sm">Dein Guide für Anmeldungen &amp; Anträge</p>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="sd-interactive flex flex-col gap-2 break-words border border-neutral-400 p-4"
                    >
                      <sd-icon library="sd-multi-theming" name="content/calculator" class="text-3xl"></sd-icon>
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

          <nav
            id="bottom-bar-navigation"
            aria-label="Main"
            class="bottom-bar-navigation absolute bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-lg rounded-full px-3"
          >
            <ul class="flex h-20 items-center justify-center">
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
