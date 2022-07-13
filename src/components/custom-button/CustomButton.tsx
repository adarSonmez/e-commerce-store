import { MouseEventHandler } from 'react'
import './CustomButton.sass'

type CustomButtonProps = {
  google?: string
  inverted?: string
  disabled?: boolean
  onClick?: MouseEventHandler
  children: React.ReactNode
  style?: React.CSSProperties
}

// Modifies buttons based on class names
function CustomButton({ children, ...otherProps }: CustomButtonProps) {
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
  )
}

export default CustomButton
