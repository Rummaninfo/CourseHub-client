"use client"; 

import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Profile = () => {
    let { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [img, setImg] = useState(user?.photoURL || '');

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-md mx-auto px-4">
                
                {/* Profile Image */}
                <div className="text-center mb-6">
                    <img
                        src={img || user?.photoURL || '/default-avatar.png'}
                        alt="Profile"
                        className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
                    />
                </div>

                {/* Name Display */}
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {name || user?.displayName || 'No Name'}
                    </h2>
                    <p className="text-gray-600">{user?.email}</p>
                </div>

                {/* Update Form */}
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Update Profile</h3>
                    
                    {/* Name Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Image URL Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Profile Image URL
                        </label>
                        <input
                            type="text"
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            placeholder="Enter image URL"
                        />
                    </div>

                    {/* Update Button */}
                    <button
                        onClick={() => {
                            console.log('Updated:', { name, img });
                            alert('Profile updated!');
                        }}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium transition-colors duration-200"
                    >
                        Update Profile
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Profile;