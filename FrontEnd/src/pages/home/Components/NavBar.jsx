import React from "react";
import { Nav, Logo, Button } from "../styles";


const NavBar = ({ onLogout }) => {
    return (
        <Nav>
            <Logo>jhonny's Academy</Logo>
            <Button onClick={onLogout}>Logout</Button>
        </Nav>
    )
}

export default NavBar;