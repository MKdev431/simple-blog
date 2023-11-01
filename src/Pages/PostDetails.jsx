import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);
  const navigate = useNavigate();

  const deleteHandler = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    });
    navigate("/");
  };

  return (
    <div className="container mt-4 m-auto">
      {isLoading && !error && <div>Loading data...</div>}
      {error && <div>{error.message}</div>}
      {post && (
        <div className="container d-flex flex-column align-items-center">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <h2 className="align-self-end m-3">{post.author}</h2>
          <button
            className="btn btn-primary w-10 align-self-end"
            onClick={() => deleteHandler(id)}
          >
            Delete post
          </button>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
