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
        <a
          style={{
            color: '#00358e'
          }}
          href="https://solid-design-system.fe.union-investment.de/x.x.x/storybook/index.html?path=/docs/docs-general-known-browser-issues--docs"
        >
          Known Browser Issues
        </a>{' '}
        before you report an issue on{' '}
        <a
          style={{
            color: '#00358e'
          }}
          href="https://jira.apps.union-investment.de/browse/PSOLIDDS"
        >
          Jira
        </a>{' '}
        or{' '}
        <a
          style={{
            color: '#00358e'
          }}
          href="https://github.com/solid-design-system/solid/issues"
        >
          GitHub
        </a>
        .
      </span>
    </div>
  );
};
