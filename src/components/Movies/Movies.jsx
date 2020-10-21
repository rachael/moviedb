import React, { useEffect, useState } from 'react';

import { popularMovies } from 'api';
import { Movie } from '.';

import './Movies.scss';

function Movies() {
  const [movies, setMovies] = useState('Loading...');

  useEffect(() => {
    popularMovies.then(payload => {
      setMovies(payload.data.results.map(movie => (
        <Movie
          key={movie.id}
          title={movie.title}
          description={movie.description}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
          vote_count={movie.vote_count}
        />
      )));
    });
  }, []);

  return (
    <div className="Movies">
      <div className="Movies-List">
        {movies}
      </div>
    </div>
  );
}

export default Movies;
