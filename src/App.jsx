import React, { useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import axios from 'axios';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import './App.css';

Amplify.configure(awsExports);
const App = ({ signOut, user }) => {
  const addUserToDatabase = async (username) => {
    const supabaseUrl = 'https://afeqcqvlzcbzfdqvsusz.supabase.co/rest/v1/users';
    const serviceRoleKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

    try {
      // Check if the user already exists
      const userResponse = await axios.get(`${supabaseUrl}?username=eq.${username}`, {
        headers: {
          'apikey': serviceRoleKey,
          'Authorization': `Bearer ${serviceRoleKey}`,
        },
      });

      if (userResponse.data.length === 0) {
        // User does not exist, add them
        const response = await axios.post(supabaseUrl, {
          username: username,
          points: 100,
        }, {
          headers: {
            'apikey': serviceRoleKey,
            'Authorization': `Bearer ${serviceRoleKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=ignore-duplicates',
          },
        });
        console.log('User added to the database:', response.data);
      } else {
        console.log('User already exists in the database:', userResponse.data);
      }
    } catch (error) {
      console.error('Error in adding/updating user in the database:', error);
    }
  };

  useEffect(() => {
    const fetchAndAddUserToDatabase = async () => {
      if (user && user.id) { // Assuming `user.id` is the user ID
        // Fetch the actual username with the user ID
        const username = await fetchUsername(user.id);
        if (username) {
          addUserToDatabase(username);
        }
      }
    };
  
    fetchAndAddUserToDatabase();
  }, [user]);
  
  return (
    <div className="home-page">
      <h1>Home</h1>
      <h1 className="user-greeting">Hello, {user.username}</h1>
      <button className="sign-out-button" onClick={signOut}>Sign out</button>
    </div>
  );
};

export default withAuthenticator(App);
