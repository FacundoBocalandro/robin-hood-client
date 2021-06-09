import React from "react";
import {useHistory} from "react-router";
import Navbar from "./Navbar";

const NavbarContainer = () => {
    const history = useHistory();

    const logout = () => {
        window.localStorage.removeItem('token');
        history.push('/')
    }

    const redirectToStocks = () => {
        history.push('/main/stocks')
    }

    const redirectToHome = () => {
        history.push('/main/home')
    }

    return <Navbar logout={logout} redirectToStocks={redirectToStocks} redirectToHome={redirectToHome}/>
}

export default NavbarContainer
