import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const register = (email, password) => {

        setLoading(true)

        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const login = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
                setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    },[])


    // implement login with google
    
    const googleProvider = new GoogleAuthProvider()

    const googleLogin = () => {

        return signInWithPopup(auth, googleProvider)

    }

    const authInfo = {
        user,
        register,
        loading,
        logout,
        setLoading,
        login,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;