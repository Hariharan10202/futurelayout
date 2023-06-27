import React from "react";
import styles from "./dropdown.module.css";

const Dropdown = ({ rmsHover }) => {
  return (
    <div
      className={
        !rmsHover
          ? `${styles["rms-dropdown"]}`
          : `${styles["rms-dropdown"]} ${styles.showDropdown}`
      }
    >
      <span>My Rates</span>
      <span>Rules</span>
      <span>Shared Rates</span>
    </div>
  );
};

export default Dropdown;
