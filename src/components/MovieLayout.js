import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import Loading from './Loading';
import {getMovies} from '../services/index';
import ListMovies  from './ListMovies';


const MovieLayout = ()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    async function loadMovies(){
        const response = await getMovies();
        if(response.status ===200){
            setMovies(response.data.results)
        }
        setIsLoading(false);
    }

    useEffect(() => {
        loadMovies();
    }, []);

    return (
        <div className='background'>
        <Container >
            <Header title='Star Wars Movies'/>  
            {
                isLoading && <Loading/>
            }
            {
                !isLoading&&!movies.length && <h2>There isn't movies to show</h2>
            }
            {
                !isLoading&&movies.length&&<ListMovies movies={movies}/>
            }
        </Container>
        <br></br>
        </div>
    )
}

export default MovieLayout;