import React from "react";
import styles from "./ShipmentsContainer.module.css";
import Shipments from "../Shipments/Shipments";

import ShipmentsDetail from "../ShipmentsDetails/ShipmentsDetail";

const ShipmentsContainer = () => {
  return (
    <div className={styles.ShipmentsContainer}>
      <Shipments />
      <ShipmentsDetail />
    </div>
  );
};

export default ShipmentsContainer;
