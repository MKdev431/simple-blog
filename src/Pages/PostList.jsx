import { useState, useEffect } from "react";

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
      {blogs.map(blog => (
        <div
          className="post"
          key={blog.id}
        >
          <div className="blog-title">{blog.title}</div>
          <div className="blog-text">{blog.body}</div>
          <div className="author">{blog.author}</div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
