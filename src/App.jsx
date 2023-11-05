import { Link } from 'react-router-dom';
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

const App = ({ signOut, user }) => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/add-service">Add Service</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
        <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      </ul>
    </div>
  );
};

export default withAuthenticator(App);
