import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            console.log('on auth state chnaged current user',currentUser.photoURL);
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[]);

    const logOut=()=>{
        return signOut(auth);
    }
    const authInfo={
        user,
        createUser,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;