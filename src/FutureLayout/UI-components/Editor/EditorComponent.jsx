import React, { useState } from "react";
import { Editor } from "primereact/editor";

const EditorComponent = () => {
  const [text, setText] = useState("");
  return (
    <Editor
      value={text}
      onTextChange={(e) => setText(e.htmlValue)}
      style={{ height: "320px" }}
    />
  );
};

export default EditorComponent;
