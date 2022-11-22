import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getFilmsById } from '../servises/api';
import { useLocation } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

const MoviesDetails = () => {
  const [movie, setMovies] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

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
      <div>
        <h1>MovieDetails</h1>
        <h2>{movie.title}</h2>
        <img src={`${baseUrl + movie.poster_path}`} alt={movie.title} />
        <p>Overview: {movie.overview}</p>
      </div>
      <Link to="cast" state={location.state}>
        Cast
      </Link>
      <Link to="reviews" state={location.state}>
        Reviews
      </Link>
      <Outlet />
    </>
  );
};
export default MoviesDetails;
