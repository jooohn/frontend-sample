// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { TodoDetail } from './';

const withCompleted = completed => (
  <TodoDetail
    todo={{
      id: 1,
      title: 'Buy some chocolates for me',
      completed
    }}
    onComplete={linkTo('TodoDetail', 'Completed')}
    onUncomplete={linkTo('TodoDetail', 'Uncompleted')}
  />
);

storiesOf('TodoDetail', module)
  .add('Completed', () => withCompleted(true))
  .add('Uncompleted', () => withCompleted(false));
