import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { settings } from '../../common/settings';   // make slider screen-dynamic
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/omdb/omdb-reducer';
import MovieItem from '../movieItem/MovieItem';
import "./movieList.scss";
import { findMoivesThunk, findShowsThunk } from '../../features/movies/movie-thunk';

export default function MovieList() {

    const { movies, shows } = useSelector(state => state.movies);
    const dispatch = useDispatch();

    let renderMovies = "";   
    let renderShows = "";

    useEffect(() => {
        dispatch(findMoivesThunk());
        dispatch(findShowsThunk());
    }, []);

    renderMovies = 
        movies ? (
            movies.map((movie) => (
                <MovieItem key={movie._id} data={movie} />
            ))
        ) : (
            <div className="movies-error">
                {movies.Error}
            </div>
        );
    
    renderShows = 
        shows ? (
            shows.map((show) => (
                <MovieItem key={show._id} data={show} />
            ))
        ) : (
            <div className="movies-error">
                {shows.Error}
            </div>
        );
  return (
    <div className="movie-wrapper">
        <div className="movie-list">
            <h2>Movies</h2>

            <div className="movie-container">
                <Slider {...settings}>{renderMovies}</Slider>
            </div>
            
        </div>
        <div className="movie-list">
            <h2>Shows</h2>
            <div className="movie-container">
            <Slider {...settings}>{renderShows}</Slider>
            </div>
        </div>
    </div>
  )
}


