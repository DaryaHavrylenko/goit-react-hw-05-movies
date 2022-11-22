import { useState, useEffect } from 'react';
import { fetchGenres } from '../servises/api';

export const Genres = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    fetchGenres(genres).then(setGenres);
  }, [genres]);
  return (
    <ul>
      {genres.map(id => (
        <li key={id}>{id}</li>
      ))}
    </ul>
  );
};
