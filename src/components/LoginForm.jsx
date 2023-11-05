import React, { useState } from 'react';

// Constants
const INITIAL_EMAIL = '';
const INITIAL_PASSWORD = '';
const CORRECT_PASSWORD = 'password123';
const EDU_EMAIL_SUFFIX = '.edu';

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

const LoginForm = () => {
  const email = useFormInput(INITIAL_EMAIL);
  const password = useFormInput(INITIAL_PASSWORD);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.value.toLowerCase().endsWith(EDU_EMAIL_SUFFIX)) {
      setError('Please enter a valid .edu email address.');
      return;
    }

    if (password.value !== CORRECT_PASSWORD) {
      setError('Incorrect password. Please try again.');
      return;
    }

    setError('');
    console.log('Logged in successfully!');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...email}
            placeholder="Your email"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...password}
            placeholder="Your password"
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default React.memo(LoginForm);
