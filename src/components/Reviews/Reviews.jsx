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
      {reviews.length > 0 ? (
        <ul>
          {reviews?.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author:{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
};
export default Reviews;
