import { useContext, createContext, useState, useEffect } from "react";
import {
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import async from "react-select/async";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
           const result =  await signInWithPopup(auth, provider);
           setUser(result.user)
        } catch (error) {
            // Handle any errors that occur during Google sign-in
            console.error("Google sign-in error:", error);
        }
    };

    const logOut = () => {
        signOut(auth);
        setUser(null);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    const contextValue = useContext(AuthContext);

    if (!contextValue) {
        throw new Error("UserAuth must be used within an AuthContextProvider");
    }

    return contextValue;
}
