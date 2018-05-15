import React, { Component } from 'react';
import './App.css';

import Button from '../Button/index';
import { fetchVouchers } from '../../utils/fetchVouchers';


class App extends Component {
  render() {
    console.log(fetchVouchers(10))
    return (
      <div className='App'>
        <section className='Vouchers'>
          <div className='Voucher'>
            <div className='Voucher-logo'>
              <img src='https://fakeimg.pl/200x150/' alt='Description' />
            </div>
            <div className='Voucher-details'>
              <div className='Voucher-price'>Price: €100</div>
              <div className='Voucher-title'>Distributor</div>
              <div className='Voucher-desc'>Description</div>
              <button className='Voucher-button'>Buy</button>
            </div>
          </div>

          <div className='Voucher'>
            <div className='Voucher-logo'>
              <img src='https://fakeimg.pl/200x150/' alt='Description' />
            </div>
            <div className='Voucher-details'>
              <div className='Voucher-price'>Price: €100</div>
              <div className='Voucher-title'>Distributor</div>
              <div className='Voucher-desc'>Description</div>
              <button className='Voucher-button'>Buy</button>
            </div>
          </div>
          <div className='Voucher'>
            <div className='Voucher-logo'>
              <img src='https://fakeimg.pl/200x150/' alt='Description' />
            </div>
            <div className='Voucher-details'>
              <div className='Voucher-price'>Price: €100</div>
              <div className='Voucher-title'>Distributor</div>
              <div className='Voucher-desc'>Description</div>
              <button className='Voucher-button'>Buy</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default App;
