import Home from "./Pages/Home";
// import PostList from "./Pages/PostList";
import NewPost from "./Pages/NewPost";
import { Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <div className="pages">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/new-post"
          element={<NewPost />}
        />
      </Routes>
    </div>
  );
};

export default Pages;
