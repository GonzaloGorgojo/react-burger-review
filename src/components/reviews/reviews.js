import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Cards } from "../cards/cards";
import Carousel from "react-elastic-carousel";

export function Reviews() {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetch("https://burger-reviews.onrender.com/api/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Container id="containerCarousel">
      <Carousel verticalMode itemsToShow={1}>
        {reviews ? (
          reviews.map((review, key) =>
            review.status === 0 ? null : (
              <Cards
                key={key}
                userName={review.userName}
                shop={review.shop}
                burger={review.burger}
                ranking={review.ranking}
                comment={review.comment}
              ></Cards>
            )
          )
        ) : (
          <Spinner animation="border" role="status" variant="success">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
      </Carousel>
    </Container>
  );
}
