import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../../imgs/logo.png";

export function NavBar() {
  return (
    <Navbar expand="lg" id="navbar">
      <Navbar.Brand>
        <img
          alt=""
          src={Logo}
          width="100"
          height="100"
          className="d-inline-block align-top"
        />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="text-center">
        <Nav className="nav mx-auto">
          <LinkContainer to={"/BurgerProject_FrontEnd"}>
            <Nav.Link className=" px-4">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/BurgerProject_FrontEnd/watch"}>
            <Nav.Link className=" px-4">Watch Reviews</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/BurgerProject_FrontEnd/send"}>
            <Nav.Link className=" px-4">Send Reviews</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
