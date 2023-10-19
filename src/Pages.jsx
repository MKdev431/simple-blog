import Home from "./Pages/Home";
import PostList from "./Pages/PostList";
import NewPost from "./Pages/NewPost";

const Pages = () => {
  return (
    <div className="pages">
      <Home />
      <PostList />
      <NewPost />
    </div>
  );
};

export default Pages;
