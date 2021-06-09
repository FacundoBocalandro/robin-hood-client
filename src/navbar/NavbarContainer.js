import React from "react";
import {useHistory} from "react-router";
import Navbar from "./Navbar";

const NavbarContainer = () => {
    const history = useHistory();

    const logout = () => {
        window.localStorage.removeItem('token');
        history.push('/')
    }

    return <Navbar logout={logout}/>
}

export default NavbarContainer
