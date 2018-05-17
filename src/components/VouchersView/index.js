import React, { Component } from 'react';
import './style.css';
import Voucher from '../Voucher';
import InfiniteScrolling from '../InfiniteScrolling';


class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { vouchers } = this.props;
    return (
      <div className='App'>
        <section className='ui centered grid stackable'>
          <div className="three column row">
            {
              vouchers.map((index, key) =>
                <div className='column'>
                  <Voucher
                    key={key}
                    price={index.price}
                    distribution={index.distribution}
                    description={index.description}
                    anchor={index.anchor}
                  />
                </div>
              )
            }
          </div>
        </section>
      </div>
    );
  }
}

export default InfiniteScrolling(Index);
