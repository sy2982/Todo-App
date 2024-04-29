import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

function LoginSignup({ onGoogleSignIn }) {

  const handleGoogleSignIn = () => {
    onGoogleSignIn();
  };

  return (
    <div className='login-container'>
      <div className='login'>
        <div className="login-header">
          <h2>To Do App</h2>
        </div>
        <div className="login-button">
          <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        </div>
      </div>
    </div>
  );
}

// Define prop types
LoginSignup.propTypes = {
  onGoogleSignIn: PropTypes.func.isRequired // Specify that onGoogleSignIn is a required function prop
};

export default LoginSignup;