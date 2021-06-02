import React from 'react';
import Register from "./Register";
import {post} from "../../utils/http";
import {useHistory} from "react-router";

const RegisterContainer = () => {
    const history = useHistory();

    const registerRequest = (user) => {
        post('register', user)
            .then(() => history.push('/'))
            .catch(() => {})
    }

    return <Register registerRequest={registerRequest}/>
}


export default RegisterContainer;
