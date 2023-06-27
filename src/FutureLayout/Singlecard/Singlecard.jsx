import React, { useEffect, useState } from "react";
import styles from "./Singlecard.module.css";
// import CarrierImage from "../../Assets/image (10).png";

const Singlecard = ({ data, setDataList, setCardSelected }) => {
  const [isData, setData] = useState([]);

  useEffect(() => {
    let subscribe = true;
    const getData = () => {
      if (subscribe) {
        setData(data);
      }
    };
    getData();
    return () => {
      subscribe = false;
    };
  }, [data]);

  const showQuoteCard = (data) => {
    setDataList(data);
    setCardSelected(true);
  };

  return (
    <>
      <div className={styles.card} onClick={() => showQuoteCard(isData)}>
        <div className={styles.singleCard}>
          <div className={styles.quotesId}>
            <span>{isData?.quoteId}</span>
            <span>Active</span>
          </div>
          <div className={styles.SailingDate}>
            <span>20GP x1 +3</span>
          </div>
          <div className={styles.transitTime}>
            <span>12 Feb 2023</span>
          </div>
          <div className={styles.customer}>
            <span>Test Customer</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singlecard;
