import React from 'react';

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//Components
import HeroImage from './02HeroImage';
import Grid from './03Grid/Index';
import Thumb from './04Thumb';
import Spinner from './05Spinner/Index';
import SearchBar from './06SearchBar';
import Button from './07Button';
    

//Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
   
    const { 
        state, 
        loading, 
        error, 
        searchTerm, 
        setSearchTerm, 
        setIsLoadingMore 
    } = useHomeFetch();

    console.log(state);

    if (error) return <div>Something went wrong...</div>

     //div
    return (
        <>  
            {!searchTerm && state.results[0] ? ( 
                <HeroImage 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            ) : null}
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? 'SearchTerm' : 'Popular Movies'}>
                {state.results.map(movie => (
                    //<div key={movie.id}>{movie.title}</div> dok nije uradjena Thumb componenta
                    <Thumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}  
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={() => setIsLoadingMore(true)} />
            )}
        </>
    );
};

export default Home;