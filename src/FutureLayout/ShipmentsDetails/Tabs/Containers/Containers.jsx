import React from "react";
import styles from "./COntainers.module.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Containers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <span>Container</span>
      </div>
      <div className={styles.content}>
        <div className={styles.containerBody}>
          <div className={styles.inputFields}>
            <div className={styles.serialNo}>
              <span>SN</span>
              <span>1</span>
            </div>
            <div>
              <span>Type</span>
              <InputText />
            </div>
            <div>
              <span>Container Number</span>
              <InputText />
            </div>
            <div>
              <span>Seal Number</span>
              <InputText />
            </div>
            <div>
              <span>MBL Number</span>
              <InputText />
            </div>
            <div>
              <span>HBL Number</span>
              <InputText />
            </div>
            <div>
              <span>Empty Container Pickup</span>
              <InputText />
            </div>
            <div>
              <span>Empty Container Dropoff</span>
              <InputText />
            </div>
            <div>
              <span>Company</span>
              <InputText />
            </div>
          </div>
          <div className={styles.containerCTA}>
            <Button label="Save" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Containers;
