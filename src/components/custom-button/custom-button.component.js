import React from 'react';
import './custom-button.styles.scss';

function CustomButton({ children, isGoogleSignIn, ...props }) {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...props}
    >
      {children}
    </button>
  );
}

export default CustomButton;
