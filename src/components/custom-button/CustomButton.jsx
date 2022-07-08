import React from 'react';
import './CustomButton.scss';

// Modifies buttons based on class names
function CustomButton({ children, ...otherProps }) {
  return (
    <button
      className={`
        ${otherProps.google ? 'google-btn' : ''} 
        ${otherProps.inverted ? 'inverted' : ''}
        custom-button`}
      {...otherProps}
      disabled={otherProps.isLoading}
    >
      {children}
    </button>
  );
}

export default CustomButton;
