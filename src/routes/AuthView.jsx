import React, { useState } from 'react';
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

const AuthView = () => {
  // State to track which form is active, 'signup' or 'login'
  const [activeForm, setActiveForm] = useState('signup'); // default to 'signup'

  return (
    <div>
      <div>
        <button
          onClick={() => setActiveForm('signup')}
          style={{ backgroundColor: activeForm === 'signup' ? 'blue' : 'grey' }}
        >
          Signup
        </button>
        <button
          onClick={() => setActiveForm('login')}
          style={{ backgroundColor: activeForm === 'login' ? 'blue' : 'grey' }}
        >
          Login
        </button>
      </div>

      {activeForm === 'signup' && <SignupForm />}
      {activeForm === 'login' && <LoginForm />}

    </div>
  );
};

export default AuthView;
