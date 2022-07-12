import { FC, MouseEventHandler } from 'react';
import './CustomButton.scss';

type CustomButtonProps = {
  google?: string;
  inverted?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

// Modifies buttons based on class names
const CustomButton: FC<CustomButtonProps> = ({ children, ...otherProps }) => {
  return (
    <button
      className={`
        ${otherProps.google ? 'google-btn' : ''} 
        ${otherProps.inverted ? 'inverted' : ''}
        custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
