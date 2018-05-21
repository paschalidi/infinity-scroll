/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import Component from '../index';


test('InfiniteScrolling renders', () => {
  const component = renderer.create(<Component />);
  let tree;

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
