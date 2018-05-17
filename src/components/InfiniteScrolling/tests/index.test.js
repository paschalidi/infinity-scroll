import React from 'react';
import ReactDOM from 'react-dom';
import InfiniteScrolling from 'index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render('<InfiniteScrolling />', div);
  ReactDOM.unmountComponentAtNode(div);
});
