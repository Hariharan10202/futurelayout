import React, { useState } from "react";
import styles from "./TermsAndConditions.module.css";

import { Editor } from "primereact/editor";
import { useEffect } from "react";

const TermsConditions = ({ sidePanel }) => {
  const [text, setText] = useState("<div>Terms and conditions </div>");

  useEffect(() => {
    setText(
      sidePanel === "SEA"
        ? "Terms and conditions for SEA mode"
        : sidePanel === "AIR"
        ? "Terms and conditions for AIR mode"
        : sidePanel === "LAND"
        ? "Terms and conditions for LAND mode"
        : "Terms and conditions for Standard mode"
    );
  }, [sidePanel]);

  return (
    <>
      <div className={styles.container}>
        <Editor
          style={{ height: "200px" }}
          value={text}
          onTextChange={(e) => setText(e.htmlValue)}
        />
      </div>
      <div className={styles.footer}>
        <button>Apply Changes</button>
      </div>
    </>
  );
};

export default TermsConditions;
