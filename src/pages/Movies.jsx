import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmsByQuery } from 'servises/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { FcSearch } from 'react-icons/fc';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  border-radius: 3px;
  overflow: hidden;
`;
const Input = styled.input`
  display: inline-block;

  font: inherit;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  padding-left: 7px;
  padding-right: 10px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;
const FormButton = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 10px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };
  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    getFilmsByQuery(query).then(setMovies);
  }, [searchParams]);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="movie"
          onChange={handleChange}
          value={query}
          placeholder="Search movie"
        />
        <FormButton type="submit">
          <FcSearch size="1rem" />
        </FormButton>
      </Form>
      <MoviesList movies={movies} />
    </>
  );
};
export default Movies;
