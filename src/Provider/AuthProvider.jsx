import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext(null)
const user = {displayName : "muri khan"}
const authInfo= {
    user
}

const AuthProvider = ({ children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;