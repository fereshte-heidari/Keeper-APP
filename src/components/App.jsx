import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);
  function handleNote(title, content) {
    setNote((preValue) => {
      return [...preValue, { title: title, content: content }];
    });
  }

  function deleteHandle(id) {
    setNote((prenote) => {
      return prenote.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea function={handleNote} />
      {note.map((n, index) => (
        <Note
          key={index}
          id={index}
          title={n.title}
          content={n.content}
          function={deleteHandle}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
