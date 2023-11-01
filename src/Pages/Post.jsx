import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Post = ({ title, id }) => {
  return (
    <div>
      <Link
        to={`post/${id}`}
        style={{ display: "block", textDecoration: "none", color: "#000" }}
        className="card w-100-sm p-2 bg-primary-subtle text-center mb-2"
      >
        {title}
      </Link>
    </div>
  );
};

export default Post;
