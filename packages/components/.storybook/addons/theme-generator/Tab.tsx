import React from 'react';
import { useParameter } from '@storybook/manager-api';
import { PARAM_KEY } from './constants';

interface TabProps {
  active: boolean;
}

export const Tab: React.FC<TabProps> = ({ active }) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useparameter
  const paramData = useParameter<string>(PARAM_KEY, '');

  return active ? (
    <div>
      Please check the{' '}
      <a href="https://github.com/orgs/solid-design-system/projects/1/views/31?pane=issue&itemId=41221625#:~:text=Please%20check%20the-,Know%20Browser%20Issues,-before%20you%20report">
        Known Browser Issues
      </a>{' '}
      before you report an issue on <a href="https://jira.apps.union-investment.de/browse/PSOLIDDS">Jira</a> or{' '}
      <a href="https://github.com/solid-design-system/solid/issues">GitHub</a>.
    </div>
  ) : null;
};
