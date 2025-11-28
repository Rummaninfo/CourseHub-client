"use client";

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const { user, loading, updateUserProfile } = useContext(AuthContext) || {};
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const router = useRouter();

  // Redirect when auth state is known and there's no user
  useEffect(() => {
    if (loading) return; // wait for auth to resolve
    if (!user) router.replace('/Register');
  }, [user, loading, router]);

  // Sync local state with the auth user when it becomes available/changes
  useEffect(() => {
    if (!user) return;
    setName(user.displayName || '');
    setImg(user.photoURL || '');
  }, [user]);

  const handleUpdate = async () => {
    try {
      // Prefer an update function supplied by AuthContext (implement persistence there)
      if (typeof updateUserProfile === 'function') {
        await updateUserProfile({ displayName: name, photoURL: img });
        
      } else {
        // Fallback: local log and toast
        console.log('Updated (local):', { name, img });
       
      }
    } catch (err) {
      console.error(err);
     
    }
  };

  // While loading or redirecting, show a loader (or null)
  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading....</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto px-4">
        {/* Profile Image */}
        <div className="text-center mb-6">
          <img
            src={img || user?.photoURL || '/default-avatar.png'}
            onError={(e) => (e.currentTarget.src = '/default-avatar.png')}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
          />
        </div>

        {/* Name Display */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{name || user?.displayName || 'No Name'}</h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        {/* Update Form */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mt-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Update Profile</h3>

          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
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
            <label className="block text-sm font-medium text-gray-900 mb-2">Profile Image URL</label>
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
            onClick={handleUpdate}
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
