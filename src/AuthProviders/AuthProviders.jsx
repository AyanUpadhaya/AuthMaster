import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut} from "firebase/auth";

import { app } from '../Firebase/firebase.config';
import { useEffect } from 'react';

const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>signOut(auth)

    //observer auth state change

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('auth state changed', currentUser)
            setUser(currentUser)
        })

        return ()=>{
            unsubscribe()
        }
    },[])
    
    const [user,setUser] = useState(null)
    const authInfo = {
        user,
        createUser,
        signIn,
        setUser,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;