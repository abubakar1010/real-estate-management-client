import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const register = (email, password) => {



        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logout = () => {

        return signOut(auth)
    }

    const login = (email, password) => {


        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
                
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

    // implement login with github

    const gitHubProvider = new GithubAuthProvider()

    const githubLogin = () => {

        return signInWithPopup(auth, gitHubProvider)

    }

    const authInfo = {
        user,
        register,
        loading,
        logout,
        setLoading,
        login,
        googleLogin,
        githubLogin
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