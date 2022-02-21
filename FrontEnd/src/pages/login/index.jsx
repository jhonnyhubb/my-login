import React, { useState, useContext } from "react";
import { Login, Title, Form, Label, InputEmail, InputPassword, Actions, Button } from "./styles";
import { AuthContext } from "../../contexts/auth";
// authentication
import { createSession } from '../../services/api';

const LoginPage = () => {
    const { authenticated, user, login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();  
        login(email, password); //integrate with my context and API
    }

    return (
        <Login>
            <Form onSubmit={handleSubmit}>
                <Title>Login</Title>
                <div className="field">                
                    <Label>Email</Label>
                    <InputEmail type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>               
                </div>
                <div className="field">                
                    <Label>password</Label>
                    <InputPassword type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>                  
                </div>
                <Actions>
                    <Button>Login</Button>
                </Actions> 
            </Form>
        </Login>
    )
}

export default LoginPage;