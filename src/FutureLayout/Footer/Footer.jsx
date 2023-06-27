import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import { Button } from "primereact/button";
// import { Link } from "react-router-dom";
import { Checkbox } from "primereact/checkbox";
import QuoteGenerated from "../Modals/QuoteGenerated/QuoteGenerated";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = ({ isVisible, setIsFooterVisible, path }) => {
  const [checked, setChecked] = useState(true);
  const [modal, setModal] = useState(false);
  const [inquiryID, setInquiryID] = useState(null);
  const [quoteID, setQuoteID] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  console.log(path);

  const checkHandler = (e) => {
    setChecked(e.checked);
  };

  function numberToLetterSequence(num) {
    const digits = String(num).split("");
    const letterSequence = digits.map((digit) =>
      String.fromCharCode(parseInt(digit) + 64)
    );
    return letterSequence.join("");
  }

  useEffect(() => {
    const inquiryID = new Date().getTime();
    const inquiryLength = String(inquiryID).length - 1;
    const trimmedinquiryID = parseInt(
      String(inquiryID).substr(inquiryLength - 8, 8)
    );

    const quoteLength = String(inquiryID).length - 1;
    const trimmedquoteId = String(inquiryID).substr(quoteLength - 8, 8);
    const convertedQuoteID = numberToLetterSequence(trimmedquoteId);

    setQuoteID("XYZ" + convertedQuoteID);
    setInquiryID(trimmedinquiryID);

    return () => {};
  }, []);

  const generateIdHandler = async () => {
    setModal(true);
    let newObj = {};
    const currentDate = new Date();
    const date = currentDate.getDate();
    const monthName = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();
    const createdDate = `${date} ${monthName} ${year}`;
    newObj.createdOn = createdDate;
    newObj.quotes = isVisible;
    newObj.Id = new Date().getTime();
    newObj.quoteId = quoteID;
    await setDoc(doc(db, "quotes", newObj.quoteId), newObj);
  };

  return (
    <>
      {modal && (
        <QuoteGenerated
          setIsFooterVisible={setIsFooterVisible}
          inquiryID={inquiryID}
          visible={modal}
          quoteID={quoteID}
          setModal={setModal}
          setLoading={setLoading}
        />
      )}
      <div className={styles.counter}>
        <div className={styles.left}>
          <span>{isVisible.length}</span>
          <span>Rate Card Selected</span>
        </div>
        <div className={styles.right}>
          {path === "/rates" ? (
            <>
              <span>Remove All</span>
              <Button
                style={{ color: "white", borderColor: "white", height: "36px" }}
                label="Download Rates"
                className="p-button-outlined p-button-secondary"
              />
              <Button
                label="Provide Quote Details"
                onClick={() => {
                  navigate(`/quotegenerate/${quoteID}`);
                }}
              />
            </>
          ) : (
            <>
              <div className={styles.checkbox}>
                <Checkbox
                  inputId="checkbox1"
                  onChange={checkHandler}
                  checked={checked}
                />
                <label htmlFor="checkbox1" color="white">
                  Send notifications to shipper
                </label>
              </div>

              <div className={styles.checkbox}>
                <Checkbox
                  inputId="checkbox2"
                  onChange={checkHandler}
                  checked={checked}
                />
                <label htmlFor="checkbox2">Print Schedule PDF</label>
              </div>
              <div className={styles.checkbox}>
                <Checkbox
                  inputId="checkbox3"
                  onChange={checkHandler}
                  checked={checked}
                />
                <label htmlFor="checkbox3">Show All selected charges</label>
              </div>
              <Button label="Generate Quote" onClick={generateIdHandler} />
            </>
          )}
        </div>
      </div>{" "}
    </>
  );
};

export default Footer;
