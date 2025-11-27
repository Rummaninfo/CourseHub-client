"use client";

import React, {useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { AuthContext } from "./AuthContext";
// <-- check this path and filename in your repo. usually it's firebase.init (not .git.int)



  const provider = new GoogleAuthProvider();
export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe; // unsubscribe function
  }, []);

  const registeruser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const loginuser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => signInWithPopup(auth, provider);

  const userSignOut = () => signOut(auth);

  

  const authinfo = {
    registeruser,
    loginuser,
    googleSignIn,
    userSignOut,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authinfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
