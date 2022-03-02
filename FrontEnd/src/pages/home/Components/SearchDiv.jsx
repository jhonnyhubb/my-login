import React, { useState } from 'react';
import { Search, Label, Input, Button } from "../styles";

const SearchDiv = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleClear = () => {
        setQuery('');
        onSearch();
    }

    return(
        <Search>
            <Label htmlFor="query">Search</Label>
            <Input 
                type="text" 
                name="query" 
                id="query" 
                value={query}
                onChange={(e) => setQuery(e.target.value) }/>
            <Button onClick={() => onSearch(query)}>Search</Button>
            <Button onClick={handleClear}>Clear</Button>
        </Search>
    )
}

export default SearchDiv;