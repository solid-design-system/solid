import fs from 'fs';
import path from 'path';
import packageJson from '../package.json' assert { type: 'json' };

const distDir = 'dist/storybook';

const html = String.raw;

const redirectContent = html`
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Notification Redirect</title>
      <link
        rel="stylesheet"
        href="https://solid-design-system.fe.union-investment.de/${packageJson.version}/styles/solid-styles.css"
      />
      <script
        src="https://solid-design-system.fe.union-investment.de/${packageJson.version}/components/umd/solid-components.js"
        type="module"
      ></script>
      <style>
        body {
          font-family:
            'Frutiger Neue',
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            'Helvetica Neue',
            Arial,
            'Noto Sans',
            sans-serif,
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            'Noto Color Emoji';
        }

        @font-face {
          font-family: 'Frutiger Neue';
          font-style: normal;
          font-weight: 400;
          src: url('https: //global-resources.fe.union-investment.de/latest/fonts/frutiger-neue/FrutigerNeuefuerUIWebW05-Bk.woff2')
            format('woff2');
        }

        @font-face {
          font-family: 'Frutiger Neue';
          font-style: italic;
          font-weight: 400;
          src: url('https: //global-resources.fe.union-investment.de/latest/fonts/frutiger-neue/FrutigerNeuefuerUIWebW05-BkIt.woff2')
            format('woff2');
        }

        @font-face {
          font-family: 'Frutiger Neue';
          font-style: normal;
          font-weight: 600;
          src: url('https: //global-resources.fe.union-investment.de/latest/fonts/frutiger-neue/FrutigerNeuefuerUIWebW05-Bd.woff2')
            format('woff2');
        }

        @font-face {
          font-family: 'Frutiger Neue';
          font-style: italic;
          font-weight: 600;
          src: url('https: //global-resources.fe.union-investment.de/latest/fonts/frutiger-neue/FrutigerNeuefuerUIWebW05-BdIt.woff2')
            format('woff2');
        }

        :root {
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-text-size-adjust: 100%;
          line-height: 1.5;
          font-size: 16px;
        }

        body,
        html {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
      </style>
    </head>
    <body>
      <sd-notification variant="warning" open="">
        This page has moved. Please update your bookmarks to the new documentation URL: <br />
        <a class="sd-link" href="https://solid-design-system.fe.union-investment.de/docs/"
          >https://solid-design-system.fe.union-investment.de/docs/</a
        >. <br />You will be redirected automatically in <span id="countdown">5</span> seconds.
      </sd-notification>

      <script>
        const countdownElement = document.getElementById('countdown');
        let countdown = 5;

        const countdownInterval = setInterval(() => {
          countdown--;
          countdownElement.textContent = countdown;
          if (countdown <= 0) {
            clearInterval(countdownInterval);
            window.location.href = 'https://solid-design-system.fe.union-investment.de/docs/';
          }
        }, 1000);
      </script>
    </body>
  </html>
`;

const redirectPath = path.join(distDir, 'index.html');
fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(redirectPath, redirectContent);
console.log(`✅ Created redirect file at ${redirectPath}`);
