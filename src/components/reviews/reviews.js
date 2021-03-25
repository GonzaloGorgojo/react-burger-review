import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Cards } from "../cards/cards";

export function Reviews() {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = () => {
    fetch("https://burgers-reviews.herokuapp.com/api/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  };

  return (
    <Container>
      {reviews ? (
        reviews.map((review, key) => (
          <Cards
            key={key}
            userName={review.userName}
            shop={review.shop}
            burger={review.burger}
            ranking={review.ranking}
            comment={review.comment}
          ></Cards>
        ))
      ) : (
        <Spinner animation="border" role="status" variant="success">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </Container>
  );
}
