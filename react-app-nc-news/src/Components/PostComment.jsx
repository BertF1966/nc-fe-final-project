import React from "react";
import { useState } from "react";

export default function NewComment() {
  const [form, setForm] = useState({
    

  })

  const createForm = () => {
    console.log('hello click')
  }
  return (
    <div className="comment-form">
      <button onClick={createForm}>Post new comment
  
      </button>
    </div>
  );
};


// <form action="">
// <input className="comment-input" type="text" name="article-id"/>
// <input className="comment-input" type="text" name="body"/>
// <input className="comment-input" type="text" name="author"/>
// {/* </form> */}
