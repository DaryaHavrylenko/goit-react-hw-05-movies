import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'servises/api';
import styled from 'styled-components';

const TextAuthor = styled.p`
  font-weight: 500;
  font-size: 20px;
`;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews?.map(({ id, author, content }) => (
            <li key={id}>
              <TextAuthor>Author:{author}</TextAuthor>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No information</p>
      )}
    </div>
  );
};
export default Reviews;
