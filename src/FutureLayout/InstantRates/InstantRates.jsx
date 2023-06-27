import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./InstantRates.module.css";
import { useSelector } from "react-redux";
import RatesCardSkeleton from "../RateCardSkeleton/RatesCardSkeleton";
import RateCard from "../RateCard/RateCard";
import { Skeleton } from "primereact/skeleton";
import DateFilter from "../Custom/DateFilter/DateFilter";
import MultiSelectComponent from "../Custom/MultiSelect/MultiSelectComponent";
import { FaSortAmountUpAlt } from "react-icons/fa";

import { SelectButton } from "primereact/selectbutton";
import { updateView } from "../../Redux/viewSlice";
import Table from "../RatesContainer/Table/Table";

const InstantRates = ({
  rate,
  setRate,
  setVisible,
  isVisible,
  setShowFooter,
  view,
  setView,
}) => {
  const isLoading = useSelector((state) => state.rates.pending);
  const rateData = useSelector((state) => state.rates.data);

  const justifyOptions = [
    { icon: "pi pi-list", value: "Card" },
    { icon: "pi pi-table", value: "Table" },
  ];

  const dispatch = useDispatch();

  const justifyTemplate = (option) => {
    return <i className={option.icon}></i>;
  };

  // const [selectedFilteredValues, setSelectedFilteredValues] = useState([]);

  const [data, setData] = useState({ activeCard: null, card: [] });
  const [enabledDates, setEnabledDates] = useState({ strFor: [], dateFor: [] });

  const [linerFilter, setLinerFilter] = useState([]);
  const [sailingDateFilter, setSailingDateFilter] = useState([]);
  const [totalCost, setTotalCost] = useState(true);

  console.log(view);

  useEffect(() => {
    setData({ activeCard: null, card: rateData });
    const list = [];
    const Exactlist = [];
    rateData.forEach((element) => {
      const formatedDate = new Date(element.sailingDate);
      if (!list.includes(String(formatedDate))) {
        list.push(String(formatedDate));
        Exactlist.push(new Date(formatedDate));
      }
    });
    setEnabledDates({ strFor: list, dateFor: Exactlist });
  }, [rateData]);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (linerFilter.length !== 0 && sailingDateFilter.length !== 0) {
      const filteredData = rateData
        .filter((item) => {
          return linerFilter?.some((selectedItem) => {
            return selectedItem.logo === item.carrierLogo;
          });
        })
        .filter((elem) => {
          return sailingDateFilter?.some((ele) => {
            return ele.getTime() === new Date(elem.sailingDate).getTime();
          });
        })
        .sort((a, b) => {
          if (totalCost) {
            return a.totalUSDAmount - b.totalUSDAmount;
          } else {
            return b.totalUSDAmount - a.totalUSDAmount;
          }
        });

      setData((prev) => ({ ...prev, card: filteredData }));
    } else {
      setData((prev) => ({ ...prev, card: [] }));
    }
  }, [linerFilter, rateData, sailingDateFilter, totalCost]);

  useEffect(() => {
    dispatch(updateView(view));
  }, [view]);

  return (
    <div className={styles.container}>
      <div className={styles.searchedResult}></div>
      <div>
        <span className={styles.resultsCount}>
          {isLoading ? (
            <Skeleton width="150px" height="30px" />
          ) : (
            <div className={styles.resultHeader}>
              <span>{data.card.length} Results found</span>
              <div>
                <SelectButton
                  defaultValue={"Card"}
                  value={view}
                  onChange={(e) => setView(e.value)}
                  itemTemplate={justifyTemplate}
                  optionLabel="value"
                  options={justifyOptions}
                />
              </div>
            </div>
          )}
        </span>
      </div>
      <div className={styles.headerLabel}>
        <div>
          <span>Expiry Date</span>
          {isLoading ? (
            <Skeleton width="100px" height="20px" />
          ) : (
            <span>20 Mar 2023</span>
          )}
        </div>
      </div>
      {view === "Card" ? (
        <>
          <div className={styles.DatapointLabel}>
            <div>
              <MultiSelectComponent setLinerFilter={setLinerFilter} />
              <DateFilter
                setSailingDateFilter={setSailingDateFilter}
                enabledDates={enabledDates}
              />
              <span
                onClick={() => setTotalCost(!totalCost)}
                className={styles.totalCost}
              >
                <span>Total Cost</span>
                <FaSortAmountUpAlt
                  style={
                    !totalCost
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                />
              </span>
            </div>
          </div>
          <div className={styles.Cards}>
            {isLoading ? (
              <RatesCardSkeleton />
            ) : (
              <>
                {data.card.map((obj, index) => (
                  <RateCard
                    key={index}
                    setShowFooter={setShowFooter}
                    setVisible={setVisible}
                    isVisible={isVisible}
                    setRate={setRate}
                    rate={rate}
                    rateData={obj}
                    setData={setData}
                    data={data}
                  />
                ))}
              </>
            )}
          </div>
        </>
      ) : (
        <Table setVisible={setVisible} />
      )}
    </div>
  );
};

export default InstantRates;
