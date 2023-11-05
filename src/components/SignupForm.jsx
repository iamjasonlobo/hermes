import React, { useState } from 'react';

const useFormField = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};

const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

const validateForm = ({ email, birthDate, password, confirmPassword }) => {
  if (!email.toLowerCase().endsWith('.edu')) {
    return 'Please enter a valid .edu email address.';
  }
  if (calculateAge(birthDate) < 18) {
    return 'You must be at least 18 years old to use this website.';
  }
  if (password !== confirmPassword) {
    return 'Passwords do not match.';
  }
  return null;
};

const SignupForm = () => {
  const firstName = useFormField('');
  const lastName = useFormField('');
  const email = useFormField('');
  const birthDate = useFormField('');
  const password = useFormField('');
  const confirmPassword = useFormField('');
  const phoneNumber = useFormField('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const formError = validateForm({
      email: email.value,
      birthDate: birthDate.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    });

    if (formError) {
      setError(formError);
    } else {
      setError('');
      // Proceed with signup logic
      console.log('Signup successful');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="First Name" {...firstName} />
        <input type="text" placeholder="Last Name" {...lastName} />
        <input type="email" placeholder="Email" {...email} />
        <input type="date" placeholder="Birth Date" {...birthDate} />
        <input type="password" placeholder="Password" {...password} />
        <input type="password" placeholder="Confirm Password" {...confirmPassword} />
        <input type="tel" placeholder="Phone Number" {...phoneNumber} />
        <button type="submit">Sign Up</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default SignupForm;
