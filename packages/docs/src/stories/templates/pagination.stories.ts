import '../../../../components/src/solid-components';
import { html } from 'lit-html';

export default {
  tags: ['!dev', 'autodocs'],
  title: 'Templates/Pagination',
  parameters: {
    chromatic: { disableSnapshot: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/VTztxQ5pWG7ARg8hCX6PfR/branch/LiEAPa5PkSJyjkyAE9RNsi/Solid-DS-%E2%80%93-Component-Library?node-id=9401-33&p=f&t=A7lFFTs8C5yV9hmi-0'
    }
  }
};

export const Number = {
  render: () =>
    html`
      <nav id="pagination" class="sd-pagination" aria-label="Pagination">
        <ul>
          <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Go to previous page"></a></li>
          <li><a aria-current="page">1</a></li>
          <li><a href="/?page=2">2</a></li>
          <li><a href="/?page=3">3</a></li>
          <li><a href="/?page=4">4</a></li>
          <li><a href="/?page=5">5</a></li>
          <li><a href="/?page=6">6</a></li>
          <li><a href="/?page=7">7</a></li>
          <li><a href="/?page=8">8</a></li>
          <li><a href="/?page=9" >9</a></li>
          <li><a href="/?page=10">10</a></li>
          <li><a href="/?page=11">11</a></li>
          <li><a href="/?page=12">12</a></li>
          <li><a href="/?page=13">13</a></li>
          <li><a href="/?page=14">14</a></li>
          <li><a href="/?page=15">15</a></li>
          <li><a href="/?page=16">16</a></li>
          <li><a href="/?page=17">17</a></li>
          <li><a href="/?page=18">18</a></li>
          <li><a href="/?page=19">19</a></li>
          <li><a href="/?page=20">20</a></li>
          <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Go to next page"></a></li>
        </ul>
        <p id="pagination-live" aria-live="polite"></p>
      </nav>
      <script type="module">
        const pagination = document.querySelector('#pagination');
        const live = pagination.querySelector('#pagination-live');
        const state = { current: 1 };

        const pages = pagination.querySelectorAll('ul > li a:not(:has(sd-icon))');
        const previous = pagination.querySelector('ul > li:first-child a:has(sd-icon)');
        const next = pagination.querySelector('ul > li:last-child a:has(sd-icon)');

        const update = () => {
          const current = pages[state.current - 1];
          pages.forEach((page) => {
            page.removeAttribute('aria-current');
            page.setAttribute('href', '/?page=' + page.innerHTML);
          });

          current.setAttribute('aria-current', 'page');
          current.removeAttribute('href');
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

          const page = parseInt(event.target.innerHTML, 10);
          if (page === state.current) return;
          
          state.current = page;
          update();
        }

        const handlePrevious = (event) => {
          event.preventDefault();

          if (state.current <= 1) return;

          state.current--;
          update();

          /** 
           * NOTE: Due to a11y purposes, when the start or end is reached,
           * the focus must switch to the oposite button
           */
          if (state.current === 1) {
            next.focus();
          }
        }

        const handleNext = (event) => {
          event.preventDefault();

          if (state.current >= pages.length) return;

          state.current++;
          update();

          /**
           * NOTE: Due to a11y purposes, when the start or end is reached,
           * the focus must switch to the oposite button
           */
          if (state.current === pages.length) {
            previous.focus();
          }
        }

        pages.forEach((page) => page.addEventListener('click', handlePageClick));
        previous.addEventListener('click', handlePrevious);
        next.addEventListener('click', handleNext);

        update();
      </script>
    `
};

export const Simple = {
  render: () =>
    html`
      <nav id="simple-pagination" class="sd-pagination sd-pagination--simple" aria-label="Simple pagination">
        <ul>
          <li><a aria-hidden="true"><sd-icon name="system/chevron-left" label="Go to previous page"></a></li>
          <li>1</li>
          <li>20</li>
          <li><a href="/?page=2"><sd-icon name="system/chevron-right" label="Go to next page"></a></li>
        </ul>
        <p id="simple-pagination-live" aria-live="polite"></p>
      </nav>
      <script type="module">
        const pagination = document.querySelector('#simple-pagination');
        const live = pagination.querySelector('#simple-pagination-live');
        const state = { total: 20, current: 1 };

        const [current, total] = pagination.querySelectorAll('ul > li:not(:has(a))');
        const previous = pagination.querySelector('ul > li:first-child a:has(sd-icon)');
        const next = pagination.querySelector('ul > li:last-child a:has(sd-icon)');

        const update = () => {
          current.innerHTML = state.current;
          total.innerHTML = state.total;
          live.innerHTML = 'Current page: ' + state.current;

          const isFirstPage = state.current <= 1;
          const isLastPage = state.current >= state.total;

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

        const handlePrevious = (event) => {
          event.preventDefault();

          if (state.current <= 1) return;

          state.current--;
          update();
          
          /**
           * NOTE: Due to a11y purposes, when the start or end is reached,
           * the focus must switch to the oposite button
           */ 
          if (state.current === 1) {
            next.focus();
          }
        }

        const handleNext = (event) => {
          event.preventDefault();

          if (state.current >= state.total) return;

          state.current++;
          update();

          /**
           * NOTE: Due to a11y purposes, when the start or end is reached,
           * the focus must switch to the oposite button
           */
          if (state.current === state.total) {
            previous.focus();
          }
        }

        previous.addEventListener('click', handlePrevious);
        next.addEventListener('click', handleNext);

        update();
      </script>
    `
};
