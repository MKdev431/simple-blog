import { Link } from "react-router-dom";

const Post = ({ title, id }) => {
  return (
    <li>
      <Link to={`post/${id}`}>{title}</Link>
    </li>
  );
};

export default Post;
