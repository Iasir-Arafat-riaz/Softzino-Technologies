import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../firebase/Initialize";


  firebaseInitialize();
const provider = new GoogleAuthProvider();
const auth = getAuth();
  const useFirebase=()=>{

    const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const googleSignIn = () => {
    // setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        // console.log(result.user.displayName);
        //SAVE USER FUNCTION CALL
        // saveUser(user.email,user.displayName,"put")

        setError("")
        // history.push(location?.state?.from || "/dashboard")
      })
      .catch((error) => {
        // const errorMessage = error.message;
        setError(error.message)
      })
      // .finally(() => setIsLoading(false));
  };

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
         setUser(user);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
  },[auth])


  //user Logout
  const userLogout=()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser({})
    }).catch((error) => {
      // An error happened.
    });
  }

  return {googleSignIn,user,userLogout};

  }
  export default useFirebase;