import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navi = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
    >
      <div className="container">
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
      </div>
    </Navbar>
  );
};

export default Navi;
