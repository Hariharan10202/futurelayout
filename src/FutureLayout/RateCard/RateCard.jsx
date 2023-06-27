import React, { useState } from "react";
import styles from "./RateCard.module.css";
import { Checkbox } from "primereact/checkbox";

const RateCard = ({
  rateData,
  setRate,
  setVisible,
  isVisible,
  setShowFooter,
  setData,
  data,
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (data) => {
    setShowFooter(true);
    setChecked(!checked);
    if (!checked) {
      setVisible((prev) => [...prev, data]);
    } else {
      setVisible(isVisible.filter((item) => item.objId !== data.objId));
    }
  };

  const handleClick = (item) => {
    setRate(item);
    setData({ ...data, activeCard: item.objId });
  };

  const toggleActiveStyles = (id) => {
    if (data.activeCard === id) {
      return `${styles.activeCard}`;
    } else {
      return `${styles.card}`;
    }
  };

  return (
    <div className={toggleActiveStyles(rateData.objId)}>
      <div className={styles.container} onClick={() => handleClick(rateData)}>
        <div className={styles.left}>
          <div>
            <Checkbox
              onChange={() => handleChange(rateData)}
              checked={checked}
            ></Checkbox>
          </div>
          <div className={styles.carrierLogo}>
            <img
              src={
                rateData.carrierLogo
                  ? rateData.carrierLogo
                  : "https://www.pngkey.com/png/detail/212-2123501_404-logo-group-does-not-exist.png"
              }
              alt=""
            />
          </div>
          <div className={styles.dataPoints}>
            <div className={styles.linerName}>
              <span>{rateData.carrierName}</span>
            </div>
            <div>
              <div>
                <span className={styles.sd}>{rateData.sailingDate}</span>
              </div>
              <div>
                <li className={styles.commodity}>{rateData.commodity}</li>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <span className={styles.amount}>
            {rateData?.totalUSDAmount?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RateCard;
