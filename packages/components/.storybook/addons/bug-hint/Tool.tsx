import React from 'react';

export const Tool = () => {
  return (
    <div
      style={{
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        userSelect: 'none'
      }}
    >
      <span>
        Did you find a bug? Please check the{' '}
        <a href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/index.html?path=/docs/docs-general-known-browser-issues--docs">
          Known Browser Issues
        </a>{' '}
        before you report an issue on <a href="https://jira.apps.union-investment.de/browse/PSOLIDDS"> Jira </a> or{' '}
        <a href="https://github.com/solid-design-system/solid/issues"> GitHub</a>.
      </span>
    </div>
  );
};
