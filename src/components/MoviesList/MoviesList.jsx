import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const baseUrl = 'https://image.tmdb.org/t/p/w500';
const posterFakeUrl =
  'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title || movie.name}
            {movie.poster_path ? (
              <img src={`${baseUrl + movie.poster_path}`} alt={movie.title} />
            ) : (
              <img src={`${posterFakeUrl}`} alt={movie.title} />
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
