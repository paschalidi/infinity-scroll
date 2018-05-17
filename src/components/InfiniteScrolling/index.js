/**
 *
 * InfiniteScrolling
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React, { Fragment, Component } from 'react';
import './style.css';
import { fetchVouchers } from '../../utils/fetchVouchers';


export default function Hoc(ChildrenComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        vouchers: []
      };
    }

    componentDidMount() {
      this.handleFetchVoucher();
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
      if (document.body.scrollHeight - window.pageYOffset < 1000)
        this.handleFetchVoucher();
    };

    handleFetchVoucher = () => this.setState({
      vouchers: [...this.state.vouchers, ...fetchVouchers(20)]
    });

    render() {
      return (
        <ChildrenComponent vouchers={this.state.vouchers} />
      );
    }
  };
}
