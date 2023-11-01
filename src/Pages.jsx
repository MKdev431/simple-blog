import Home from "./Pages/Home";
import NewPost from "./Pages/NewPost";
import PostDetails from "./Pages/PostDetails";
import { Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/new-post"
          element={<NewPost />}
        />
        <Route
          path="/post/:id"
          element={<PostDetails />}
        />
      </Routes>
    </div>
  );
};

export default Pages;
