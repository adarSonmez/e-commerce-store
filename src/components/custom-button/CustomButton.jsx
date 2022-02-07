import React from 'react';
import './CustomButton.scss';

function CustomButton({ children, ...otherProps }) {
  return (
    // Modify buttons based on class names
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
