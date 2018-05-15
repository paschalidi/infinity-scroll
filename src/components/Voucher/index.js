/**
 *
 * Voucher
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import './style.css';
import Button from '../Button';
import PT from 'prop-types';


class Voucher extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = { imgUrl: props.image };
  }

  handleImageOnError = () => this.setState({ imgUrl: 'http://via.placeholder.com/250x250' });

  render() {
    const {
            price,
            distribution,
            description,
            anchor
          } = this.props;
    const { imgUrl } = this.state;

    return (
      <div className='Voucher'>
        <div className='Voucher-logo'>
          <img src={imgUrl} alt={description} onError={() => this.props.handleImageOnError} />
        </div>
        <div className='Voucher-details'>
          <div className='Voucher-price'>Price: {price} €</div>
          <div className='Voucher-title'>{distribution}</div>
          <div className='Voucher-desc'>{description}</div>
          <Button onClick={() => console.log('You just bought a voucher!')}>
            {anchor}
          </Button>
        </div>
      </div>
    );
  }
}

Voucher.defaultProps = {
  image: 'https://fakeimg.pl/200x150/',
  price: 'Price: €100',
  distribution: 'Distributor',
  description: 'Description',
  anchor: 'Buy'
};

Voucher.propTypes = {
  image: PT.string.isRequired,
  price: PT.string.isRequired,
  distribution: PT.string.isRequired,
  description: PT.string.isRequired,
  anchor: PT.string.isRequired
};
export default Voucher;
