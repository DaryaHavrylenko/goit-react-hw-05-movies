import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'servises/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Reviews;
