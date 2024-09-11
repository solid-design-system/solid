import '../solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Quickfact'
};

export const Default = {
  render: () => html`
    <style>
      sd-quickfact::part(header) {
        align-items: flex-start;
      }

      @media (min-width: 640px) {
        sd-quickfact::part(header) {
          align-items: center;
        }
      }
    </style>
    <sd-quickfact>
      <sd-icon name="content/handshake" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>
      <div slot="summary" class="space-y-4">
        <p class="text-base font-normal leading-normal sm:text-xl md:text-3xl sm:leading-tight">Partnership</p>
        <p class="text-base font-normal leading-normal sm:text-lg md:text-xl">
          Union Investment is part of the Volksbanken Raiffeisenbanken cooperative financial network. The cooperative
          model is based on a simple idea: when people join forces, they are much stronger together: "What one cannot do
          alone, many can".
        </p>
      </div>
    </sd-quickfact>
  `
};

/**
 * This sample shows how to group “sd-quickfacts”.<br /> Additional JavaScript is used to enable closing all other quickfacts when one is opened and to equalize the height of all summaries in a row. Open the "Show code" section to see the detailed implementation.
 */
export const Grouping = {
  render: () =>
    html`<div>
      <style>
        @media (min-width: 640px) {
          .grouping-sample {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            justify-items: center;
            align-content: space-around;
            align-items: center;
            width: 100%;
          }

          .grouping-sample sd-quickfact.fact::part(content) {
            position: absolute;
            width: 100%;
            left: 0;
          }
        }
      </style>
      <div class="grouping-sample relative">
        <sd-quickfact expandable class="first fact">
          <sd-icon name="content/image" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>

          <div class="slot slot--border slot--text h-12">Quickfact 1</div>

          <div slot="summary">
            <p class="text-base font-normal leading-normal sm:text-xl md:text-3xl sm:leading-tight">
              Lorem ipsum in medias
            </p>
            <div class="text-base font-normal leading-normal sm:text-lg md:text-xl">
              Con sectetur adipiscing elit magna cum laude perfides
            </div>
          </div>
        </sd-quickfact>

        <sd-quickfact expandable class="second fact">
          <sd-icon name="content/image" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>

          <div class="slot slot--border slot--text h-12">Quickfact 2</div>

          <div slot="summary">
            <p class="text-base font-normal leading-normal sm:text-xl md:text-3xl sm:leading-tight">
              Lorem ipsum in medias
            </p>
            <div class="text-base font-normal leading-normal sm:text-lg md:text-xl">
              Con sectetur adipiscing elit magna cum laude perfides
            </div>
          </div>
        </sd-quickfact>

        <sd-quickfact expandable class="third fact">
          <sd-icon name="content/image" color="primary" aria-hidden="true" library="default" slot="icon"></sd-icon>

          <div class="slot slot--border slot--text h-12">Quickfact 3</div>

          <div slot="summary">
            <p class="text-base font-normal leading-normal sm:text-xl md:text-3xl sm:leading-tight">
              Lorem ipsum in medias
            </p>
            <div class="text-base font-normal leading-normal sm:text-lg md:text-xl">
              Con sectetur adipiscing elit magna cum laude perfides
            </div>
          </div>
        </sd-quickfact>
      </div>
      <script type="module">
        // Wait for custom elements to be defined
        await Promise.all([customElements.whenDefined('sd-quickfact')]).then(() => {
          var quickfacts = document.querySelectorAll('sd-quickfact');
          let activeRow = null;

          // Closes all other quickfacts when one is opened
          quickfacts.forEach((quickfact, index) => {
            quickfact.addEventListener('sd-show', () => {
              quickfacts.forEach(qf => {
                if (qf !== quickfact) {
                  qf.hide();
                }
              });

              activeRow = getRow(quickfact);

              let height = getQuickfactContentHeight(quickfact);

              quickfacts.forEach(qf => {
                if (getRow(qf) === activeRow) {
                  qf.style.marginBottom = height + 'px';
                }
              });
            });

            quickfact.addEventListener('sd-hide', () => {
              quickfacts.forEach(qf => {
                if (getRow(qf) === getRow(quickfact) && getRow(qf) !== activeRow) {
                  qf.style.marginBottom = '0px';
                }
              });
            });
          });

          function getQuickfactContentHeight(quickfact) {
            let content = quickfact.shadowRoot.querySelector('[part~="content"]');

            // store original styles
            const originalStyles = {
              visibility: content.style.getPropertyValue('visibility'),
              display: content.style.getPropertyValue('display'),
              position: content.style.getPropertyValue('position'),
              height: content.style.getPropertyValue('height')
            };

            content.style.setProperty('visibility', 'hidden');
            content.style.setProperty('display', 'block');
            content.style.setProperty('position', 'absolute');
            content.style.setProperty('height', 'auto');

            let height = content.clientHeight;

            // restore original styles
            content.style.setProperty('visibility', originalStyles.visibility);
            content.style.setProperty('display', originalStyles.display);
            content.style.setProperty('position', originalStyles.position);
            content.style.setProperty('height', originalStyles.height);

            return height;
          }

          function getPositions() {
            let grid = document.querySelector('.grouping-sample');
            let gridComputedStyle = window.getComputedStyle(grid);

            let numberOfRows = gridComputedStyle.getPropertyValue('grid-template-rows').split(' ').length;

            let numberOfColumns = gridComputedStyle.getPropertyValue('grid-template-columns').split(' ').length;
            let positions = [];

            for (let row = 1; row <= numberOfRows; row++) {
              for (let col = 1; col <= numberOfColumns; col++) {
                positions.push({ row, column: col });
              }
            }

            return { numberOfRows, numberOfColumns, positions };
          }

          // Create a grid map with quickfact and position
          function createGridMap() {
            let gridMap = {};

            let { numberOfRows, numberOfColumns, positions } = getPositions();

            quickfacts.forEach((quickfact, index) => {
              gridMap[index] = { quickfact: quickfact, position: positions[index] };
            });

            return { gridMap, numberOfRows, numberOfColumns };
          }

          // Take a quickfact as input and return the row of the quickfact in the grid
          function getRow(quickfact) {
            let { gridMap, numberOfRows, numberOfColumns } = createGridMap();

            for (let [key, value] of Object.entries(gridMap)) {
              if (value?.quickfact === quickfact) {
                return value?.position?.row;
              }
            }
          }

          // Resets the height of all summaries to auto. This is useful when the window is resized to mobile view.
          function resetHeights() {
            quickfacts.forEach(quickfact => {
              quickfact.shadowRoot.querySelector('[part~="summary"]').style.setProperty('height', 'auto');
            });
          }

          function equalizeHeights() {
            if (window.innerWidth < 640) {
              resetHeights();
              return;
            }
            let { gridMap, numberOfRows, numberOfColumns } = createGridMap();

            // Equalize heights of summaries on the same row
            for (let x = 1; x <= numberOfRows; x++) {
              let summariesOnRow = [];

              for (let value of Object.values(gridMap)) {
                if (value?.position?.row === x) {
                  summariesOnRow.push(value.quickfact.shadowRoot.querySelector('[part~="summary"]'));
                }
              }

              // Reset height to auto to get the actual height of the element
              summariesOnRow.forEach(summary => {
                summary.style.setProperty('height', 'auto');
              });

              let maxHeight = Math.max(...Array.from(summariesOnRow).map(summary => summary.clientHeight));

              summariesOnRow.forEach((summary, index) => {
                summary.style.setProperty('height', maxHeight + 'px');
              });
            }
          }

          equalizeHeights();

          window.addEventListener('resize', equalizeHeights);
        });
      </script>
    </div>`
};
