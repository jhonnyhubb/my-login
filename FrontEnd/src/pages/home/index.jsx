import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import { Home, Loading } from "./styles";
//components
import NavBar from "./Components/NavBar";
import SearchDiv from "./Components/SearchDiv";
import RepositoriesDiv from "./Components/RepositoriesDiv";
//links
import { Link } from "react-router-dom"
//connect with backend
import { getRepositories, createRepository, deleteRepository } from "../../services/api"

//const user?.id = '62068a9513ccb7cc194372cb'

const HomePage = () => {
    const {  logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }
    
    const handleSearch = (query) => {
        loadData(query);
    }

    const handleDeleteRepo = async (repository) => {
        await deleteRepository(user?.id, repository._id);
        await loadData();
    }

    const handleNewRepo = async (url) => {
        try{
            await createRepository(user?.id, url);
            await loadData();
        } catch (error){
            console.error(error);
            setLoadingError(true);
        }
    }

    //connect with backend
    const { user } = useContext(AuthContext);
    const [repositories, setRepositories] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ loadingError, setLoadingError ] = useState(false);

    const loadData = async (query = '') => {
        try {
            const response = await getRepositories(user?.id, query);
            setRepositories(response.data)
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(true);
        }
    }

    useEffect(() => {
        (async () => await loadData())();
    }, []);

    if (loading){
        return(
            <Loading>
                <h1>Loading</h1>
            </Loading>
        )
    }

    if (loadingError){
        return(
            <Loading>
                <h1>error in charge the train</h1>
                <Link to='/'>return</Link>
            </Loading>
        )
    }

    return (
    <Home>
        <NavBar onLogout={handleLogout}/>
        <SearchDiv onSearch={handleSearch}/>
        <RepositoriesDiv 
            repositories={repositories} 
            onDeleteRepo={handleDeleteRepo}
            onNewRepo={handleNewRepo}/>
        
    </Home>
    )
}

export default HomePage;