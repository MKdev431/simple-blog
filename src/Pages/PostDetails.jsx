import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const PostDetails = ({ deleteHandler }) => {
  const { id } = useParams();
  const { data: post, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <>
      {isLoading && !error && <div>Loading data...</div>}
      {error && <div>{error.message}</div>}
      {post && (
        <div className="details-wrapper">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <h2>{post.author}</h2>
          <button>Delete post</button>
        </div>
      )}
    </>
  );
};

export default PostDetails;
