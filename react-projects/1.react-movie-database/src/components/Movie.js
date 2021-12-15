import React from 'react';
import { useParams } from 'react-router';

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//Components
import BreadCrumb from './08BreadCrumb';
import Grid from './03Grid/Index';
import Spinner from './05Spinner/Index';
import MovieInfo from './09MovieInfo';
import MovieInfoBar from './12MovieInfoBar';
import Actor from './10Actor';

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
                revenue={movie.revenue} 
            />
            <Grid header='Actors'>
                {movie.actors.map(actor => (
                    <Actor
                        key={actor.credit.id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : NoImage
                        }
                    />
                ))}
            </Grid>
        </>
    );
};

export default Movie;