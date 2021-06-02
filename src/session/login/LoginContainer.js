import React from 'react';
import Login from "./Login";
import {post} from "../../utils/http";
import {useHistory} from "react-router";

const LoginContainer = () => {
    const history = useHistory();

    const loginRequest = (user) => {
        post('login', user)
            .then(res => {
                localStorage.setItem('token', res.jwt);
                history.push('/main/home');
            })
            .catch(err => {
            })
    }

    return <Login loginRequest={loginRequest}/>
}


export default LoginContainer;
