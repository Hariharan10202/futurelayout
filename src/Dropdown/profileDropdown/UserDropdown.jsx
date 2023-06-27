import React, { useState } from "react";
import styles from "./dropdown.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const UserDropdown = ({ profileClicked }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={
        !profileClicked
          ? `${styles.container}`
          : `${styles.container} ${styles.showDropdown}`
      }
    >
      <span onMouseEnter={() => setHovered(false)}>My Profile</span>
      <div>
        <span onMouseEnter={() => setHovered(true)} className={styles.subList}>
          My Company <MdKeyboardArrowRight className={styles.rightArrow} />
        </span>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={
            !hovered
              ? `${styles.container} ${styles.subDropdown}`
              : `${styles.container} ${styles.subDropdown} ${styles.showDropdown}`
          }
        >
          <span className={styles.width}>Manage Accounts</span>
          <span>
            <Link className={styles.link} to="/configure">
              Configure
            </Link>
          </span>
        </div>
      </div>
      <span onMouseEnter={() => setHovered(false)}>Logout </span>
    </div>
  );
};

export default UserDropdown;
