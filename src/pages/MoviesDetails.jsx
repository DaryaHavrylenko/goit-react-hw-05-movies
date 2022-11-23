import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getFilmsById, getGenres } from '../servises/api';
import { useLocation } from 'react-router-dom';
import { useNavigate, NavLink } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import styled from 'styled-components';
const DetailsContainer = styled.div`
  width: 1280px;
  padding: 22px 24px;
  margin-left: auto;
  margin-right: auto;
`;
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
const ButtonGoBack = styled.button`
  display: flex;
  justify-content: center;
  width: 50px;
  padding: 8px 16px;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font: inherit;
  font-size: inherit;
  background-color: #dcf2b0;
  &:hover {
    color: white;
    background-color: orangered;
  }
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
    <DetailsContainer>
      <ButtonGoBack type="button" onClick={handleGoBack}>
        <AiOutlineArrowLeft size="1rem" />
      </ButtonGoBack>

      <h1>{movie.title}</h1>
      <img
        src={`${baseUrl + movie.backdrop_path}`}
        alt={movie.title}
        width={500}
        height={300}
      />
      <p>Popularity: {movie.popularity.toFixed(0)}</p>
      <p>Vote Average:{movie.vote_average.toFixed(1)}</p>
      <GenresList>
        Genres:
        {genres.map(({ id, name }) => (
          <ItemsGenres key={id}>{name}</ItemsGenres>
        ))}
      </GenresList>
      <p>Overview: {movie.overview}</p>

      <p>Additional information</p>
      <Link to="cast" state={location.state}>
        Cast
      </Link>
      <Link to="reviews" state={location.state}>
        Reviews
      </Link>
      <Outlet />
    </DetailsContainer>
  );
};
export default MoviesDetails;
