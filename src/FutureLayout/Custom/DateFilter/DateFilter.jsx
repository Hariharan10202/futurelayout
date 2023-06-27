import React, { useEffect, useState } from "react";
import { Calendar } from "primereact/calendar";
import "./styles.css";
import ButtonComponent from "../../UI-components/Button/ButtonComponent";
import styles from "./DateFilter.module.css";

const DateFilter = ({ enabledDates, setSailingDateFilter }) => {
  const [disbledDates, setDisbledDates] = useState([]);
  const [visible, setVisible] = useState(false);

  const [dates, setDates] = useState([]);
  const [constranit, setConstranit] = useState([
    {
      minDate: null,
      maxDate: null,
    },
  ]);

  // console.log(enabledDates[0].getTime());

  useEffect(() => {
    setDates(enabledDates.dateFor);
    const sortDateArray = () => {
      const sortedArray = enabledDates.strFor.sort(
        (a, b) => new Date(a).getTime() - new Date(b).getTime()
      );
      const minDate = new Date(sortedArray[0]); // set the minimum date to today
      const maxDate = new Date(sortedArray[sortedArray.length - 1]);
      setConstranit({ minDate: minDate, maxDate: maxDate });

      function getDatesInRange(startDate, endDate) {
        const date = new Date(startDate.getTime());
        const dates = [];
        while (date <= endDate) {
          dates.push(new Date(date));
          date.setDate(date.getDate() + 1);
        }
        return dates;
      }
      const inBetweenDates = getDatesInRange(minDate, maxDate);

      const disabledList = inBetweenDates.filter(
        (date) => !sortedArray.includes(String(date))
      );
      // // console.log(disabledList);
      setDisbledDates(disabledList);
    };
    sortDateArray();
  }, [enabledDates.strFor, enabledDates.dateFor]);

  useEffect(() => {
    setSailingDateFilter(dates);
  }, [dates, setSailingDateFilter]);

  const handleClose = () => {
    setVisible(false);
  };

  const Footer = () => {
    return (
      <div className={styles.footer}>
        <div>
          <ButtonComponent
            onClick={() => setDates(enabledDates.dateFor)}
            label="Reset"
            type="p-button-outlined"
          />
          <ButtonComponent
            onClick={() => setDates([])}
            label="Clear"
            type="p-button-outlined"
          />
        </div>
        <ButtonComponent onClick={handleClose} label="Done" type="p-button" />
      </div>
    );
  };

  // const onDropdownShow = () => {
  //   setVisible(true);
  // };

  return (
    <Calendar
      value={dates}
      placeholder="Sailing Date"
      minDate={constranit.minDate}
      maxDate={constranit.maxDate}
      selectionMode="multiple"
      disabledDates={disbledDates}
      onChange={(e) => setDates(e.value)}
      footerTemplate={Footer}
      onVisibleChange={() => setVisible(!visible)}
      visible={visible}
    />
  );
};

export default DateFilter;
