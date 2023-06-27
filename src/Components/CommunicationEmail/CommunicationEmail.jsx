import React, { useState } from "react";
import styles from "./CommunicationEmail.module.css";

import { InputSwitch } from "primereact/inputswitch";

const CommunicationEmail = () => {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.dataPoints}>
        <div className={styles.checkField}>
          <span>Document Submit Required</span>
          <div>
            <span>No</span>
            <InputSwitch
              checked={checked}
              onChange={(e) => setChecked(e.value)}
            />
            <span>Yes</span>
          </div>
        </div>
        <div className={styles.inputField}>
          <span>Document Submit Email*</span>
          <input type="text" />
        </div>
        <div className={styles.inputField}>
          <span>Common Email*</span>
          <input type="text" />
        </div>
        <div className={styles.inputField}>
          <span>Shared Rate Receivers</span>
          <textarea type="text" placeholder="Write email then Enter" />
        </div>
        <div className={styles.checkField}>
          <span>Document Submit Required</span>
          <div>
            <span>No</span>
            <InputSwitch
              checked={checked1}
              onChange={(e) => setChecked1(e.value)}
            />
            <span>Yes</span>
          </div>
        </div>
        <div className={styles.inputField}>
          <span>Send Shipment Booking Confirmation</span>
          <input type="text" />
        </div>
        <div className={styles.inputField}>
          <span>Sender Name*</span>
          <input type="text" />
        </div>
      </div>
      <div className={styles.footer}>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default CommunicationEmail;
