import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Button from "react-bootstrap/button";

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
    <>
      {isLoading && !error && <div>Loading data...</div>}
      {error && <div>{error.message}</div>}
      {post && (
        <div className="details-wrapper">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <h2>{post.author}</h2>
          <Button onClick={() => deleteHandler(id)}>Delete post</Button>
        </div>
      )}
    </>
  );
};

export default PostDetails;
