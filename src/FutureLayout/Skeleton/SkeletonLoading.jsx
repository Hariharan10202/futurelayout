import React from "react";
import { Skeleton } from "primereact/skeleton";
import styles from "./Skeleton.module.css";

const SkeletonLoading = () => {
  return (
    <>
      <div className={styles.skeletonContainer}>
        <div>
          <Skeleton borderRadius="4px" width="100px" height="20px"></Skeleton>
          <Skeleton borderRadius="4px" width="100px" height="20px"></Skeleton>
        </div>
        <div>
          <Skeleton borderRadius="4px" width="100px" height="1.5rem"></Skeleton>
        </div>
        <div>
          <Skeleton borderRadius="4px" width="100px" height="1.5rem"></Skeleton>
        </div>
        <div>
          <Skeleton borderRadius="4px" width="100px" height="1.5rem"></Skeleton>
        </div>
      </div>
      <div className={styles.skeletonContainer}>
        <div>
          <Skeleton borderRadius="4px" width="100px" height="20px"></Skeleton>
          <Skeleton borderRadius="4px" width="100px" height="20px"></Skeleton>
        </div>
        <div>
          <Skeleton borderRadius="4px" width="100px" height="1.5rem"></Skeleton>
        </div>
        <div>
          <Skeleton borderRadius="4px" width="100px" height="1.5rem"></Skeleton>
        </div>
        <div>
          <Skeleton borderRadius="4px" width="100px" height="1.5rem"></Skeleton>
        </div>
      </div>
      <div className={styles.skeletonContainer}>
        <div>
          <Skeleton borderRadius="4px" width="100px" height="20px"></Skeleton>
          <Skeleton borderRadius="4px" width="100px" height="20px"></Skeleton>
        </div>
        <div>
          <Skeleton borderRadius="4px" width="100px" height="1.5rem"></Skeleton>
        </div>
        <div>
          <Skeleton borderRadius="4px" width="100px" height="1.5rem"></Skeleton>
        </div>
        <div>
          <Skeleton borderRadius="4px" width="100px" height="1.5rem"></Skeleton>
        </div>
      </div>
      <div className={styles.skeletonContainer}>
        <div>
          <Skeleton borderRadius="4px" width="100px" height="20px"></Skeleton>
          <Skeleton borderRadius="4px" width="100px" height="20px"></Skeleton>
        </div>
        <div>
          <Skeleton borderRadius="4px" width="100px" height="1.5rem"></Skeleton>
        </div>
        <div>
          <Skeleton borderRadius="4px" width="100px" height="1.5rem"></Skeleton>
        </div>
        <div>
          <Skeleton borderRadius="4px" width="100px" height="1.5rem"></Skeleton>
        </div>
      </div>
    </>
  );
};

export default SkeletonLoading;
