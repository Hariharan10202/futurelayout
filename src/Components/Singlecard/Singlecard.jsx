import React, { useEffect, useRef, useState } from "react";
import styles from "./Singlecard.module.css";
import Channel from "../../Assets/pair 1 svg.svg";
import { Skeleton } from "primereact/skeleton";

const Singlecard = ({
  setIsModalVisible,
  data,
  isLoading = false,
  setChargesDetails = [],
  actions,
  removeHandler,
}) => {
  const showModal = (data) => {
    setChargesDetails(data);
    setIsModalVisible(true);
  };

  const [isData, setData] = useState([]);
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
        setData(data);
      }
    };
    getData();
    return () => {
      subscribe = false;
    };
  }, [data]);

  const confirmationHandler = () => {
    setConfirmationpopup(true);
  };

  const deleteHandler = (id) => {
    setConfirmationpopup(false);
    removeHandler(id);
  };

  const ConfirmationPopup = {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: dimensions.height,
    width: dimensions.width,
    backgroundColor: "rgba(0, 0, 0, 0.600)",
    // zIndex: 10,
  };

  return (
    <div className={styles.card} ref={dimensionRef}>
      {confirmationpopup && (
        <div style={ConfirmationPopup}>
          <div className={styles.confirmationPopup}>
            <div>
              <h1 className={styles.fileDelete}>Delete this Card ?</h1>
            </div>
            <div>
              <button
                className={styles.confirm}
                onClick={() => setConfirmationpopup(false)}
              >
                Close
              </button>
              <button
                className={styles.cancel}
                onClick={(e) => {
                  deleteHandler(isData.id);
                }}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.left}>
        <span>
          {isLoading ? (
            <Skeleton width="8rem" height="2rem"></Skeleton>
          ) : (
            isData.id
          )}
        </span>
        {isLoading ? (
          <Skeleton width="10rem" height="10rem" borderRadius="8px" />
        ) : (
          <span
            style={{
              fontWeight: "600",
              fontSize: "1rem",
              textAlign: "center",
            }}
          >
            {isData.carrierName}
          </span>
        )}
        <span>
          {isLoading ? (
            <Skeleton width="3rem" height="2rem"></Skeleton>
          ) : (
            isData.serviceType
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
                isData.sailingDate
              )}
            </span>
          </div>
          <div className={styles.channelDetails}>
            <span>Transit Time</span>
            <span>
              {isLoading ? (
                <Skeleton width="5rem" height="1.5em"></Skeleton>
              ) : (
                isData.transitTimeInDays && "-"
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
                isData.commodity
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
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <span>20GP</span>
            <span>
              {isLoading ? (
                <Skeleton width="5rem" height="2rem"></Skeleton>
              ) : (
                isData.container20GP?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })
              )}
            </span>
          </div>
          <div className={styles.topRight}>
            <span>40GP</span>
            <span>
              {isLoading ? (
                <Skeleton width="5rem" height="2rem"></Skeleton>
              ) : (
                isData.container40GP?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })
              )}
            </span>
          </div>
        </div>
        <div className={styles.center}>
          <span style={{ fontWeight: "600", fontSize: "1rem", color: "#000" }}>
            Total USD
          </span>
          <span>
            {isLoading ? (
              <Skeleton width="5rem" height="2rem"></Skeleton>
            ) : (
              isData.totalUSDAmount?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            )}
          </span>
          <div className={styles.bottom}>
            {actions === "/quotesummary" ? (
              <div className={styles.quoteSummaryActions}>
                <button onClick={confirmationHandler}>Delete</button>
                <button>Edit</button>
              </div>
            ) : (
              <div className={styles.viewDetails}>
                <button onClick={() => showModal(isData)} label="View Details">
                  View Details
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlecard;
