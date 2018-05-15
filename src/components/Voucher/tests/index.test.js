import React from 'react';
import ReactDOM from 'react-dom';
import Voucher from 'index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render('<Voucher />', div);
  ReactDOM.unmountComponentAtNode(div);
});
