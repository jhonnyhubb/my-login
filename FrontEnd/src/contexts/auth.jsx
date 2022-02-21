import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from 'react-router-dom';
import { createSession } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    const navigate = useNavigate(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //keep logged in
    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const response = await createSession(email, password);

        setUser(response.data.user)

        //api create a session

        const loggedUser = {
            id: "62068a9513ccb7cc194372cb", 
            email,
        }
        
        // keep logged in
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        if (password === "123456") {
            setUser(loggedUser);
            navigate("/")
        }
    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");

        setUser(null);
        navigate("/login");
    };

    return(
        <AuthContext.Provider 
        value ={{
            authenticated: !!user, 
            user, 
            loading, 
            login, 
            logout}}>
            {children}
        </AuthContext.Provider>
    )
}