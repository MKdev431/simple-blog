import { NavLink } from "react-router-dom";
import PostDetails from "./PostDetails";

const Post = ({ title, id }) => {
  return (
    <li>
      <NavLink
        to={`post/${id}`}
        element={<PostDetails />}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default Post;
