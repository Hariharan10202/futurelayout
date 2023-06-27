import React from "react";
import { GrClose } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { FaUserAlt, FaBuilding } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

import styles from "./AddModal.module.css";

const AddModel = ({ setVisible }) => {
  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Create Customer</span>
        <GrClose onClick={handleClose} className={styles.closeBtn} />
      </div>
      <div className={styles.formControl}>
        <div className={styles.inputContainer}>
          <BiUser className={styles.icon} />
          <div className={styles.inputField}>
            <label className={styles.label} htmlFor="">
              Sales Person
            </label>
            <input type="text" className={styles.input} />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <FaBuilding className={styles.icon} />
          <div className={styles.inputField}>
            <label className={styles.label} htmlFor="">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Enter Company Name"
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <FaUserAlt className={styles.icon} />
          <div className={styles.inputField}>
            <label className={styles.label} htmlFor="">
              Sales Person
            </label>
            <div className={styles.nameInput}>
              <input
                type="text"
                placeholder="First Name"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Last Name"
                className={styles.input}
              />
            </div>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <IoMdMail className={styles.icon} />
          <div className={styles.inputField}>
            <label className={styles.label} htmlFor="">
              Customer Email
            </label>
            <input
              type="text"
              placeholder="Enter Customer Mail"
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <BsFillTelephoneFill className={styles.icon} />
          <div className={styles.inputField}>
            <label className={styles.label} htmlFor="">
              Contact
            </label>
            <input
              type="text"
              placeholder="Enter Contact Number"
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <MdLocationOn className={styles.icon} />
          <div className={styles.inputField}>
            <label className={styles.label} htmlFor="">
              Contact
            </label>
            <textarea
              type="text"
              placeholder="Enter Customer Email"
              className={styles.textarea}
            />
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <button>Cancel</button>
        <button>Create</button>
      </div>
    </div>
  );
};

export default AddModel;
