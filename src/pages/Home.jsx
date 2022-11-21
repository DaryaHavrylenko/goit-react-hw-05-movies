import { useEffect, useState } from 'react';
import { getTrendingFilms } from '../servises/api';
import { MoviesList } from 'components/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingFilms().then(setMovies);
  }, []);
  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};
