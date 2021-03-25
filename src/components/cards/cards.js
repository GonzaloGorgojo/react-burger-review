import { Card } from "react-bootstrap";

export function Cards(props) {
  return (
    <Card
      className="text-center"
      border="primary"
      style={{
        width: "16rem",
        margin: "10px 0 10px 10px",
        textTransform: "capitalize",
      }}
    >
      <Card.Header>User: {props.userName}</Card.Header>
      <Card.Body>
        <Card.Title>Shop: {props.shop}</Card.Title>
        <Card.Title>Burger: {props.burger}</Card.Title>
        <Card.Text>{props.comment}</Card.Text>
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
            Ranking: <cite title="Source Title">{props.ranking}%</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
