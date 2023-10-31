import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Post = ({ title, id }) => {
  return (
    <li>
      <Link to={`post/${id}`}>{title}</Link>
    </li>
  );
};

export default Post;
