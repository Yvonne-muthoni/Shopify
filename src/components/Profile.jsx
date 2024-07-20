import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [profileData, setProfileData] = useState({ username: '', name: '', email: '', phone: '' });
  const [newPassword, setNewPassword] = useState('');
  const [editing, setEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(() => {
    // Fetch user profile data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setProfileData(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
  };

  const handleSave = async () => {
    try {
      // Update profile data in localStorage
      localStorage.setItem('user', JSON.stringify(profileData));

      if (newPassword) {
        // Handle password update logic (e.g., API call)
        console.log('Password updated:', newPassword);
      }

      if (profilePhoto) {
        // Handle profile photo update logic (e.g., API call)
        console.log('Profile photo updated:', profilePhoto.name);
      }

      toast.success('Profile updated successfully');
      setEditing(false);
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6">Profile</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Username:</label>
        {editing ? (
          <input
            type="text"
            name="username"
            value={profileData.username}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full"
          />
        ) : (
          <p className="text-gray-900">{profileData.username}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Name:</label>
        {editing ? (
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full"
          />
        ) : (
          <p className="text-gray-900">{profileData.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Email:</label>
        {editing ? (
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full"
          />
        ) : (
          <p className="text-gray-900">{profileData.email}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Phone Number:</label>
        {editing ? (
          <input
            type="text"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full"
          />
        ) : (
          <p className="text-gray-900">{profileData.phone}</p>
        )}
      </div>
      {editing && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={handlePasswordChange}
              className="border border-gray-300 rounded-lg p-3 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Profile Photo:</label>
            <input
              type="file"
              onChange={handlePhotoChange}
              className="border border-gray-300 rounded-lg p-3 w-full"
            />
          </div>
        </>
      )}
      {editing ? (
        <button onClick={handleSave} className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
          Save
        </button>
      ) : (
        <button onClick={() => setEditing(true)} className="bg-gray-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-600 transition-colors">
          Edit
        </button>
      )}
      <ToastContainer />
    </div>
  );
};

export default Profile;
