import React from "react";
import styles from "./Singlecard.module.css";
// import { Button } from "primereact/button";
import Channel from "../../Assets/pair 1 svg.svg";

import { Skeleton } from "primereact/skeleton";
// import { cardData } from "../../Data";

const Singlecard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <span
          style={{
            fontWeight: "600",
            fontSize: "1.7rem",
            textAlign: "center",
          }}
        >
          Maersk
        </span>
        <span></span>
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
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <span>20GP</span>
            <span>
              {isLoading ? (
                <Skeleton width="5rem" height="2rem"></Skeleton>
              ) : (
                data.container20GP.toLocaleString("en-US", {
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
                data.container40GP.toLocaleString("en-US", {
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
              data.totalUSDAmount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            )}
          </span>
          <div className={styles.bottom}>
            <div className={styles.viewDetails}>
              <button onClick={() => showModal(data)} label="View Details">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlecard;
