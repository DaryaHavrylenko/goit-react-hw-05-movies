import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmsByQuery } from 'servises/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };
  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    getFilmsByQuery(query).then(setMovies);
  }, [searchParams]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movie" onChange={handleChange} value={query} />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};
export default Movies;
