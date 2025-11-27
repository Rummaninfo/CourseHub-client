"use client";

import Link from "next/link";
import { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  let { user, userSignOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  let logoutuser = () => {
    userSignOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logout Successful!",
          text: "Welcome to Courses",
          timer: 2000,
          showConfirmButton: false,
        });
        router.push("/Register");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b shadow-lg bg-gradient-to-r from-white to-gray-50 backdrop-blur-lg bg-white/95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/Home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="font-bold text-lg">L</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            LearnHub
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/Home" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="/Profile" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
          >
            Profile
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="/Courses" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
          >
            All Courses
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {user ? (
          <div className="flex gap-4 items-center relative" ref={dropdownRef}>
            {/* Profile Picture with Dropdown */}
            <div
              className="relative cursor-pointer group"
              onClick={toggleDropdown}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 shadow-md">
                <img
                  src={user?.photoURL}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-16 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 py-3 min-w-64 z-50 fade-in">
                {/* User Info */}
                <div className="px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-2xl">
                  <p className="text-lg font-bold text-gray-900">
                    {user?.displayName || "Welcome Back!"}
                  </p>
                  <p className="text-sm text-gray-600 truncate mt-1">
                    {user?.email}
                  </p>
                </div>

                {/* Menu Items */}
                <div className="py-2">
                  <Link
                    href="/Profile"
                    className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      👤
                    </div>
                    <span className="font-medium">My Profile</span>
                  </Link>

                  <Link
                    href="/AddCourse"
                    className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      ➕
                    </div>
                    <span className="font-medium">Add Courses</span>
                  </Link>

                  <Link
                    href="/MyCourses"
                    className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      📚
                    </div>
                    <span className="font-medium">My Courses</span>
                  </Link>
                </div>

                {/* Logout Button */}
                <div className="border-t border-gray-100 pt-2 px-2">
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      logoutuser();
                    }}
                    className="flex items-center gap-3 w-full px-5 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 group"
                  >
                    <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                      🚪
                    </div>
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              </div>
            )}

            {/* Desktop Logout Button */}
            <button
              onClick={logoutuser}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all duration-300 font-medium"
            >
              <span>🚪</span>
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="px-6 py-2.5 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-medium"
            >
              Login
            </Link>
            <Link
              href="/Register"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
            >
              Get Started
            </Link>
          </div>
        )}

        {/* Mobile Menu Icon */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Nav;