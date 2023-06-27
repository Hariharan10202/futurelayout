import React from "react";
import styles from "./ListingSection.module.css";
import InstantRates from "../InstantRates/InstantRates";
import Quotes from "../Quotes/Quotes";
import Shipments from "../Shipments/Shipments";

const ListingSection = ({
  section,
  rate,
  setRate,
  setVisible,
  isVisible,
  setShowFooter,
  setQuotes,
  setCardSelected,
}) => {
  return (
    <div className={styles.container}>
      {section === 1 ? (
        <InstantRates
          setShowFooter={setShowFooter}
          setVisible={setVisible}
          isVisible={isVisible}
          setRate={setRate}
          rate={rate}
        />
      ) : section === 2 ? (
        "Inquiry"
      ) : section === 3 ? (
        <Quotes setCardSelected={setCardSelected} setQuotes={setQuotes} />
      ) : (
        <Shipments />
      )}
    </div>
  );
};

export default ListingSection;
