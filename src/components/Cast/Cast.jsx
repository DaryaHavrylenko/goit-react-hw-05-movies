import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'servises/api';
import styled from 'styled-components';

const Item = styled.li`
  list-style-type: none;
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
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.map(actor => (
            <Item key={actor.id}>
              {actor.profile_path ? (
                <img src={`${baseUrl + actor.profile_path}`} alt={actor.name} />
              ) : (
                <img
                  src={`${posterFakeUrl}`}
                  alt={actor.name}
                  width={200}
                  height={300}
                />
              )}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </Item>
          ))}
        </ul>
      ) : (
        <p>No information</p>
      )}
    </div>
  );
};
export default Cast;
