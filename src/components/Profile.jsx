import React, { useState } from 'react';

const ProfileHeader = ({ profilePicture, name }) => (
    <div className="flex flex-col items-center p-4">
        <img
            src={profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full border-2 border-gray-300"
        />
        <h1 className="text-2xl font-semibold mt-4">{name}</h1>
    </div>
);

const PersonalDetails = ({ email, phone, address, onEdit }) => (
    <div className="p-4 bg-white shadow-md rounded-md my-4">
        <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Address:</strong> {address}</p>
        <button
            onClick={onEdit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
            Edit Profile
        </button>
    </div>
);

const AccountSettings = ({ onChangePassword }) => (
    <div className="p-4 bg-white shadow-md rounded-md my-4">
        <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
        <button
            onClick={onChangePassword}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
            Change Password
        </button>
    </div>
);

const OrderHistory = () => (
    <div className="p-4 bg-white shadow-md rounded-md my-4">
        <h2 className="text-xl font-semibold mb-2">Order History</h2>
        {/* Order list component */}
    </div>
);

const Profile = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, City, Country',
        profilePicture: '/path/to/profile-picture.jpg',
    });

    const handleEditProfile = () => {
        // Logic to edit profile
    };

    const handleChangePassword = () => {
        // Logic to change password
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <ProfileHeader profilePicture={user.profilePicture} name={user.name} />
            <PersonalDetails
                email={user.email}
                phone={user.phone}
                address={user.address}
                onEdit={handleEditProfile}
            />
            <AccountSettings onChangePassword={handleChangePassword} />
            <OrderHistory />
            {/* Additional components: Address Book, Payment Methods, Wishlist, etc. */}
        </div>
    );
};

export default Profile;