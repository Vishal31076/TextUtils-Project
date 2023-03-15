import React, { useState } from "react";

export default function Teaxarea(props) {
  const handleUpClick = () => {
    console.log("Uppercase Was Clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("UpperCase Converted", "success");
  };

  const handleLoClick = () => {
    console.log("Uppercase Was Clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("LowerCase Converted", "success");
  };

  const handleClrClick = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("Textarea");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");
  };

  const handleOnChange = (e) => {
    console.log("onChange");
    setText(e.target.value);
  };

  const [text, setText] = useState("");
  // setText("New Text");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="Textarea"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
              // color: props.mode === "light" ? "Blue" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-2 my-2"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-2 my-2"
          onClick={handleClrClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning  mx-2 my-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          Your Words{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          and Characters {text.length}
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((e) => {
              return e.length != 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something the textBox above to Preview it"}
        </p>
      </div>
    </>
  );
}
