import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React, { useState } from "react";
import { Editor } from "primereact/editor";

import styles from "./Remarks.module.css";

const Remarks = () => {
  const [text1, setText1] = useState();

  return (
    <div className={styles.card}>
      <div className="">
        <h4>Remarks</h4>
        <Editor
          style={{ height: "320px" }}
          value={text1}
          onTextChange={(e) => setText1(e.htmlValue)}
        />
      </div>
      <div className="">
        <h4>Inclusion</h4>
        <Editor
          style={{ height: "320px" }}
          value={text1}
          onTextChange={(e) => setText1(e.htmlValue)}
        />
      </div>
    </div>
  );
};

export default Remarks;
