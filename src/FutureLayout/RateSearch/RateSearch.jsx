import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";

import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import { GrAnchor } from "react-icons/gr";
import styles from "./RateSearch.module.css";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import { AiTwotoneEdit } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import { updateData } from "../../Redux/apiCalls";
import { Link } from "react-router-dom";

const Search = ({ setVisible }) => {
  const dispatch = useDispatch();

  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [cutOffDate, setCutOffDate] = useState(new Date());
  const [loadType, setLoadType] = useState([]);

  const loads = [
    { name: "20GP", code: "1X20GPX10000XKGs" },
    { name: "40GP", code: "1X40GPX10000XKGs" },
  ];

  let loadTypeList = [];

  loadType[0] && loadTypeList.push(loadType[0].code);
  loadType[1] && loadTypeList.push(loadType[1].code);

  const parameters = {
    originPort: origin,
    destinationPort: destination,
    mode: "FCL",
    containers: loadTypeList,
    departureDate: cutOffDate,
  };

  const handleSearch = async () => {
    setVisible(false);
    const response = localStorage.getItem("access_token");
    const dateString = parameters.departureDate.toISOString().slice(0, 10);
    parameters.departureDate = dateString;
    updateData(parameters, dispatch, response);
  };

  const dateHandler = (e) => {
    const dateObj = e.target.value;
    setCutOffDate(dateObj);
  };

  return (
    <div className={styles.container}>
      <div className={styles.upperContainer}>
        <div className={styles.input}>
          <label htmlFor="range">Origin</label>
          <div className={styles.inputField}>
            <span>
              <GrAnchor />
            </span>
            <InputText
              placeholder="Source...."
              defaultValue={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.input}>
          <label htmlFor="range">Destination</label>
          <div className={styles.inputField}>
            <span>
              <GrAnchor />
            </span>
            <InputText
              placeholder="Destination"
              defaultValue={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.input}>
          <label htmlFor="date">Cut Off Date</label>
          <Calendar
            id="date"
            placeholder="Cutt Off Date"
            value={cutOffDate}
            onChange={dateHandler}
            dateFormat="yy-mm-dd"
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="gp">Load Type</label>
          <MultiSelect
            value={loadType}
            options={loads}
            onChange={(e) => setLoadType(e.value)}
            optionLabel="name"
            placeholder="Select a Load Type"
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="gp">Locals & Custom Charges</label>
          <Dropdown
            // value={city}
            // options={cities}
            // onChange={onCityChange}
            optionLabel="name"
            placeholder="20 GPx1"
          />
        </div>
        {/* <div className={styles.input}>
          <div>
            <Button className="p-button-primary">
              <AiTwotoneEdit /> Edit
            </Button>
          </div>
        </div> */}
        {/* <div className={styles.hideDetails}>
          <span>
            Hide Details
            <MdOutlineKeyboardArrowUp className={styles.upArrow} />
          </span>
        </div> */}
        <div className={styles.input}>
          <Link to="/rates">
            <Button className="p-button-primary" onClick={handleSearch}>
              <BiSearchAlt2 className={styles.searchBtn} /> Search now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
