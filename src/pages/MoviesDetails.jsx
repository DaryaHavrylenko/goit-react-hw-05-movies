import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getFilmsById } from '../servises/api';
import { useLocation } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
// import { fetchGenres } from '../servises/api';
// import { Genres } from 'components/Genres/Genres';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

const MoviesDetails = () => {
  // const genre = JSON.parse(localStorage.getItem('genresDataArray'));
  // const [genres, setGenres] = useState([]);
  const [movie, setMovies] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getFilmsById(movieId).then(setMovies);
  }, [movieId]);

  // useEffect(() => {
  //   fetchGenres(genres).then(setGenres);
  // }, [genres]);

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  if (!movie) {
    return;
  }

  return (
    <>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      <div>
        <h1>{movie.title}</h1>
        <img src={`${baseUrl + movie.poster_path}`} alt={movie.title} />
        <p>Popularity: {movie.popularity.toFixed(0)}</p>
        <p>Vote Average:{movie.vote_average.toFixed(1)}</p>
        <p>Overview: {movie.overview}</p>
        {/* <Genres /> */}
      </div>
      <p>Additional information</p>
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
