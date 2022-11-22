import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getFilmsById, getGenres } from '../servises/api';
import { useLocation } from 'react-router-dom';
import { useNavigate, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0;
  margin: 0;
  list-style: none;
`;
const ItemsGenres = styled.li`
  list-style-type: none;
`;
const GenresList = styled.ul`
  /* display: flex; */
  padding: 0;
  margin: 0;
`;

const baseUrl = 'https://image.tmdb.org/t/p/w500';

const MoviesDetails = () => {
  const [movie, setMovies] = useState(null);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getFilmsById(movieId).then(setMovies);
  }, [movieId]);

  useEffect(() => {
    getGenres(movieId).then(setGenres);
  }, [movieId]);
  const handleGoBack = () => {
    navigate(location.state.from);
  };

  if (!movie) {
    return;
  }
  if (!genres) {
    return;
  }

  return (
    <>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      <div>
        <h1>{movie.title}</h1>
        <img src={`${baseUrl + movie.backdrop_path}`} alt={movie.title} />
        <p>Popularity: {movie.popularity.toFixed(0)}</p>
        <p>Vote Average:{movie.vote_average.toFixed(1)}</p>
        <GenresList>
          Genres:
          {genres.map(({ id, name }) => (
            <ItemsGenres key={id}>{name}</ItemsGenres>
          ))}
        </GenresList>
        <p>Overview: {movie.overview}</p>
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
