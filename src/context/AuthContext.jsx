import React, { createContext, useContext, useState, useEffect } from 'react'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithPopup,
    onAuthStateChanged,
} from 'firebase/auth';
import { auth, provider } from '../Firebase'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const signup =(email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    const loginWithGoogle = () => signInWithPopup(auth, provider);

    useEffect(() =>{
        const unsub = onAuthStateChanged(auth, setUser);
        return () => unsub();
    }, []);
  return (
   <AuthContext.Provider value={{ user, login, signup, logout, loginWithGoogle }}>
    {children}
   </AuthContext.Provider>
  );
};

export const useAuth = () => useContext (AuthContext);