import { Skeleton } from "primereact/skeleton";
import React from "react";
import styles from "./RatesCardSkeleton.module.css";

const RatesCardSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.card}>
        <div>
          <Skeleton width="70px" height="20px" borderRadius="4px"></Skeleton>
          <div>
            <Skeleton width="60px" height="15px" borderRadius="4px"></Skeleton>
            <Skeleton width="50px" height="15px" borderRadius="4px"></Skeleton>
          </div>
        </div>
        <div>
          <Skeleton width="50px" height="15px" borderRadius="2px"></Skeleton>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Skeleton width="70px" height="20px" borderRadius="4px"></Skeleton>
          <div>
            <Skeleton width="60px" height="15px" borderRadius="4px"></Skeleton>
            <Skeleton width="50px" height="15px" borderRadius="4px"></Skeleton>
          </div>
        </div>
        <div>
          <Skeleton width="50px" height="15px" borderRadius="2px"></Skeleton>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Skeleton width="70px" height="20px" borderRadius="4px"></Skeleton>
          <div>
            <Skeleton width="60px" height="15px" borderRadius="4px"></Skeleton>
            <Skeleton width="50px" height="15px" borderRadius="4px"></Skeleton>
          </div>
        </div>
        <div>
          <Skeleton width="50px" height="15px" borderRadius="2px"></Skeleton>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Skeleton width="70px" height="20px" borderRadius="4px"></Skeleton>
          <div>
            <Skeleton width="60px" height="15px" borderRadius="4px"></Skeleton>
            <Skeleton width="50px" height="15px" borderRadius="4px"></Skeleton>
          </div>
        </div>
        <div>
          <Skeleton width="50px" height="15px" borderRadius="2px"></Skeleton>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <Skeleton width="70px" height="20px" borderRadius="4px"></Skeleton>
          <div>
            <Skeleton width="60px" height="15px" borderRadius="4px"></Skeleton>
            <Skeleton width="50px" height="15px" borderRadius="4px"></Skeleton>
          </div>
        </div>
        <div>
          <Skeleton width="50px" height="15px" borderRadius="2px"></Skeleton>
        </div>
      </div>
    </div>
  );
};

export default RatesCardSkeleton;
