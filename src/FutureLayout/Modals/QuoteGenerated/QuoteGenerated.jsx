import React, { useEffect, useRef, useState } from "react";
import { Dialog } from "primereact/dialog";
import styles from "./QuoteGenerated.module.css";
import "./styles.css";
import { HiCheckCircle } from "react-icons/hi";
import { Button } from "primereact/button";

import { ProgressBar } from "primereact/progressbar";
import { useNavigate } from "react-router-dom";

const QuoteGenerated = ({
  visible,
  setModal,
  inquiryID,
  setIsFooterVisible,
}) => {
  const [value, setValue] = useState(0);
  const interval = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    let _val = value;

    interval.current = setInterval(() => {
      _val += Math.floor(Math.random() * 10) + 1;
      if (_val >= 100) {
        _val = 100;

        clearInterval(interval.current);
      }
      setValue(_val);
    }, 400);

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = null;
      }
    };
  }, [visible, value]);

  const viewQuoteHandler = () => {
    navigate("/quotes");
    setIsFooterVisible(false);
    setModal(false);
  };

  return (
    <div>
      <Dialog
        header="Quote Generate"
        visible={visible}
        onHide={() => setModal(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <div className={styles.container}>
          <div className={styles.body}>
            <span>
              <HiCheckCircle className={styles.generated} />
            </span>
            <span>You have successfully generated quote for</span>
            <span>
              Inquiry ID :
              <span className={styles.quoteId}>INQ {inquiryID}</span>
            </span>
            <span>Note: Email not sent to customer</span>
          </div>
          <div className={styles.footer}>
            <div className={styles.progress}>
              <span className={styles.pdfprogressText}>
                Downloadable quotation (PDF Format) is{" "}
                {value !== 100 ? "progressing" : "ready"}
              </span>
              <ProgressBar value={value}></ProgressBar>
            </div>
            <div className={styles.modalActions}>
              <Button
                onClick={viewQuoteHandler}
                label="View Quote"
                icon="pi pi-eye"
                loading={value !== 100 && true}
                className="p-button-outlined"
              />
              <Button
                label="Download PDF"
                icon="pi pi-download"
                loading={value !== 100 && true}
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default QuoteGenerated;
