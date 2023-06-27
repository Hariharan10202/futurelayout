import React, { useState } from "react";
import styles from "./Dropdown.module.css";

import { MdKeyboardArrowRight } from "react-icons/md";

const CreateDropdown = ({ createClicked }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
      className={
        !createClicked
          ? `${styles.container}`
          : `${styles.container} ${styles.showDropdown}`
      }
    >
      <div>
        <span onMouseEnter={() => setHovered(true)} className={styles.subList}>
          Rates <MdKeyboardArrowRight className={styles.rightArrow} />
        </span>

        <div
          onMouseLeave={() => setHovered(false)}
          className={
            !hovered
              ? `${styles.container} ${styles.subDropdown}`
              : `${styles.container} ${styles.subDropdown} ${styles.showDropdown}`
          }
        >
          <span>Upload</span>
          <span>RateCard</span>
        </div>
      </div>
      <span onMouseEnter={() => setHovered(false)}>Shipments</span>
      <span onMouseEnter={() => setHovered(false)}> Quotes</span>
    </div>
  );
};

export default CreateDropdown;
