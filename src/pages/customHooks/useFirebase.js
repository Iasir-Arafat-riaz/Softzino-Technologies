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
const [language,setLanguage]=useState("english");
  const googleSignIn = (navigate,location) => {
    // setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);

        // console.log(result.user.displayName);
        //SAVE USER FUNCTION CALL
        // saveUser(user.email,user.displayName,"put")
 navigate(location?.state?.from || "/Dashboard");
        setError("");
       
        // history.push(location?.state?.from || "/dashboard")
      })
      .catch((error) => {
        // const errorMessage = error.message;
        setError(error.message)
      })
      // .finally(() => setIsLoading(false));
  };

  //Observer
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        setIsLoading(true);
        if (user) {
         setUser(user);
          // ...
        } else {
          // User is signed out
          setUser({});
        }
        setIsLoading(false);
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

  return {googleSignIn,user,userLogout,language,setLanguage,isLoading};

  }
  export default useFirebase;