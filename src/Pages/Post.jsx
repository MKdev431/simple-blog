import { NavLink, useParams } from "react-router-dom";

const Post = ({ title, id }) => {
  return (
    <li>
      <NavLink to={`post/${id}`}>{title}</NavLink>
    </li>
  );
};

export default Post;
