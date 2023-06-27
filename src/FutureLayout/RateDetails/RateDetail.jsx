import React, { useState } from "react";
import styles from "./RateDetail.module.css";
import { IoLocationSharp } from "react-icons/io5";
import Charges from "../Charges/Charges";
import { useSelector } from "react-redux";
import { Skeleton } from "primereact/skeleton";
import Schedules from "../Schedules/Schedules";
import Remarks from "../Remarks/Remarks";
import { Button } from "primereact/button";
import { BsArrowRight, BsGraphUp } from "react-icons/bs";

const RateDetail = ({ rate, showFooter, isVisible }) => {
  const [tab, setTab] = useState("charges");
  const isLoading = useSelector((state) => state.rates.pending);

  return (
    <div className={styles.container}>
      <div className={styles.detailHeader}>
        <div className={styles.header}>
          <span>FCL</span>
          <span>Details </span>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.detail}>
          <IoLocationSharp className={styles.LeadIcon} />
          <div className={styles.datapoints}>
            <div>
              <span>Pickup Door</span>
              <span>Tajmahal, India</span>
            </div>
            <div>
              <span>Pickup Service Type</span>
              <span>CY/CY</span>
            </div>
            <div>
              <span>Pickup Haulage</span>
              <span>Tajmahal, India</span>
            </div>
            <div>
              <span>Pickup Transporter</span>
              <span>Transporter name</span>
            </div>
          </div>
        </div>
        <div className={styles.detail}>
          <IoLocationSharp className={styles.LeadIcon} />
          <div className={styles.datapoints}>
            <div>
              <span>Port of Origin</span>
              <span>Tajmahal, India</span>
            </div>
            <div>
              <span>Port of Loading</span>
              <span>CY/CY</span>
            </div>
            <div>
              <span>Via Port</span>
              <span>Tajmahal, India</span>
            </div>
          </div>
        </div>
        <div className={styles.detail}>
          <IoLocationSharp className={styles.LeadIcon} />
          <div className={styles.datapoints}>
            <div>
              <span>Liner/Carrier</span>
              <span>CMA CGM</span>
            </div>
            <div>
              <span>Service Type</span>
              <span>CY/CY</span>
            </div>
            <div>
              <span>Transit Time</span>
              <span>44</span>
            </div>
            <div>
              <span>Free Days</span>
              <span>4</span>
            </div>
            <div>
              <span>Sailing Date</span>
              <span>04 Dec 2022</span>
            </div>
            <div>
              <span>Effective Period</span>
              <span>14 Dec 2022 - 12 Feb 2023</span>
            </div>
          </div>
        </div>
        <div className={styles.detail}>
          <IoLocationSharp className={styles.LeadIcon} />
          <div className={styles.datapoints}>
            <div>
              <span>Port of Destination</span>
              <span>INMAA/Port of Chennai</span>
            </div>
            <div>
              <span>Port of Discharge</span>
              <span>DEHAM/Port of Hamburg (DEHAM), Germany, Europe</span>
            </div>
          </div>
        </div>
        <div className={styles.detail}>
          <IoLocationSharp className={styles.LeadIcon} />
          <div className={styles.datapoints}>
            <div>
              <span>Delivery Door</span>
              <span>Ispahani Center</span>
            </div>
            <div>
              <span>Delivery Service Type</span>
              <span>CY/CY</span>
            </div>
            <div>
              <span>Delivery Haulage</span>
              <span>Rail</span>
            </div>
            <div>
              <span>Delivery Transporter</span>
              <span>Transporter nam…</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.detail} ${styles.lastDetail}`}>
        <IoLocationSharp className={styles.LeadIcon} />
        <div className={styles.datapoints}>
          <div>
            <span>Cargo Type</span>
            <span>Hazardous</span>
          </div>
          <div>
            <span>Commodity</span>
            <span>
              Rice, Rice seed, Something liquid thing, Nitrates, Calcium powder
            </span>
          </div>
        </div>
      </div>
      <div className={styles.tabbedNav}>
        <div>
          <span
            className={
              tab === "charges"
                ? `${styles.activeTab} ${styles.Tab}`
                : `${styles.Tab} `
            }
            onClick={() => setTab("charges")}
          >
            Charges
          </span>
          <span
            className={
              tab === "schedules"
                ? `${styles.Tab} ${styles.activeTab}`
                : `${styles.Tab} `
            }
            onClick={() => setTab("schedules")}
          >
            Schedules
          </span>
          <span
            className={
              tab === "remarks"
                ? `${styles.Tab} ${styles.activeTab} `
                : `${styles.Tab} `
            }
            onClick={() => setTab("remarks")}
          >
            Remarks
          </span>
        </div>
      </div>

      <div className={styles.bottomContent}>
        <div className={styles.tabbedContent}>
          {isLoading ? (
            <Skeleton width="100%" height="200px" borderRadius="4px" />
          ) : (
            <>
              {tab === "charges" ? (
                <Charges
                  charges={
                    !showFooter
                      ? isVisible[isVisible.length - 1]?.charges
                      : rate.charges
                  }
                />
              ) : tab === "schedules" ? (
                <Schedules />
              ) : (
                <Remarks />
              )}
            </>
          )}
        </div>
        <div className={styles.footerSection}>
          <div className={styles.buyRate}>
            <span>BUY RATE</span> <span>USD 1.57</span>
          </div>
          <div className={styles.sellRate}>
            <span>SELL RATE</span> <span>USD 1.57</span>
          </div>
          <div className={styles.marginAction}>
            <div className={styles.margin}>
              <span>
                <BsGraphUp className={styles.graphLine} /> You earn USD 0.00
                0.00 % on this rate
              </span>
              <span>
                View Exchange Rates
                <BsArrowRight className={styles.arrow} />
              </span>
            </div>
            <div className={styles.actionBtn}>
              <Button label="Proceed Booking" className="p-button-outlined" />
              <Button>Confirm</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateDetail;
