import React from 'react';
import './CustomButton.scss';

function CustomButton({ children, ...otherProps }) {
  return (
    <button
      className={`${otherProps.google ? 'google-btn' : ''} ${
        otherProps.inverted ? 'inverted' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
