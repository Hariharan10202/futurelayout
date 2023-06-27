import React from "react";
import styles from "./Tabs.module.css";
import { TabView, TabPanel } from "primereact/tabview";
import Charges from "../Charges/Charges";
import Remarks from "../Remarks/Remarks";

const Tabs = () => {
  return (
    <div className={styles.container}>
      <TabView>
        <TabPanel header="Schedule">Schedule</TabPanel>
        <TabPanel header="Charges">
          <div className={styles.innerContainer}>
            <Charges />
          </div>
        </TabPanel>
        <TabPanel header="Remarks">
          <div className={styles.innerContainer}>
            <Remarks />
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default Tabs;
