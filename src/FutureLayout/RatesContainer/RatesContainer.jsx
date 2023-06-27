import React, { useState, useEffect } from "react";
import styles from "./RatesContainer.module.css";
import InstantRates from "../InstantRates/InstantRates";
import RateDetail from "../RateDetails/RateDetail";
import { useLocation } from "react-router-dom";

const RatesContainer = ({
  setShowFooter,
  setVisible,
  isVisible,
  setRate,
  rate,
  showFooter,
  setCurrentPath,
}) => {
  const [view, setView] = useState("Card");

  const path = useLocation();

  useEffect(() => {
    setCurrentPath(path.pathname);
    return () => {};
  }, [path.pathname, setCurrentPath]);

  return (
    <div className={styles.RatesContainer}>
      <div
        className={
          view === "Table"
            ? `${styles.listingContainer} ${styles["width-full"]}`
            : `${styles.listingContainer}`
        }
      >
        <InstantRates
          view={view}
          setView={setView}
          setShowFooter={setShowFooter}
          setVisible={setVisible}
          isVisible={isVisible}
          setRate={setRate}
          rate={rate}
        />
      </div>
      {view === "Card" && (
        <div>
          <RateDetail
            isVisible={isVisible}
            showFooter={showFooter}
            rate={rate}
          />
        </div>
      )}
    </div>
  );
};

export default RatesContainer;
