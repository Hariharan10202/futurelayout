import React from "react";
import styles from "./Meta.module.css";
import { Timeline } from "antd";
import "./temp.css";

import { GiCargoShip, GiHook } from "react-icons/gi";
import {
  FaShippingFast,
  FaRegUser,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { IoDocumentTextOutline, IoDocumentsSharp } from "react-icons/io5";
import { RiKeyboardBoxFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";

const Meta = () => {
  return (
    <div className={styles.container}>
      <Timeline>
        <Timeline.Item color="#49ADF5">
          <div className={styles.timeline}>
            <span>Origin</span>
            <span>INNSA/Jawaharlal Nehru</span>
          </div>
        </Timeline.Item>
        <Timeline.Item color="#49ADF5">
          <div className={styles.timeline}>
            <span>Origin</span>
            <span>DEHAM/Port of Hamburg</span>
          </div>
        </Timeline.Item>
      </Timeline>
      <div className={styles.metaDetails}>
        <div className={styles.metaIcons}>
          <span>
            <GiCargoShip />
          </span>
        </div>
        <div className={styles.metaData}>
          <span>Mode</span>
          <span>SEA-LCL</span>
        </div>
      </div>
      <div className={styles.metaDetails}>
        <div className={styles.metaIcons}>
          <span>
            <GiHook />
          </span>
        </div>
        <div className={styles.metaData}>
          <span>Load Details</span>
          <span>20GPX1</span>
        </div>
      </div>
      <div className={styles.metaDetails}>
        <div className={styles.metaIcons}>
          <span>
            <FaShippingFast />
          </span>
        </div>
        <div className={styles.metaData}>
          <span>Cargo Type</span>
          <span>N/A</span>
        </div>
      </div>
      <div className={styles.metaDetails}>
        <div className={styles.metaIcons}>
          <span>
            <GiCargoShip />
          </span>
        </div>
        <div className={styles.metaData}>
          <span>Stuffing</span>
          <span>Factory</span>
        </div>
      </div>
      <div className={styles.metaDetails}>
        <div className={styles.metaIcons}>
          <span>
            <BsCalendar2Date />
          </span>
        </div>
        <div className={styles.metaData}>
          <span>Cut Off Date</span>
          <span>13 Aug, 2022</span>
        </div>
      </div>
      <div className={styles.metaDetails}>
        <div className={styles.metaIcons}>
          <span>
            <BsCalendar2Date />
          </span>
        </div>
        <div className={styles.metaData}>
          <span>Expires on</span>
          <span>3 Sep, 2022</span>
        </div>
      </div>
      <div className={styles.metaDetails}>
        <div className={styles.metaIcons}>
          <span>
            <IoDocumentTextOutline />
          </span>
        </div>
        <div className={styles.metaData}>
          <span>INCO</span>
          <span>Terms</span>
        </div>
      </div>
      <div className={styles.metaDetails}>
        <div className={styles.metaIcons}>
          <span>
            <IoDocumentsSharp />
          </span>
        </div>
        <div className={styles.metaData}>
          <span>Customs</span>
          <span>Yes</span>
        </div>
      </div>
      <div className={styles.metaDetails}>
        <div className={styles.metaIcons}>
          <span>
            <RiKeyboardBoxFill />
          </span>
        </div>
        <div className={styles.metaData}>
          <span>Inquiry No</span>
          <span>INQ29417810</span>
        </div>
      </div>
      <div className={styles.metaDetails}>
        <div className={styles.metaIcons}>
          <span>
            <BsCalendar2Date />
          </span>
        </div>
        <div className={styles.metaData}>
          <span>Created on</span>
          <span>11 Aug, 2022</span>
        </div>
      </div>
      <div className={styles.metaDetails}>
        <div className={styles.metaIcons}>
          <span>
            <FaRegUser />
          </span>
        </div>
        <div className={styles.metaData}>
          <span>Sales Person</span>
          <span>Hariharan T</span>
        </div>
      </div>
      <div className={styles.metaDetails}>
        <div className={styles.metaIcons}>
          <span>
            <FaUser />
          </span>
        </div>
        <div className={styles.metaData}>
          <span>Sales Coordinator</span>
          <span>Hari</span>
        </div>
      </div>
      <div className={styles.metaDetails}>
        <div className={styles.metaIcons}>
          <span>
            <FaUserCircle />
          </span>
        </div>
        <div className={styles.metaData}>
          <span>Customer</span>
          <span>ship rrishna shipperproduction</span>
        </div>
      </div>
      <div className={styles.metaDetails}>
        <div className={styles.metaIcons}>
          <span>
            <HiMail />
          </span>
        </div>
        <div className={styles.metaData}>
          <span>Customer Email</span>
          <span>ship444@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Meta;
