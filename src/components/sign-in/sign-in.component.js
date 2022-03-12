import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

function SignIn() {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({ email: '', password: '' });
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };
  return (
    <div>
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='email'
            value={email}
            handleChange={handleChange}
            label='email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
