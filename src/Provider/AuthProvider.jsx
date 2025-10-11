import { createUserWithEmailAndPassword,  GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../Auth/Firebase.init";

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()

    const googleUser =()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const signUpUsers = (email, password)=>{
         return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo ={
        googleUser,
        signInUser,
        signUpUsers,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;