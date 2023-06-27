import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

const InputTextComponent = ({ placeholder }) => {
  const [value, setValue] = useState("");
  return (
    <InputText
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default InputTextComponent;
