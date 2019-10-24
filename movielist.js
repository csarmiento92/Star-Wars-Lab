import React from 'react';
import { array } from 'prop-types';

import Movie from './movie';

const MovieList = props => {
  //   Add any `console.log` code here before the `return` statement if you want to inspect a variable
  // -------- CODE HERE ----------



  // -----------------------------
  return (
    <ul className="row">
      {
        // Create your .map function here
        props.movies.map(movie => (
          <Movie
            key={movie.title} // DO NOT EDIT KEY
            // Pass correct props below
            title={movie.title}
            episode_id={movie.episode_id}
            release_date={movie.release_date}
          />
        ))
      }
    </ul>
  )
}


MovieList.propTypes = {
  movies: array
}



export default MovieList