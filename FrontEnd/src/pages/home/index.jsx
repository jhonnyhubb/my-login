import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";


const HomePage = () => {
    const {  logout } = useContext(AuthContext);

    const handdleLogout = () => {
        logout();
    }

    return (
    <>
        <h1>Home</h1>
        <button onClick={handdleLogout}>Logout</button>
    </>
    )
}

export default HomePage;