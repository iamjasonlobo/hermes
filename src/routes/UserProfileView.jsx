import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function UserProfileView() {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState([]);
  const [passwords, setPasswords] = useState({ oldPassword: '', newPassword: '', confirmPassword: '' });
  const [photo, setPhoto] = useState(null);
  const history = useHistory();

  React.useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const response = await axios.get('/api/user/details');
      setUser(response.data);
    } catch (error) {
      setErrors([error.message]);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleUploadPhoto = async (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSaveChanges = async () => {
    try {
      if (passwords.newPassword) {
        await axios.put('/api/user/change-password', passwords);
      }

      if (photo) {
        const formData = new FormData();
        formData.append('photo', photo);
        await axios.post('/api/user/upload-photo', formData);
      }

      await axios.put('/api/user/update', user);
      setErrors([]);
    } catch (error) {
      setErrors([error.message]);
    }
  };

  const handleSignOut = () => {
    window.location.href = '/auth'; // Redirects to the auth page
  };

  const handleListServices = () => {
    history.push('/services'); // Redirect to the 'ServicesView' route
  };

  const handleListProducts = () => {
    history.push('/products'); // Redirect to the 'ProductsView' route
  };

  return (
    <div className="profile-page">
      {/* ... (existing code) */}
      <div className="form-group">
        <button onClick={handleListServices}>List Services</button>
        <button onClick={handleListProducts}>List Products</button>
      </div>
    </div>
  );
}

export default UserProfileView;
