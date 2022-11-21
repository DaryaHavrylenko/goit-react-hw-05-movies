import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmsById } from '../servises/api';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

export const MoviesDetails = () => {
  const [movie, setMovies] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleGoBack = () => {
    navigate(location.state.from);
  };
  useEffect(() => {
    getFilmsById(movieId).then(setMovies);
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      <h1>MovieDetails</h1>
      <h2>{movie.title}</h2>
      <img src={`${baseUrl + movie.poster_path}`} alt={movie.title} />
      <p>Overview: {movie.overview}</p>
    </>
  );
};
