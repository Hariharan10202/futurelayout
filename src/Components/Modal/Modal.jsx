import React, { useState } from "react";
import styles from "./Modal.module.css";
import { BsGraphUp } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import Charges from "../Charges/Charges";
import Remarks from "../Remarks/Remarks";
import { Button } from "primereact/button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Schedules from "../Schedules/Schedules";
// import { cardData } from "../../Data";

const ModalWindow = ({ setIsModalVisible, chargesDetails }) => {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.details}>
      <div className={styles.header}>
        <h2>Details</h2>
        <GrClose
          className={styles.closeBtn}
          onClick={() => setIsModalVisible(false)}
        />
      </div>
      <div className={styles.liner}>
        <span className={styles.linerLogo}>
          <span>{chargesDetails.carrierName}</span>
        </span>
        -
        <span className={styles.linerDetails}>
          <span>Service</span>
          <span>{chargesDetails.serviceType}</span>
        </span>
        <span className={styles.linerDetails}>
          <span>Contract ID</span>
          <span>Contract 124555</span>
        </span>
        <span className={styles.linerDetails}>
          <span>Sailing Date</span>
          <span>{chargesDetails.sailingDate}</span>
        </span>
        <span className={styles.linerDetails}>
          <span>Transit Time</span>
          <span>{chargesDetails.transitTimeInDays}</span>
        </span>
        <span className={styles.linerDetails}>
          <span>Free Days</span>
          <span>41 Days</span>
        </span>
        <span className={styles.linerDetails}>
          <span>Expiry Date</span>
          <span>30 Nov 2022</span>
        </span>
      </div>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Schedules" />
          <Tab value="two" label="Charges" />
          <Tab value="three" label="Remarks & Inclusions" />
        </Tabs>
      </Box>
      <div className={styles.lowerContainer}>
        {value === "one" ? (
          <Schedules schedules={chargesDetails.routeSchedule} />
        ) : value === "two" ? (
          <Charges charges={chargesDetails.charges} />
        ) : (
          <Remarks />
        )}
        <div className={styles.footerSection}>
          <div className={styles.buyRate}>
            <span>BUY RATE</span> <span>USD 1.57</span>
          </div>
          <div className={styles.sellRate}>
            <span>SELL RATE</span> <span>USD 1.57</span>
          </div>
          <div className={styles.marginAction}>
            <div className={styles.margin}>
              <span>
                <BsGraphUp className={styles.graphLine} /> You earn USD 0.00
                0.00 % on this rate
              </span>
              <span>
                View Exchange Rates
                <BsArrowRight className={styles.arrow} />
              </span>
            </div>
            <div className={styles.actionBtn}>
              <Button label="Proceed Booking" className="p-button-outlined" />
              <Button>Confirm</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
