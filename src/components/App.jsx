import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [IsMouseover, setMouseover] = useState(false);

  function handleClick() {
    setHeadingText("submitted");
  }

  function handleMousedOver() {
    setMouseover(true);
  }

  function handleMousedOut() {
    setMouseover(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: IsMouseover ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMousedOver}
        onMouseOut={handleMousedOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
