import { MouseEventHandler } from 'react'
import './CustomButton.sass'

type CustomButtonProps = {
  type?: "button" | "submit" | "reset"
  google?: boolean
  inverted?: boolean
  disabled?: boolean
  onClick?: MouseEventHandler
  children: React.ReactNode
  style?: React.CSSProperties
};

function CustomButton({ children, type = "button", ...otherProps }: CustomButtonProps) {
  return (
    <button
      type={type}
      className={`
        ${otherProps.google ? 'google-btn' : ''} 
        ${otherProps.inverted ? 'inverted' : ''} 
        custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}


export default CustomButton
