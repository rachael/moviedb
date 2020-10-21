import axios from 'axios';

const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

export const popularMovies = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
