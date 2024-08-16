import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import auth from "../Firebase/FIrebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (curUser) => {
            console.log("State changes and user : ", curUser);
            setUser(curUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const userInfo = {
        user,
        setUser,
        createUser,
        signIn,
        logOut,
        googleLogin,
        isLoading,
    };
    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;