import { ChangeEventHandler, FC } from 'react';
import './FormInput.scss';

type FormInputProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  required: boolean;
  handleChange: ChangeEventHandler; // (e: ChangeEvent<HTMLInputElement>) => void
};

// Form input with animated floating labels
const FormInput: FC<FormInputProps> = ({
  handleChange,
  label,
  ...otherProps
}) => {
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
  );
};

export default FormInput;
