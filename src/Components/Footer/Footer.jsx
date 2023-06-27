import React from "react";
import styles from "./Footer.module.css";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { updateQuotes } from "../../Redux/quoteSlice";

const Footer = ({ rateProduct }) => {
  const dispatch = useDispatch();

  const quoteHandler = () => {
    dispatch(updateQuotes(rateProduct));
    console.log(rateProduct);
  };

  return (
    <div className={styles.counter}>
      <div className={styles.left}>
        <span>{rateProduct.length}</span>
        <span>Rate Card Selected</span>
      </div>
      <div className={styles.right}>
        <span>Remove All</span>
        <Button
          style={{ color: "white", borderColor: "white" }}
          label="Download Rates"
          className="p-button-outlined p-button-secondary"
        />
        <Link to="/quotesummary">
          <Button label="Provide Quote Details" onClick={quoteHandler} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
