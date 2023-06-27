import React, { useState } from "react";

import { Dropdown } from "primereact/dropdown";
import { HiArrowNarrowRight } from "react-icons/hi";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./accordion.module.css";
import { useRef } from "react";

const AccordionPanel = ({ header, subtext }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [selectedCurrency1, setSelectedCurrency1] = useState(null);

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const numRef = useRef(null);

  const countries = [
    { name: "Afghan", code: "AFN" },
    { name: "Albania", code: "ALL" },
    { name: "Armenia", code: "AMD" },
    { name: "Egypt", code: "EG" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "India", code: "IN" },
    { name: "Japan", code: "JP" },
    { name: "Spain", code: "ES" },
    { name: "United States", code: "US" },
  ];

  const validateHandler = () => {
    if (numRef.current.value < 0) {
      setError(true);
      setErrorMsg("Value should be 0 and 100");
    } else if (!numRef.current.value) {
      setError(true);
      setErrorMsg("Please Enter the value");
    } else {
      setError(false);
    }

    console.log(numRef.current.value);
  };

  const onCountryChange = (e) => {
    setSelectedCountry(e.value);
    setSelectedCurrency(e.value);
    setSelectedCurrency1(e.value);
  };

  console.log(error);

  return (
    <Accordion className={styles.container}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <span className={styles.AccordionHeader}>
          <span className={styles.Accordiontext}>{header}</span>
          {subtext && <span className={styles.subtext}>{subtext}</span>}
        </span>
      </AccordionSummary>
      <AccordionDetails className={styles.details}>
        <Typography component="span">
          {header === "Base Currency" ? (
            <Dropdown
              value={selectedCountry}
              options={countries}
              onChange={onCountryChange}
              optionLabel="name"
              filter
              showClear
              filterBy="name"
              placeholder="Select Currency"
            />
          ) : header === "Mark up" ? (
            <div className={styles.markup}>
              <span>Enter Currency Conversion Markup Percentage</span>
              <span className={styles.NumInputContainer}>
                <input
                  className={
                    error
                      ? `${styles.inputError} ${styles.numInput}`
                      : `${styles.inputSucces} ${styles.numInput}`
                  }
                  onChange={validateHandler}
                  ref={numRef}
                  type="number"
                />
                <span>%</span>
              </span>
              <span
                className={error ? `${styles.error}` : `${styles.hideError}`}
              >
                {error && <>{errorMsg}</>}
              </span>
            </div>
          ) : (
            <div className={styles.mappingContainer}>
              <div className={styles.mappingHeader}>
                <div>
                  <span>Mapping Currency</span>
                </div>
                <div>
                  <span>Actions</span>
                </div>
              </div>
              <div className={styles.mappingInput}>
                <Dropdown
                  value={selectedCurrency}
                  options={countries}
                  onChange={onCountryChange}
                  optionLabel="name"
                  filter
                  showClear
                  filterBy="name"
                  placeholder="Select Currency"
                />
                <input
                  className={`${styles.numInput} ${styles.disabled}`}
                  type="number"
                />
                <span className={styles.equals}>=</span>
                <Dropdown
                  value={selectedCurrency1}
                  options={countries}
                  onChange={onCountryChange}
                  optionLabel="name"
                  filter
                  showClear
                  filterBy="name"
                  placeholder="Select Currency"
                />
                <input className={`${styles.numInput}`} type="number" />
              </div>
            </div>
          )}
        </Typography>
      </AccordionDetails>
      <div className={styles.footer}>
        <button>
          Save <HiArrowNarrowRight />
        </button>
      </div>
    </Accordion>
  );
};

export default AccordionPanel;
