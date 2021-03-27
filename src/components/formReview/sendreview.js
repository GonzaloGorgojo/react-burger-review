import axios from "axios";
import { useState } from "react";
import { Form, Button, Modal, Container } from "react-bootstrap";

const style = {
  width: "50vw",
  marginTop: "5vh",
  marginBottom: "5vh",
  backgroundColor: "#2c3e50",
  color: "white",
  padding: "10px",
  borderRadius: "10px",
};

export function FormReview() {
  // modal controls//
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const handleClose = () => setShowOne(false);
  const handleCloseTwo = () => setShowTwo(false);
  //get All te names //
  let userNames = [];
  axios.get("https://burgers-reviews.herokuapp.com/api/reviews").then((res) => {
    for (let i = 0; i < res.data.length; i++)
      userNames.push(res.data[i].userName);
  });
  // Set data to send //
  const URL = "https://burgers-reviews.herokuapp.com/api/review";
  const [review, setReview] = useState({
    userName: "",
    country: "",
    shop: "",
    burger: "",
    ranking: "",
    comment: "",
  });

  // control input so u dont send a repeated username //
  function controlInput(e) {
    handle(e);
    validateName(e);
  }
  function handle(e) {
    const newReview = { ...review };
    newReview[e.target.id] = e.target.value;
    setReview(newReview);
  }
  function validateName(e) {
    const USERNAME = e.target.value;
    const INPUT_USERNAME = document.querySelector("#userName");
    const SUBMIT_BTN = document.querySelector("#submitBTN");
    if (userNames.includes(USERNAME.toLowerCase().replace(/\s+/g, ""))) {
      INPUT_USERNAME.style.border = "3px solid red";
      SUBMIT_BTN.disabled = true;
    } else {
      INPUT_USERNAME.style.border = "none";
      SUBMIT_BTN.disabled = false;
    }
  }

  // send form //
  function sendReview(e) {
    const INPUT_USERNAME = document.querySelector("#userName");
    const INPUT_USERNAME_VALUE = document.querySelector("#userName").value;
    const SUBMIT_BTN = document.querySelector("#submitBTN");
    e.preventDefault();
    if (
      userNames.includes(INPUT_USERNAME_VALUE.toLowerCase().replace(/\s+/g, ""))
    ) {
      INPUT_USERNAME.style.border = "3px solid red";
      SUBMIT_BTN.disabled = true;
      setShowOne(true);
    } else {
      INPUT_USERNAME.style.border = "none";
      SUBMIT_BTN.disabled = false;
      axios
        .post(URL, {
          userName: review.userName,
          country: review.country,
          shop: review.shop,
          burger: review.burger,
          ranking: review.ranking,
          comment: review.comment,
        })
        .then(
          () => {
            setShowTwo(true);
            setReview({
              userName: "",
              country: "",
              shop: "",
              burger: "",
              ranking: "",
              comment: "",
            });
          },
          (error) => {
            setShowOne(true);
            console.log(error);
          }
        );
    }
  }
  return (
    <Container style={style}>
      <Form onSubmit={(e) => sendReview(e)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => controlInput(e)}
            id="userName"
            value={review.userName}
            type="text"
            placeholder="Type Your Name"
            required
          />
          <Form.Text>It has to be an unique name</Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Country</Form.Label>
          <Form.Control
            onChange={(e) => handle(e)}
            id="country"
            value={review.country}
            type="text"
            placeholder="Type your Country.."
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Shop</Form.Label>
          <Form.Control
            onChange={(e) => handle(e)}
            id="shop"
            value={review.shop}
            type="text"
            placeholder="Type Shop.."
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Burger</Form.Label>
          <Form.Control
            onChange={(e) => handle(e)}
            id="burger"
            value={review.burger}
            type="text"
            placeholder="Type your Burger.."
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Ranking</Form.Label>
          <Form.Control
            onChange={(e) => handle(e)}
            id="ranking"
            value={review.ranking}
            type="number"
            min="1"
            max="100"
            placeholder="Rank your Burger..."
            required
          />
          <Form.Text>Min: 1 - Max: 100</Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            onChange={(e) => handle(e)}
            id="comment"
            value={review.comment}
            as="textarea"
            rows={3}
          />
        </Form.Group>

        <Button variant="primary" type="submit" id="submitBTN">
          Submit
        </Button>
      </Form>
      <Modal show={showOne} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Already Exist</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Type new Name!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showTwo} onHide={handleCloseTwo}>
        <Modal.Header closeButton>
          <Modal.Title>Your Review has been Uploaded!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for taking your time to send a review!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTwo}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
