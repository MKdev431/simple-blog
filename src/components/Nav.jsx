import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Navi = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">Mike's Simple Blog</Navbar.Brand>
        <Nav className="me-right">
          <Nav.Item as="li">
            <Nav.Link
              as={Link}
              to={"/"}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              as={Link}
              to={"/new-post"}
            >
              New Post
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navi;
