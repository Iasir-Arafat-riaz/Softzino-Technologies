import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useContextAuth from '../../customHooks/useContextAuth';


const Login = () => {
    const {googleSignIn}=useContextAuth()
    const navigate= useNavigate()
    const location=useLocation()
    return (
        <div>
            <button onClick={()=>googleSignIn(navigate,location)}>Google Signin</button>
        </div>
    );
};

export default Login;