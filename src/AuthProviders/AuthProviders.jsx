import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../Firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    
    const [user,setUser] = useState(null)
    const authInfo = {
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;