import useFetch from "../useFetch";
import Post from "./Post";

const PostList = () => {
  const { data: posts, isLoading, error } = useFetch("http://localhost:8000/blogs/");

  return (
    <div className="container">
      {isLoading && !error && <div>Loading data...</div>}
      {error && <div>{error.message}</div>}
      {posts && (
        <div>
          {posts.map(blog => (
            <Post
              key={blog.id}
              id={blog.id}
              title={blog.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
