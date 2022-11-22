import { useEffect, useState } from 'react';
import { getTrendingFilms } from '../servises/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingFilms().then(setMovies);
  }, []);
  return (
    <main>
      <MoviesList movies={movies} />
    </main>
  );
};
export default Home;
