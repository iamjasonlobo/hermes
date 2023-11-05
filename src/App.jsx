import { Link } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import './App.css'; // Ensure that we are importing App.css

Amplify.configure(awsExports);

const App = ({ signOut, user }) => {
  return (
    <div className="home-page">
      <h1>Home</h1>
      <h1 className="user-greeting">Hello User {user.username}</h1>
      <button className="sign-out-button" onClick={signOut}>Sign out</button>
    </div>
  );
};

export default withAuthenticator(App);