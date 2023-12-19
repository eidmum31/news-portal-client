import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext({});

const AuthProviders = ({ children }) => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    let [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (photoURL, displayName) => {
        return updateProfile(auth.currentUser, {
            displayName, photoURL
        })
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);

    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
                setLoading(false);
                
        })
        return ()=>unsubscribe();
    }, [])

    console.log(user);
    const AuthInfo = {
        logOut,
        user,
        createUser,
        loginUser,
        updateUserProfile,
        verifyEmail,
        resetPassword,
        loading,
        googleSignIn


    };
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;