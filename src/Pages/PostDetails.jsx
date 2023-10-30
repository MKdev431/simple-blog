import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  let post = [];

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`http://localhost:8000/blogs`);
      const data = response.json();
      setPosts(data);
    };
    fetchDetails();
    post = [...posts];
    console.log(post);
  }, []);
  //   console.log(posts);

  return (
    <div className="details-wrapper">
      {/* <h1>details of post {post.id}</h1>
      <p>{post.body}</p>
      <h2>{post.author}</h2> */}
    </div>
  );
};

export default PostDetails;
