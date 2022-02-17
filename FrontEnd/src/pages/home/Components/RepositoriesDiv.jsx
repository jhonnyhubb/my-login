import React, { useState } from 'react';
import {  Label, Input, Button, Repositories, Title, List, Item, Info, Trainer, Client, New } from "../styles";

const RepositoriesDiv = ({ repositories, onDeleteRepo, onNewRepo }) => {
    const [ newRepo, setNewRepo ] = useState('');

    return(
        <Repositories>
            <Title>Training</Title>
            <List>
                <Item>
                    <Info>
                        <Trainer>Jhonny</Trainer>
                        <Client>Maria</Client>
                    </Info>
                    <Button onClick={repositories}>info</Button>
                    <Button onClick={() => onDeleteRepo(null)}>Delete</Button>
                </Item>
            </List>

            <New>
                <Label htmlFor="new-train">New train:</Label>
                <Input 
                    type="url" 
                    name="new-train" 
                    id="new-train" 
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}/>
                <Button onClick={() => onNewRepo(newRepo)}>Add</Button>
            </New>
        </Repositories>
    )
}

export default RepositoriesDiv;