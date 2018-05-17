import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import * as actions from '../../store/app-store/actions';

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
                <div key={key} className='column'>
                  <Voucher
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

function mapStateToProps(state) {
  return { ...state.reducer };
}

export default InfiniteScrolling(connect(mapStateToProps, actions)(Index));
