import React, { useEffect, useRef, useState } from "react";
import styles from "./QuoteGenerateRateCards.module.css";
import Channel from "../../Assets/pair 1 svg.svg";
import { Skeleton } from "primereact/skeleton";

import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";

const QuoteGenerateRateCards = ({
  data,
  isLoading = false,
  removeHandler,
  warning,
  quoteId = 0,
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [confirmationpopup, setConfirmationpopup] = useState(false);

  const dimensionRef = useRef();

  useEffect(() => {
    let subscribe = true;
    const getData = () => {
      if (subscribe) {
        const getDimensions = () => ({
          width: dimensionRef.current.offsetWidth,
          height: dimensionRef.current.offsetHeight,
        });
        setDimensions(getDimensions());
      }
    };
    getData();
    return () => {
      subscribe = false;
    };
  }, []);

  const confirmationHandler = () => {
    setConfirmationpopup(true);
  };

  const deleteHandler = (id) => {
    removeHandler(id);
    setConfirmationpopup(false);
  };

  const ConfirmationPopup = {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: dimensions.height,
    width: dimensions.width,
    backgroundColor: "rgba(0, 0, 0, 0.600)",
    zIndex: 10,
  };

  return (
    <div className={styles.card} ref={dimensionRef}>
      {confirmationpopup && (
        <div style={ConfirmationPopup}>
          <div className={styles.confirmationPopup}>
            <div>
              <h1 className={styles.fileDelete}>
                {warning
                  ? "Minimum one rate required for quote modification."
                  : "Delete this Card ?"}
              </h1>
            </div>
            <div>
              <button
                className={styles.confirm}
                onClick={() => setConfirmationpopup(false)}
              >
                Close
              </button>
              {!warning && (
                <button
                  className={styles.cancel}
                  onClick={(e) => {
                    deleteHandler(data.objId);
                  }}
                >
                  Yes, Delete
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <div className={styles.left}>
        <span>
          {isLoading ? (
            <Skeleton width="8rem" height="2rem"></Skeleton>
          ) : (
            data.id
          )}
        </span>
        {isLoading ? (
          <Skeleton width="10rem" height="10rem" borderRadius="8px" />
        ) : (
          <div className={styles.logo}>
            <img src={data.carrierLogo} alt="liner-img" />
          </div>
        )}
        <span>
          {isLoading ? (
            <Skeleton width="3rem" height="2rem"></Skeleton>
          ) : (
            data.serviceType
          )}
        </span>
      </div>
      <div className={styles.center}>
        <div className={styles.top}>
          <img src={Channel} alt="ship-img" />
        </div>
        <div className={styles.bottom}>
          <div className={styles.channelDetails}>
            <span>Sailing Date</span>
            <span>
              {isLoading ? (
                <Skeleton width="5rem" height="2rem"></Skeleton>
              ) : (
                data.sailingDate
              )}
            </span>
          </div>
          <div className={styles.channelDetails}>
            <span>Transit Time</span>
            <span>
              {isLoading ? (
                <Skeleton width="5rem" height="1.5em"></Skeleton>
              ) : (
                data.transitTimeInDays && "-"
              )}
            </span>
          </div>
          <div className={styles.channelDetails}>
            <span>Free Days</span>
            {isLoading ? (
              <Skeleton width="3rem" height="1.5rem"></Skeleton>
            ) : (
              "-"
            )}
            <span></span>
          </div>
          <div className={styles.channelDetails}>
            <span>Cargo</span>
            <span>
              {isLoading ? (
                <Skeleton width="3rem" height="1.5rem"></Skeleton>
              ) : (
                data.commodity
              )}
            </span>
          </div>
          <div className={styles.channelDetails}>
            <span>Rates by Forwarder</span>
            <span>{"XYZ Forwarder"}</span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.center}>
          <span style={{ fontWeight: "600", fontSize: "1rem", color: "#000" }}>
            Total USD
          </span>
          <span>
            {isLoading ? (
              <Skeleton width="5rem" height="2rem"></Skeleton>
            ) : (
              data.totalUSDAmount?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            )}
          </span>
          <div className={styles.bottom}>
            {quoteId === 0 ? (
              <div className={styles.quoteSummaryActions}>
                <span>
                  <MdContentCopy className={styles.icon} />
                </span>
                <span>
                  <FaTrash
                    className={styles.icon}
                    onClick={confirmationHandler}
                  />
                </span>
                <span>
                  <MdEdit className={styles.icon} />
                </span>
              </div>
            ) : (
              <div className={styles.quotesAction}>
                <button className={styles.deleteBtn}>Delete</button>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.bookNow}>Book Now</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteGenerateRateCards;
