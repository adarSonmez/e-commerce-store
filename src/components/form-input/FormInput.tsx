import { ChangeEventHandler } from 'react'
import './FormInput.sass'

type FormInputProps = {
  label: string
  name: string
  type: string
  value: string
  required: boolean
  handleChange: ChangeEventHandler // (e: ChangeEvent<HTMLInputElement>) => void
}

// Form input with animated floating labels
function FormInput({ handleChange, label, ...otherProps }: FormInputProps) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  )
}

export default FormInput
