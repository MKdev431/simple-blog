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
        <Navbar.Brand>
          <Link
            to={"/"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Mike's Simple Blog
          </Link>
        </Navbar.Brand>
        <Nav>
          <div className="collapse navbar-collapse">
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
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navi;
