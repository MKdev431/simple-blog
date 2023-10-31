import useFetch from "../useFetch";

import Post from "./Post";

const PostList = () => {
  const { data: posts, isLoading, error } = useFetch("http://localhost:8000/blogs/");

  return (
    <div className="postList">
      {isLoading && !error && <div>Loading data...</div>}
      {error && <div>{error.message}</div>}
      {posts && (
        <ul>
          {posts.map(blog => (
            <Post
              className="post"
              key={blog.id}
              id={blog.id}
              title={blog.title}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
