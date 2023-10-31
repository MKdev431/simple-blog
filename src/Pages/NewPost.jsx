import { useState } from "react";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mike");

  const submitHandler = e => {
    e.preventDefault();
    const blog = { title, body, author };

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
            throw Error("mamy errora");
          }
          return response.json();
        }
      })
      .then(response => console.log(response))
      .catch(error => console.log("there was an error", error.message));
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
        <button>Send</button>
      </form>
    </div>
  );
};

export default NewPost;
