import React, { useState } from "react";
import styles from "./Details.module.css";
import { Button } from "primereact/button";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { BsGraphUp } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import Charges from "../Charges/Charges";
import Remarks from "../Remarks/Remarks";

const Details = ({ set }) => {
  const [charge, setCharge] = useState("charge");
  const [close, setClose] = useState(true);

  return (
    <div className={styles.details}>
      <div className={styles.header}>
        <h2>Details</h2>
        <span>
          <GrClose
            onClick={() => setClose(false)}
            className={styles.closeBtn}
          />
        </span>
      </div>
      <div className={styles.liner}>
        <span className={styles.linerLogo}>
          <img
            src="https://s3.amazonaws.com/storage-dir-fb%2Fsub_vendors%2Flogo%2Fsv-b2d6a2941b7c/sv-b2d6a2941b7c.PNG"
            alt="liner-img"
          />
        </span>
        <span className={styles.linerDetails}>
          <span>Service</span>
          <span>CY/CY</span>
        </span>
        <span className={styles.linerDetails}>
          <span>Contract ID</span>
          <span>Contract 124555</span>
        </span>
        <span className={styles.linerDetails}>
          <span>Sailing Date</span>
          <span>-</span>
        </span>
        <span className={styles.linerDetails}>
          <span>Transit Time</span>
          <span>-</span>
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
      <div className={styles.types}>
        <div
          onClick={() => setCharge("charge")}
          className={charge === "charge" ? `${styles.active}` : ""}
        >
          <span>Charges</span>
        </div>
        <div
          onClick={() => setCharge("remarks")}
          className={charge === "remarks" ? `${styles.active}` : ""}
        >
          <span>Remarks & Inclusion</span>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        {charge === "charge" ? <Charges /> : <Remarks />}
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

export default Details;
