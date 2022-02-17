import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import { Home } from "./styles";
//components
import NavBar from "./Components/NavBar";
import SearchDiv from "./Components/SearchDiv";
import RepositoriesDiv from "./Components/RepositoriesDiv";
//connect with backend
import { getRepositories } from "../../services/api"

const userId = '6206b2b6e617cf7d5166802a'

const HomePage = () => {
    const {  logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }
    
    const handleSearch = (query) => {
        console.log("query", query);
    }

    const handleTrainRepo = (query) => {
        console.log("query");
    }

    const handleDeleteRepo = (repository) => {
        console.log("delete", repository);
    }

    const handleNewRepo = (url) => {
        console.log("new", url);
    }

    //connect with backend
    const [repositories, setRepositories] = useState([]);

    const loadData = async (query = '') => {
        const response = await getRepositories(userId);

        setRepositories(response.data)
    }

    useEffect(() => {
        (async () => loadData())();
    }, []);

    return (
    <Home>
        <NavBar onLogout={handleLogout}/>
        <SearchDiv onSearch={handleSearch}/>
        <RepositoriesDiv 
            repositories={[]} 
            onTrain={handleTrainRepo} 
            onDelete={handleDeleteRepo}
            onNewRepo={handleNewRepo}/>
        
    </Home>
    )
}

export default HomePage;