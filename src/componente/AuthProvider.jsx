import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth(app)
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, useLoader] = useState(true)

    const createUser = (email, password) => {
        useLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const sigInUser = (email, password) => {
        useLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });
        return () => {
            unSubscribe()
        }
    }, [])


    const userInfo = {
        user,
        loader,
        createUser,
        sigInUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;