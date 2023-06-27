import React from "react";
import Singlecard from "../Singlecard/Singlecard";
import SkeletonLoading from "../Skeleton/SkeletonLoading";
import { Skeleton } from "primereact/skeleton";
import styles from "./CardList.module.css";

const CardList = ({ loading, dataList, setCardSelected, setDataList }) => {
  console.log(dataList);

  return (
    <div className={styles.Cards}>
      {loading ? (
        <>
          <SkeletonLoading />
        </>
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.filter}></div>
            <div className={styles.resultCount}>
              <span>
                {loading ? (
                  <Skeleton width="80px" height="20px" />
                ) : (
                  dataList?.length + " Results Found"
                )}
              </span>
            </div>
            <div className={styles.header}>
              <span>Created On 14 Feb 2023</span>
            </div>
            <div className={styles.fixedColumn}>
              <span>Load Details</span>
              <span>Cut Off Date</span>
              <span>Customer</span>
              <span></span>
            </div>
            <div className={styles.quotesCards}>
              {dataList?.map((data, index) => (
                <Singlecard
                  setCardSelected={setCardSelected}
                  setDataList={setDataList}
                  key={index}
                  data={data}
                  isLoading={loading}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardList;
