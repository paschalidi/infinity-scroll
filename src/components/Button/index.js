/**
 *
 * Button
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import PT from 'prop-types';


const Button = ({
                  children,
                  ...props
                }) =>
  <div className='inline'>
    <button
      onClick={() => props.onClick()}
      className={`${props.className && props.className} btn`}
      style={props.style}
      type="button"
    >
      {/* language=CSS */}
      <style>
        {`
            .btn {
                letter-spacing: 0.10em;
                outline: none;
                overflow: hidden;
                display: inline-block;
                width: 100%;
                font-size: 16px;
                padding: 8px 15px;
                margin: 0;
                border-width: 0;
                border-radius: 0;
                color: white;
                background-color: #199DAA;
                transition: background-color .2s;
                font-weight: 200;
                cursor: pointer;
            }

            .btn:hover,
            .btn:focus {
                color: #f2f2f2;
                background-color: #1AD6E8;
            }

            .btn.transparent {
                background-color: transparent;
                border: solid 1px #999;
                color: #313541;
            }

            .btn.transparent:hover,
            .btn.transparent:focus {
                background-color: #999;
                color: white;
            }
        `}
      </style>
      {children.toUpperCase()}
    </button>
  </div>;

Button.defaultProps = {
  children: 'button'
};

Button.propTypes = {
  children: PT.any
};

export default Button;
