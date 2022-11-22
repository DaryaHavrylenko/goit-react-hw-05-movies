import { useEffect, useState } from 'react';
import { getTrendingFilms } from '../servises/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import styled from 'styled-components';

// const MainHome = styled.div`
//   background: rgb(34, 193, 195);
//   background: radial-gradient(
//     circle,
//     rgba(34, 193, 195, 1) 0%,
//     rgba(253, 187, 45, 1) 100%
//   );
// `;

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
