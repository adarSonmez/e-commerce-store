import React, { useState } from 'react';
import FormInput from '../../components/form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';
import './SignIn.scss';
import { signInWithGoogle } from '../../firebase/auth';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Clear fields after submission
  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail('');
    setPassword('');
  };

  // Update state at the same time as the user is typing
  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton type="submit" onClick={signInWithGoogle} google="true">
            {' '}
            sign In With Google{' '}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
