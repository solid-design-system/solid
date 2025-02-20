import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev'],
  title: 'Templates/Pagination',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/branch/LiEAPa5PkSJyjkyAE9RNsi/Solid-DS-%E2%80%93-Component-Library?node-id=9401-33&p=f&t=A7lFFTs8C5yV9hmi-0'
    }
  }
};

export const Default = {
  render: () =>
    html`
      <nav id="pagination" class="sd-pagination" aria-label="Default pagination">
        <ul>
          <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Go to previous page"></a></li>
          <li><a href="/?page=1" data-page="1" aria-current="page" aria-label="Page 1">1</a></li>
          <li><a href="/?page=2" data-page="2" aria-label="Go to page 2">2</a></li>
          <li><a href="/?page=3" data-page="3" aria-label="Go to page 3">3</a></li>
          <li><a href="/?page=4" data-page="4" aria-label="Go to page 4">4</a></li>
          <li><a href="/?page=5" data-page="5" aria-label="Go to page 5">5</a></li>
          <li><a href="/?page=6" data-page="6" aria-label="Go to page 6">6</a></li>
          <li><a href="/?page=7" data-page="7" aria-label="Go to page 7">7</a></li>
          <li><a href="/?page=8" data-page="8" aria-label="Go to page 8">8</a></li>
          <li><a href="/?page=9" data-page="9" aria-label="Go to page 9">9</a></li>
          <li><a href="/?page=10" data-page="10" aria-label="Go to page 10">10</a></li>
          <li><a href="/?page=11" data-page="11" aria-label="Go to page 11">11</a></li>
          <li><a href="/?page=12" data-page="12" aria-label="Go to page 12">12</a></li>
          <li><a href="/?page=13" data-page="13" aria-label="Go to page 13">13</a></li>
          <li><a href="/?page=14" data-page="14" aria-label="Go to page 14">14</a></li>
          <li><a href="/?page=15" data-page="15" aria-label="Go to page 15">15</a></li>
          <li><a href="/?page=16" data-page="16" aria-label="Go to page 16">16</a></li>
          <li><a href="/?page=17" data-page="17" aria-label="Go to page 17">17</a></li>
          <li><a href="/?page=18" data-page="18" aria-label="Go to page 18">18</a></li>
          <li><a href="/?page=19" data-page="19" aria-label="Go to page 19">19</a></li>
          <li><a href="/?page=20" data-page="20" aria-label="Go to page 20">20</a></li>
          <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Go to next page"></a></li>
        </ul>
        <p id="pagination-live" aria-live="polite"></p>
      </nav>
      <script type="module">
        const pagination = document.querySelector('#pagination');
        const live = pagination.querySelector('#pagination-live');
        const state = { current: 1 };

        const pages = pagination.querySelectorAll('[data-page]');
        const previous = pagination.querySelector('ul > li:first-child a:has(sd-icon)');
        const next = pagination.querySelector('ul > li:last-child a:has(sd-icon)');

        const update = () => {
          const current = pages[state.current - 1];
          pages.forEach((page) => {
            page.removeAttribute('aria-current');
            page.setAttribute('aria-label', 'Go to page ' + page.dataset.page)
          });

          current.setAttribute('aria-current', 'page');
          current.setAttribute('aria-label', 'Page ' + pages[state.current - 1].dataset.page);
          live.innerHTML = 'Current page: ' + state.current;

          const isFirstPage = state.current <= 1;
          const isLastPage = state.current >= pages.length;

          previous.href = '/?page=' + (state.current - 1);
          previous.removeAttribute('aria-hidden');

          if (isFirstPage) {
            previous.removeAttribute('href');
            previous.setAttribute('aria-hidden', 'true');
          }

          next.href = '/?page=' + (state.current + 1);
          next.removeAttribute('aria-hidden');
        
          if (isLastPage) {
            next.removeAttribute('href');
            next.setAttribute('aria-hidden', 'true');
          }
        }

        const handlePageClick = (event) => {
          event.preventDefault();

          const page = parseInt(event.target.dataset.page, 10);
          if (page === state.current) return;
          
          state.current = page;
          update();
        }

        const handlePrevious = (event) => {
          event.preventDefault();

          if (state.current <= 1) return;

          state.current--;
          update();
        }

        const handleNext = (event) => {
          event.preventDefault();

          if (state.current >= pages.length) return;

          state.current++;
          update();
        }

        pages.forEach((page) => page.addEventListener('click', handlePageClick));
        previous.addEventListener('click', handlePrevious);
        next.addEventListener('click', handleNext);

        update();
      </script>
    `
};
