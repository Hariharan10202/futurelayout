import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

const TextAreaComponent = ({ placeholder = "Comments" }) => {
  const [value, setValue] = useState("");
  return (
    <InputTextarea
      autoResize
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      rows={5}
      cols={30}
    />
  );
};

export default TextAreaComponent;
