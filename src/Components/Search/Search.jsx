import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateView } from "../../Redux/viewSlice";

import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";

import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import { GrAnchor } from "react-icons/gr";
import styles from "./Search.module.css";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import { AiTwotoneEdit } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import { updateData } from "../../Redux/apiCalls";
import { Skeleton } from "primereact/skeleton";
import { InputSwitch } from "primereact/inputswitch";
import { Link } from "react-router-dom";

const Search = ({ setView, view, hideNavBar }) => {
  const rateData = useSelector((state) => state.rates.data);
  const isLoading = useSelector((state) => state.rates.pending);

  const dispatch = useDispatch();

  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [cutOffDate, setCutOffDate] = useState();
  const [loadType, setLoadType] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null);

  const loads = [
    { name: "20GP", code: "1X20GPX10000XKGs" },
    { name: "40GP", code: "1X40GPX10000XKGs" },
  ];

  const category = [
    { name: "Lowest Freight" },
    { name: "Lowest Total" },
    { name: "Fastest Transit" },
    { name: "Sailing Date" },
  ];

  const onItemChange = (e) => {
    setSelectedItem(e.target.value);
  };

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
    const response = localStorage.getItem("access_token");
    hideNavBar(false);
    updateData(parameters, dispatch, response);
  };

  const dateHandler = (e) => {
    const date = e.target.value;
    let datestring =
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2);
    setCutOffDate(datestring);
  };

  return (
    <div className={styles.container}>
      <h1>Intant Rates</h1>
      <div className={styles.upperContainer}>
        <div className={styles.input}>
          <label htmlFor="range">Origin</label>
          <div className={styles.inputField}>
            <span>
              <GrAnchor />
            </span>
            <InputText
              placeholder="Source...."
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
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.input}>
          <label htmlFor="date">Cut Off Date</label>
          <Calendar
            id="date"
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
        <div className={styles.input}>
          <Button className="p-button-primary">
            <AiTwotoneEdit /> Edit
          </Button>
        </div>
        <div className={styles.input}>
          <input
            className={styles.SearchInput}
            placeholder="Search"
            type="text"
          />
        </div>
        <div className={styles.input}>
          <input
            className={styles.SearchInput}
            placeholder="Sales Person"
            type="text"
          />
        </div>
        <div className={styles.input}>
          <input
            className={styles.SearchInput}
            placeholder="Customer Details"
            type="text"
          />
        </div>
        <div className={styles.hideDetails}>
          <span>
            Hide Details
            <MdOutlineKeyboardArrowUp className={styles.upArrow} />
          </span>
        </div>
        <div className={styles.input}>
          <Link to="/futureview">
            <Button className="p-button-primary" onClick={handleSearch}>
              <BiSearchAlt2 className={styles.searchBtn} /> Search now
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.left}>
          <span>
            {isLoading ? (
              <Skeleton width="5rem" height="2rem" />
            ) : (
              rateData?.length
            )}{" "}
            results found
          </span>
        </div>
        <div className={styles.right}>
          <Button className="p-button-outlined">
            <BsPlusLg /> Add New Rate
          </Button>
          <Button className="p-button-outlined">Request Better Rates</Button>
          <span></span>
          <Dropdown
            value={selectedItem}
            options={category}
            onChange={onItemChange}
            optionLabel="name"
            placeholder="Sort by"
          />
          <div className={styles.switch}>
            <span>Card</span>
            <InputSwitch
              checked={view}
              onChange={(e) => {
                dispatch(updateView(!view));
              }}
            />
            <span>Table</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
