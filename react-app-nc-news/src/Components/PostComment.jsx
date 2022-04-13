import React from "react";

export default function NewComment() {
  return (
    <div className="comment-form-div">
      <form className="comment-form">
        <label>Comment on this article: </label>
        <textarea placeholder="Your comment here..." required />
      <button>Post
      </button>
      </form>
    </div>
  );
};


