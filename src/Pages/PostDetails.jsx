import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`http://localhost:8000/blogs/${id}`);
      const data = await response.json();
      setPost(data);
    };
    fetchDetails();
  }, []);

  return (
    <div className="details-wrapper">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>{post.author}</h2>
    </div>
  );
};

export default PostDetails;
