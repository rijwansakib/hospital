
import { useEffect, useState } from "react";
import firebaseInit from "../firebase/Firebase.init";

import {getAuth,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";

firebaseInit();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const[isLoding,setIsLoding]=useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

        // signin-using-google

    const signInUsingGoogle=()=>{
        setIsLoding(true);
          return  signInWithPopup(auth, googleProvider)
                .finally(()=>{
                    setIsLoding(false)
                });
        }


            //submit from handel
            const createUser=(email,password)=>{ 
                setIsLoding(true);      
                createUserWithEmailAndPassword(auth, email, password)
                
                .then(result  => {
                    // Signed in 
                    const user = result.user;
                    setUser(user);
                  
                })
                .finally(()=>{
                    setIsLoding(false)
                });

            }

    //sign In
    const userSignIN = (email, password) => {
        setIsLoding(true);
       return signInWithEmailAndPassword(auth, email, password)
            .finally(()=>{
                setIsLoding(false)
            });


    }

    //sign Out
        const logOut=()=>{
            signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(()=>{
                setIsLoding(false)
            });
          
    }

    
 // observe weather user state chane or not
        useEffect(()=>{
         const unsub=   onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user)
                } else {
                // User is signed out
                // ...
                }
                setIsLoding(false);
            });
            return()=>unsub;
        },[])

        return{
            user,
            isLoding,
            createUser,
            userSignIN,
            signInUsingGoogle,
            logOut
        }
}

export default useFirebase;