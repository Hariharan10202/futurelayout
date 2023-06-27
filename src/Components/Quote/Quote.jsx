import React from "react";
import styles from "./Quote.module.css";

import { BsArrowLeft } from "react-icons/bs";
import { FcDownload } from "react-icons/fc";
import { BiDollar, BiStats } from "react-icons/bi";
import { MdContentCopy, MdModeEditOutline } from "react-icons/md";
import { ImAlarm } from "react-icons/im";
import Meta from "../Meta/Meta";

import { IoAddCircleOutline } from "react-icons/io5";
import { Timeline } from "antd";

import "./Temp.css";

const Quote = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.upperContainer}>
        <div className={styles.upperContainerLeft}>
          <div>
            <BsArrowLeft className={styles.arrowIcon} />
          </div>
          <div>
            <span>Quotes/</span>
            <span>XYZ728380</span>
          </div>
        </div>
        <div className={styles.upperContainerRight}>
          <div className={styles["btn-icon"]}>
            <span>
              <FcDownload className={styles.upperContainerIcon} />
              <span>Download Quote</span>
            </span>
          </div>
          <div className={styles["btn-icon"]}>
            <span>
              <BiDollar className={styles.upperContainerIcon} />
              <span>Request Better Rates</span>
            </span>
          </div>
          <div className={styles["btn-icon"]}>
            <span>
              <MdContentCopy className={styles.upperContainerIcon} />
              <span>Copy Quote</span>
            </span>
          </div>
          <div className={styles["btn-icon"]}>
            <span>
              <ImAlarm className={styles.upperContainerIcon} />
              <span>Set Remainder</span>
            </span>
          </div>
          <div className={styles["btn-icon"]}>
            <span>
              <MdModeEditOutline className={styles.upperContainerIcon} />
              <span>Edit</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <Meta />
        <div className={styles.middleContainer}>
          <div className={styles.rateContainer}>
            <div>
              <IoAddCircleOutline className={styles.addbtn} />
              <span>Add New Rates</span>
            </div>
          </div>
        </div>
        <div className={styles.activityMonitor}>
          <div className={styles.header}>
            <span>
              <BiStats className={styles.monitorIcon} />
            </span>
            <span>Activity Monitor</span>
          </div>
          <hr className={styles.line} />
          <div className={styles.monitor}>
            <Timeline className="timelineMonitor">
              <Timeline.Item className={styles.timelineItem} color="#49ADF5">
                <div className={styles.timeline}>
                  <span>Quotation created </span>
                  <span>57 minutes ago | FWD TEST NEW ADMIN</span>
                </div>
              </Timeline.Item>
              <Timeline.Item color="#49ADF5">
                <div className={styles.timeline}>
                  <span>Quotation Status Changed to Active</span>
                  <span>57 minutes ago | FWD TEST NEW ADMIN</span>
                </div>
              </Timeline.Item>
              <Timeline.Item color="#49ADF5">
                <div className={styles.timeline}>
                  <span>Quotation Status Changed to Active</span>
                  <span>57 minutes ago | FWD TEST NEW ADMIN</span>
                </div>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
