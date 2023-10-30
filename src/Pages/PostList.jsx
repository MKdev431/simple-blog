import { useState, useEffect } from "react";

import Post from "./Post";

const PostList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8000/blogs");
      const data = await response.json();
      setBlogs(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="postList">
      <ul>
        {blogs.map(blog => (
          <Post
            className="post"
            key={blog.id}
            id={blog.id}
            title={blog.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
