import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../customHooks/useFirebase';

const Login = () => {
    const {googleSignIn}=useFirebase()
    const navigate= useNavigate()
    const location=useLocation()
    return (
        <div>
            <button onClick={()=>googleSignIn(navigate,location)}>Google Signin</button>
        </div>
    );
};

export default Login;