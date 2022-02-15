import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Home, Nav, Logo, Search, Label, Input, Button, Repositories, Title, List, Item, Info, Trainer, Client } from "./styles";


const HomePage = () => {
    const {  logout } = useContext(AuthContext);

    const handdleLogout = () => {
        logout();
    }
    
    const handleSearch = (query) => {
        console.log("query", query);
    }

    const handleClear = (query) => {
        console.log("query");
    }

    return (
    <Home>
        <Nav>
            <Logo>jhonny's Academy</Logo>
        <Button onClick={handdleLogout}>Logout</Button>
        </Nav>

        <Search>
            <Label htmlFor="query">Search</Label>
            <Input type="search" name="query" id="query" />
            <Button onClick={handleSearch}>Search</Button>
            <Button onClick={handleClear}>Clear</Button>
        </Search>

        <Repositories>
            <Title>Training</Title>
            <List>
                <Item>
                    <Info>
                        <Trainer>Jorge</Trainer>
                        <Client>Maria</Client>
                    </Info>
                    <Button>Delete</Button>
                </Item>
            </List>
        </Repositories>
        
    </Home>
    )
}

export default HomePage;