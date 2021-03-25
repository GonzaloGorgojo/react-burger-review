import { Container, Row, Col } from "react-bootstrap";

export function Home() {
  return (
    <Container id="containerHome" className="text-center mt-5">
      <Row>
        <Col>
          <h1>Welcome to the Burger Reviews Project</h1>
          <hr></hr>
          <h5>
            Here you will find Peoples reviews about their favorite Burgers !
          </h5>
        </Col>
      </Row>
    </Container>
  );
}
