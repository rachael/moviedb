import React from 'react';

function Movie({
  title,
  description,
  poster_path,
  release_date,
  vote_average,
  vote_count,
}) {
  return (
    <div className="Movie">
      <img
        className="Movie-Poster"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="Movie Poster"
      />
      <p className="Movie-Title">{title}</p>
      <p className="Movie-Description">{description}</p>
      <p className="Movie-Date">{release_date}</p>
      <p className="Movie-Title">{title}</p>
      <p className="Movie-Score">{vote_average} (votes: {vote_count})</p>
    </div>
  );
}

export default Movie;
