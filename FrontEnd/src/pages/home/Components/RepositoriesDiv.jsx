import React, { useState } from 'react';
import {  Label, Input, Button, Repositories, Title, List, Item, Info, Trainer, Client, New } from "../styles";

const RepositoriesDiv = ({ repositories, onDeleteRepo, onNewRepo }) => {
    const [ newRepo, setNewRepo ] = useState('');

    return(
        <Repositories>
            <Title>Training</Title>
            <List>
                {
                   repositories.map((repository) => (
                        <Item key={repository._id}>
                            <Info>
                                <Trainer>{repository.name.substring(0, repository.name.indexOf('/'))}</Trainer>
                                <Client>{repository.name.substring(repository.name.indexOf('/') + 1)}</Client>
                            </Info>
                            <Button onClick={() => onDeleteRepo(repository)}>Delete</Button>
                        </Item>
                   )) 
                }
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