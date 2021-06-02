import React from 'react';
import Login from "./Login";
import {post} from "../../utils/http";

const LoginContainer = () => {
    const loginRequest = (user) => {
        post('login', user)
            .then(res => {

            })
            .catch(err => {
            })
    }

    return <Login loginRequest={loginRequest}/>
}


export default LoginContainer;
