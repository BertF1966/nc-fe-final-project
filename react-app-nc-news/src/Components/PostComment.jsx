import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { postNewComment } from "../Api";

export default function PostComment() {
    console.log('in post comments')
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams;
  const [data, setData] = useState({
    body: "",
    author: "",
  });

  postNewComment(article_id).then((data) => {
    setData({
      body: data.body,
      author: data.author,
    });
    setIsLoading(false);
  });

  function submit(event) {
    event.preventDefault();
  }

  function handle(event) {
    const newData = { ...data };
    newData[event.target.id] = event.target.value;
    setData(newData);
    console.log(newData);
  }
  return (
    <div>
      <form onSubmit={(event) => submit(event)}>
        <input
          onChange={(event) => handle(event)}
          id="body"
          value="data.body"
          placeholder="Comment"
          type="text"
        ></input>
        <input
          onChange={(event) => handle(event)}
          id="author"
          value="data.author"
          placeholder="Author"
          type="text"
        ></input>
        <button>Submit</button>
        {isLoading && <h2>Loading...</h2>}
      </form>
    </div>
  );
}
