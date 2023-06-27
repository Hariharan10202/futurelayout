import React, { useEffect } from "react";
import styles from "./QuotesDetails.module.css";
import { Timeline } from "primereact/timeline";
import "./flags.css";
import { FaDownload } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { BsAlarm } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import QuoteGenerateRateCards from "../QuoteGenerateRateCards/QuoteGenerateRateCards";
import { useState } from "react";

const QuotesDetails = ({ quoteCards, cardSelected }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let subscribe = true;
    subscribe && setData(quoteCards.quotes);
    return () => {
      subscribe = false;
    };
  }, [quoteCards, quoteCards.quoteId]);

  const events = [
    {
      status: "Ordered",
      date: "15/10/2020 10:30",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      status: "Processing",
      date: "15/10/2020 14:00",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      status: "Shipped",
      date: "15/10/2020 16:15",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
    {
      status: "Delivered",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ];

  const customizedContent = (item) => {
    return (
      <div className={styles.TimelineContent}>
        <span>{item.date}</span>
        <span>{item.status}</span>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.quoteHeader}>
        <div>
          <span>FCL</span>
          <span>XYZFULIWB81</span>
          <span>hariharan : 28 Feb 2023 MM - HH</span>
        </div>
        <div className={styles.actionsContainer}>
          <div>
            <span>
              <FaDownload className={styles.quotesAction} />
              <span>Download Quote </span>
            </span>
          </div>
          <div>
            <span>
              <BsFillBookmarkFill className={styles.quotesAction} />
              <span>Saved Template</span>
            </span>
          </div>
          <div>
            <span>
              <MdContentCopy className={styles.quotesAction} />
              <span>Copy Quote</span>
            </span>
          </div>
          <div>
            <span>
              <BsAlarm className={styles.quotesAction} />
              <span>7 Mar 2023</span>
            </span>
          </div>
          <div>
            <span>
              <BiDollar className={styles.quotesAction} />
              <span>Request Better Rate</span>
            </span>
          </div>
          <div>
            <span>
              <FiActivity className={styles.quotesAction} />
              <span>View Activity</span>
            </span>
          </div>
          <div>
            <span>
              <MdEdit className={styles.quotesAction} />
              <span>Edit</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.quotesDetails}>
        <div className={styles.quoteCardspoint}>
          <div>
            <div>
              <span>Origin</span>
              <span>INNSA / Jawaharlal Nehru</span>
            </div>
            <div>
              <span>Destination</span>
              <span>DEHAM / Hemburg</span>
            </div>
            <div>
              <span>Load Details</span>
              <span>20GP x 1</span>
            </div>
            <div>
              <span>Cargo Type</span>
              <span>N/A</span>
            </div>
            <div>
              <span>INCO Terms</span>
              <span>N/A</span>
            </div>
            <div>
              <span>Customs</span>
              <span>No</span>
            </div>
            <div>
              <span>Stuffing</span>
              <span>Factory</span>
            </div>
            <div>
              <span>Period</span>
              <span>7 Mar 2023 - 10 Feb 2024</span>
            </div>
            <div>
              <span>Sales Coordinator</span>
              <span>Hariharan</span>
            </div>
            <div>
              <span>Terms and Conditions</span>
              <span>Hariharan</span>
            </div>
          </div>
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            <span>Created On</span>
            <span>7 Mar 2023</span>
          </div>
          <div className={styles.details}>
            <span>Sales Person</span>
            <span>Hariharan T</span>
          </div>
          <div className={styles.details}>
            <span>Customer</span>
            <span>Test</span>
          </div>
          <div className={styles.details}>
            <span>Inquiry No.</span>
            <span>INQ 293473</span>
          </div>
          <div className={styles.details}>
            <span>Search Reference</span>
            <span>INNSA, to DEHAM</span>
          </div>
          <div className={styles.details}>
            <span>CC Mail</span>
            <span>N/A</span>
          </div>
        </div>
      </div>
      <div className={styles.quotesList}>
        <div>
          <div className={styles.Cards}>
            <div className={styles.newCard}>
              <span>+ Add New Rate Card </span>
            </div>
            <>
              {!cardSelected ? (
                <div className={styles.info}>
                  <span>Select the Quotes</span>
                </div>
              ) : (
                <>
                  <div className={styles.resultsCount}>
                    <div>
                      <span>{quoteCards.quotes?.length}</span>
                      <span>Rates Shared</span>
                    </div>
                  </div>

                  <div className={styles.cardLists}>
                    {data?.map((quote, index) => (
                      <QuoteGenerateRateCards
                        quoteId={quoteCards.quoteId}
                        key={index}
                        data={quote}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          </div>
          <div className={styles.activityMonitor}>
            <Timeline value={events} content={customizedContent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotesDetails;
