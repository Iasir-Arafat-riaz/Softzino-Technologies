import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config";

const firebaseInitialize=()=>{
    initializeApp(firebaseConfig)
    
}

export default firebaseInitialize;