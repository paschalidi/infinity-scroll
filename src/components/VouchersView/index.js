import React, { Component } from 'react';
import './style.css';

import Button from '../Button';
import { fetchVouchers } from '../../utils/fetchVouchers';
import Voucher from '../Voucher';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vouchers: []
    };
  }

  handleFetchVoucher = () => this.setState({
    vouchers: [...this.state.vouchers, ...fetchVouchers(10)]
  });

  render() {
    const { vouchers } = this.state;
    return (
      <div className='App'>
        <Button onClick={() => this.handleFetchVoucher()}></Button>
        <section className='Vouchers'>
          {
            vouchers.map(index =>
              <Voucher
                price={index.price}
                distribution={index.distribution}
                description={index.description}
                anchor={index.anchor}
              />)
          }
        </section>
      </div>
    );
  }
}

export default Index;
