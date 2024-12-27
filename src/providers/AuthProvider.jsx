import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebas.init";

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    console.log(user)
    const  [loading,setLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userLogin = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
     }
     
     const updateUserProfile = (updateData) =>{
        return updateProfile(auth.currentUser,updateData);
     }
     useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return() =>{
            unsubscribe()
        }
     },[])
    //  console.log(user)
    const userInfo = {
         user,
         setUser,
         loading,
         createUser,
         userLogin,
         logOut,
         updateUserProfile,
         isDarkMode, 
         setIsDarkMode
    }
    return (
       <AuthContext.Provider value={userInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;