import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { signIn, signInWithGoogle } from '../../firebase/userAuth';
import FormInput from '../../components/form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';
import './SignIn.scss';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Clear fields after submission
  const signInWithEmail = async (event) => {
    event.preventDefault();
    await signIn(email, password);

    setEmail('');
    setPassword('');
  };

  // Update state on typing
  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  return (
    <div className="sign-in page">
      <h2>Sign in with your email and password</h2>
      <span>
        Dont't have an account?{' '}
        <Link to="/signup" className="orange-link">
          Sign Up!
        </Link>
      </span>
      <form method="POST">
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
          <CustomButton type="button" onClick={signInWithEmail}>
            {' '}
            Sign in{' '}
          </CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} google="true">
            {' '}
            sign In With Google{' '}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
