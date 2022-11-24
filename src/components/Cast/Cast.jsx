import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'servises/api';
import styled from 'styled-components';
const CastsContainer = styled.div`
  width: 1280px;
  padding: 52px 24px;
  margin-left: auto;
  margin-right: auto;
`;
const GalleryCast = styled.ul`
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
  list-style-type: none;
  position: relative;
  width: calc((100% - (3 * 10px)) / 5);
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TextName = styled.p`
  font-weight: 600;
  font-size: 15px;
`;

const baseUrl = 'https://image.tmdb.org/t/p/w200';
const posterFakeUrl =
  'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <CastsContainer>
      {cast.length > 0 ? (
        <GalleryCast>
          {cast.map(actor => (
            <Item key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`${baseUrl + actor.profile_path}`}
                  alt={actor.name}
                  width={200}
                  height={300}
                />
              ) : (
                <img
                  src={`${posterFakeUrl}`}
                  alt={actor.name}
                  width={200}
                  height={300}
                />
              )}
              <TextName>{actor.name}</TextName>
              <p>Character: {actor.character}</p>
            </Item>
          ))}
        </GalleryCast>
      ) : (
        <p>No information</p>
      )}
    </CastsContainer>
  );
};
export default Cast;
