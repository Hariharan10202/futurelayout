import React, { useEffect, useState } from "react";
import styles from "./Quote.module.css";

import { Button } from "primereact/button";
import { FiDownload } from "react-icons/fi";

import Singlecard from "../Singlecard/Singlecard";
import Dropdown from "../Dropdown/Dropdown";

import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

import { FaUserAlt } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { InputSwitch } from "primereact/inputswitch";
import { Checkbox } from "primereact/checkbox";

import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { Box } from "@mui/material";

import AddModal from "../AddModal/AddModal";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const QuoteSummary = () => {
  const [data, setData] = useState([]);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [visible, setVisible] = useState(false);

  const [quotes, setQuotes] = useState([]);

  const quotesData = useSelector((state) => state.quotes.data);

  const location = useLocation();

  useEffect(() => {
    let subscribed = true;
    const quotesHandler = () => {
      if (subscribed) {
        setQuotes(quotesData);
      }
    };
    quotesHandler();
    return () => {
      subscribed = false;
    };
  }, [quotesData]);

  const removeHandler = (id) => {
    const filteredData = quotes.filter((item) => {
      return item.id !== id;
    });
    setQuotes(filteredData);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    height: "535px",
    bgcolor: "white",
    boxShadow: 24,
    borderRadius: 4,
  };

  const inputHandler = (event) => {
    const value = event.target.value;
    const id = event.target.id;
    setData({ ...data, [id]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handleClose = () => {
    setVisible(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.summaryHeader}>
        <div>
          <span>Quote Summary</span>
        </div>
        <div>
          <span>Remove All</span>
          <span>
            <Button
              className={`${styles.downloadBtn} p-button-outlined p-button-secondary`}
            >
              <FiDownload className={styles.downloadIcon} />
              Download
            </Button>
          </span>
        </div>
      </div>
      <div className={styles.summary}>
        <div className={styles.linerCards}>
          {quotes?.map((data, index) => (
            <Singlecard
              removeHandler={removeHandler}
              key={index}
              data={data}
              actions={location.pathname}
            />
          ))}
        </div>
        <div className={styles.quoteDetails}>
          <div className={styles.header}>
            <span>Quote Details</span>
          </div>
          <form className={styles.quoteForm} onSubmit={submitHandler}>
            <div className={styles.inputField}>
              <span>
                <FaUserAlt /> Sales Person
              </span>
              <InputText id="salesPersonName" onChange={inputHandler} />
            </div>
            <div className={styles.inputField}>
              <span>
                <BsCalendar2DateFill />
                Quote Period
              </span>
              <Calendar
                id="quotePeriod"
                onChange={inputHandler}
                selectionMode="range"
                readOnlyInput
              />
            </div>
            <div className={styles.inputField}>
              <span>
                <FaUserCircle /> Customer Details
              </span>
              <Dropdown setVisible={setVisible} />
            </div>
            <div className={styles.inputField}>
              <span>
                <AiFillMail /> CC Email
              </span>
              <InputText id="cc-email" onChange={inputHandler} />
            </div>
            <div className={styles.switchField}>
              <span>Customes</span>
              <span>No</span>
              <InputSwitch
                checked={checked1}
                id="customs"
                onChange={(e) => {
                  setChecked1(!checked1);
                  setData({ ...data, [e.target.id]: e.value });
                }}
              />
              <span>Yes</span>
            </div>
            <div className={styles.checkboxField}>
              <span>
                <Checkbox
                  id="allSelectedCharges"
                  checked={checked2}
                  inputId="binary"
                  onChange={(e) => {
                    setChecked2(!checked2);
                    setData({ ...data, [e.target.id]: e.checked });
                  }}
                />
                <label htmlFor="binary">Show all selected charges</label>
              </span>
              <span>
                <Checkbox
                  id="printSchedule"
                  checked={checked3}
                  inputId="binary"
                  onChange={(e) => {
                    setChecked3(!checked3);
                    setData({ ...data, [e.target.id]: e.checked });
                  }}
                />
                <label htmlFor="binary">Print schedule on PDF</label>
              </span>
            </div>
            <div className={styles.checkboxField}>
              <span>
                <Checkbox
                  id="allSelectedCharges1"
                  checked={checked4}
                  inputId="binary"
                  onChange={(e) => {
                    setChecked4(!checked4);
                    setData({ ...data, [e.target.id]: e.checked });
                  }}
                />
                <label htmlFor="binary">Show all selected charges</label>
              </span>
            </div>
            <Button className={styles.generateQuoteBtn}>Generate Quote</Button>
          </form>
        </div>
      </div>
      <Modal
        keepMounted
        open={visible}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
        <Fade in={visible} timeout={200}>
          <Box sx={style}>
            <AddModal setVisible={setVisible} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default QuoteSummary;
