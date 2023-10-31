import { Link } from "react-router-dom";
import Home from "../Pages/Home";
import NewPost from "../Pages/NewPost";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/new-post"}>New Post</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
