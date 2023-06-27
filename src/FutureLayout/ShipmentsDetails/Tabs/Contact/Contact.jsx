import React from "react";
import styles from "./Contact.module.css";
import { MdModeEditOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.source}>
        <div className={styles.sourceHeader}>
          <span>SOURCE</span>
        </div>
        <div className={styles.sourceContent}>
          <div>
            <span>Rate Provider:</span>
            <span>N/A</span>
          </div>
          <div>
            <span>Contact:</span>
            <span>N/A</span>
          </div>
          <div>
            <span>Email:</span>
            <span>N/A</span>
          </div>
        </div>
      </div>
      <div className={styles.management}>
        <div className={styles.managementHeader}>
          <span>Management</span>
          <MdModeEditOutline className={styles.editIcon} />
        </div>
        <div className={styles.managementContent}>
          <div>
            <span>Shipment Specialist</span>
            <span>N/A</span>
          </div>
          <div>
            <span>Documentation Expert</span>
            <span>N/A</span>
          </div>
          <div>
            <span>Forwarder/Customer success Manager</span>
            <span>N/A</span>
          </div>
        </div>
      </div>
      <div className={styles.agentDetails}>
        <div className={styles.agentsHeader}>
          <span>Agents</span>
        </div>
        <div className={styles.agentsContent}>
          <div>
            <span>Agent Name</span>
            <span>N/A</span>
          </div>
          <div>
            <span>Agent Type</span>
            <span>N/A</span>
          </div>
          <div>
            <span>Mobile</span>
            <span>N/A</span>
          </div>
          <div>
            <span>Phone</span>
            <span>N/A</span>
          </div>
          <div>
            <span>Email</span>
            <span>N/A</span>
          </div>
          <div>
            <span>Contact Person</span>
            <span>N/A</span>
          </div>
          <div>
            <span>City</span>
            <span>N/A</span>
          </div>
          <div>
            <span>Country</span>
            <span>N/A</span>
          </div>
          <div>
            <span>Address</span>
            <span>N/A</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
