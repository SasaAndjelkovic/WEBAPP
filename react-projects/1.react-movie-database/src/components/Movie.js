import React from 'react';
import { useParams } from 'react-router';

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//Components
import BreadCrumb from './BreadCrumb';
import Grid from './Grid/Index';
import Spinner from './Spinner/Index';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';

//Hook
import { useMovieFetch } from '../hooks/useMovieFetch';

//Image
import NoImage from '../images/no_image.jpg';

//const Movie = () => <div>Movie</div>;
const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

   if (loading) return <Spinner />;
   if (error) return <div>Something went wrong...</div>
    
    return (
        <>
            {/* <div>Movie</div> */}
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar 
                time={movie.runtime}    
                budget={movie.budget} 
                revenue={movie.revenue} />
        </>
    );
};

export default Movie;