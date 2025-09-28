import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import axios from "axios";

// google provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    // user state
    const [user, setUser] = useState(null);

    // loading state
    const [loading, setLoading] = useState(true);

    // authentication with email and password(create user)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signin/login
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // signin with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // signout/logout
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // observer for user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('state captured', currentUser);

            if (currentUser?.email) {
                const user = { email: currentUser.email }

                axios.post('https://blog-website-server-r74c.onrender.com/jwt', user, { withCredentials: true })
                    .then(res =>{
                        console.log(res.data);
                        setLoading(false)
                    })
            }
            else {
                axios.post('https://blog-website-server-r74c.onrender.com/logout', {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data)
                    setLoading(false);
                })
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        signInWithGoogle,
        logoutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;