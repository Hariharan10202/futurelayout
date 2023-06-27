import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import { users } from "../../users";

import { BsPlusLg } from "react-icons/bs";

const Dropdown = ({ setVisible }) => {
  const [isShow, setIsShow] = useState("hide");
  const [isClicked, setIsClicked] = useState(false);
  const [width, setWidth] = useState(false);
  const [data, setData] = useState();
  const [desc, setDesc] = useState();

  const [userData, setUserData] = useState(users);

  const handleOpen = () => {
    setVisible(true);
  };

  const stateChange = (e) => {
    setWidth(true);
    users.forEach((user) => {
      if (user.id === Number(e.target.id)) {
        setData(user.name);
        setDesc(`${user.mail} | ${user.title}`);
      }
    });
  };

  const searchFilterHandler = (e) => {
    const value = e.target.value;
    const temp = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(value) ||
        user.mail.toLowerCase().includes(value) ||
        user.title.toLowerCase().includes(value)
      );
    });
    setUserData(temp);
  };

  return (
    <div className={styles.container}>
      <div
        onClick={() => {
          isShow === "hide" ? setIsShow("show") : setIsShow("hide");
          setIsClicked(true);
        }}
        className={
          width
            ? `${styles.inputContainer} ${styles.extraWidth}`
            : `${styles.inputContainer}`
        }
      >
        <div className={styles.content}>
          {width && <span>{data}</span>}
          <input
            type="text"
            value={desc}
            onChange={searchFilterHandler}
            placeholder={isClicked ? "" : "Enter customer Details"}
          />
        </div>
      </div>
      <div className={`${styles.dropDownContainer} ${styles[isShow]}`}>
        <div className={styles.dataContainer}>
          {userData.map((user) => (
            <li id={user.id} key={user.id} onClick={stateChange}>
              <span>{user.name}</span>
              <span>{`${user.mail}     |    ${user.title}`}</span>
            </li>
          ))}
          <button onClick={handleOpen} className={styles.btn}>
            <BsPlusLg /> Add New Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
