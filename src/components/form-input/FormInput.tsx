import { ChangeEventHandler } from 'react'
import './FormInput.sass'

type FormInputProps = {
  label: string
  name: string
  type: string
  value: string
  required: boolean
  handleChange: ChangeEventHandler<HTMLInputElement>
}

// Form input with animated floating labels
function FormInput({ handleChange, label, name, required, ...otherProps }: FormInputProps) {
  return (
    <div className="group">
      <input
        id={name}
        className="form-input"
        onChange={handleChange}
        required={required}
        aria-required={required}
        {...otherProps}
      />
      {label && (
        <label
          htmlFor={name}
          className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInput
