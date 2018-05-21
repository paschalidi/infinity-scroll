/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Component from '../index';
import Store from '../../../store/configure';

const StoreInstance = Store();

test('VouchersView renders', () => {
  const component = renderer.create(
    <Provider store={StoreInstance}>
      <Component />
    </Provider>
  );
  let tree;
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
