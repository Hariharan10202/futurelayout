import React, { useEffect, useState } from "react";
import styles from "./Schedules.module.css";

const Schedules = ({ schedules }) => {
  const [schedulesData, setSchedulesData] = useState([]);

  useEffect(() => {
    let subscribe = true;
    const getSchedules = () => {
      if (subscribe) {
        setSchedulesData(schedules);
      }
    };
    getSchedules();
    return () => {
      subscribe = false;
    };
  }, [schedules]);

  return (
    <div className={styles.container}>
      <div className={styles.schedules}>
        {schedulesData?.map((data) => (
          <div key={data.id}>{data.id}</div>
        ))}
      </div>
    </div>
  );
};

export default Schedules;
