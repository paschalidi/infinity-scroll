/**
 *
 * InfiniteScrolling
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/app-store/actions';
import './style.css';


const Hoc = (ChildrenComponent) => {
  class HocProvider extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        vouchers: []
      };
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
      if (document.body.scrollHeight - window.pageYOffset < 1000)
        this.props.fetchVouchers(20);
    };

    render() {
      return (
        <ChildrenComponent />
      );
    }
  }

  return connect(null, actions)(HocProvider);
};

export default Hoc;
