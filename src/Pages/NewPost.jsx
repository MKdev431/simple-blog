import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mike");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postSubmitted, setPostSubmitted] = useState(false);
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setPostSubmitted(false);

    const blog = { title, body, author };

    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(blog),

        // body: JSON.stringify({
        //   title: title,
        //   body: body,
        //   author: author,
        // })
      })
        .then(response => {
          {
            if (!response.ok) {
              throw Error("Unable to post");
            }
            return response.json();
          }
        })
        .then(response => console.log(response))
        .catch(error => setError(error));
      setIsLoading(false);
      setPostSubmitted(true);
      setTimeout(() => {
        navigate("/");
        setPostSubmitted(false);
      }, 3000);
    }, 3000);
  };

  return (
    <div className="newPost">
      <form onSubmit={submitHandler}>
        <label>Post title</label>
        <input
          type="text"
          placeholder="title"
          onChange={e => setTitle(e.target.value)}
        />
        <label>Post text</label>
        <textarea
          placeholder="text"
          onChange={e => setBody(e.target.value)}
        ></textarea>
        <label>Post author</label>
        <select onChange={e => setAuthor(e.target.value)}>
          <option value="Mike">Mike</option>
          <option value="Seba">Seba</option>
        </select>
        {!isLoading && !error && <button>Send</button>}
        {isLoading && <button disabled={true}>Loading</button>}
        {error && <div>{error.message}</div>}
        {postSubmitted && <div>Post submitted successully. You will be redirected to the homepage in a second.</div>}
      </form>
    </div>
  );
};

export default NewPost;
