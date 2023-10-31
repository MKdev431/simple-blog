import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Post = ({ title, id }) => {
  return (
    <li>
      <div>
        <Link to={`post/${id}`}>{title}</Link>
      </div>
    </li>
  );
};

export default Post;
