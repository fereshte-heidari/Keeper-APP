import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  const [content, setContent] = useState("");
  function contentHandle(event) {
    setContent(event.target.value);
  }
  function formHandle(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={formHandle}>
        <input
          onChange={handleTitle}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={contentHandle}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button onClick={() => props.function(title, content)}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
