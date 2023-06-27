import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import styles from "./checkbox.module.css";

const CheckBoxComponent = ({ checkId, placeholder }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.checkbox}>
      <Checkbox
        inputId={checkId}
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
      <label htmlFor={checkId}>{placeholder}</label>
    </div>
  );
};

export default CheckBoxComponent;
