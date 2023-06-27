import React from "react";
import styles from "./Quotes.module.css";
import { FileUpload } from "primereact/fileupload";

const Quotes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.header}>
          <span>QUOTES</span>
        </div>
        <div className={styles.quotesContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam
          eos obcaecati? Eius laudantium dolorum modi ipsa veritatis, corporis
          vel!
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightHeader}>
          <span>UPLOADED QUOTES</span>
        </div>
        <div className={styles.rightContent}>
          <div>
            <FileUpload
              mode="basic"
              name="demo[]"
              url="/api/upload"
              accept="image/*"
              maxFileSize={1000000}
              chooseLabel="Upload"
            />
            <span>Max 1 File at a time</span>
          </div>
          <div>
            <span>Please upload</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
