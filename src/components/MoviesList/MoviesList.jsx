import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  width: 1280px;
  padding: 52px 24px;
  margin-left: auto;
  margin-right: auto;
`;
const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: -16px;
  list-style: none;
  text-decoration: none;

  padding: 0;
  margin: 0;
`;
const Item = styled.li`
  position: relative;
  width: calc(33.3333% - 32px);
  margin: 10px;
  display: flex;
  justify-content: center;

  transition-property: scale;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    scale: 1.03;
    // background-color: #d4d4d4;
    // z-index: 10;
  }
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
// NavLink = styled.a`
//   margin-bottom: 12 px;
//   overflow: hidden;
// `;

const baseUrl = 'https://image.tmdb.org/t/p/w500';
const posterFakeUrl =
  'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <GalleryContainer>
      <Gallery>
        {movies.map(movie => (
          <Item key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title || movie.name}
              {movie.poster_path ? (
                <Img src={`${baseUrl + movie.poster_path}`} alt={movie.title} />
              ) : (
                <Img src={`${posterFakeUrl}`} alt={movie.title} />
              )}
            </NavLink>
          </Item>
        ))}
      </Gallery>
    </GalleryContainer>
  );
};
