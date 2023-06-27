import React, { useState } from "react";
import styles from "./Filter.module.css";

import { MultiSelect } from "primereact/multiselect";
import { InputSwitch } from "primereact/inputswitch";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { Skeleton } from "primereact/skeleton";

import { MdTune } from "react-icons/md";

const Filter = ({ isLoading }) => {
  const [selectedCities, setSelectedCities] = useState(null);
  const [checked1, setChecked1] = useState(false);
  const [cargoType, setCargoType] = useState(null);
  const [commodity, setCommodity] = useState([]);
  const [portLoad, setPortLoad] = useState([]);
  const [portDischarge, setPortDischarge] = useState([]);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const onCommodityChange = (e) => {
    let selectedCommodity = [...commodity];

    if (e.checked) selectedCommodity.push(e.value);
    else selectedCommodity.splice(selectedCommodity.indexOf(e.value), 1);

    setCommodity(selectedCommodity);
  };

  const onPolChange = (e) => {
    let selectPortLoad = [...portLoad];

    if (e.checked) selectPortLoad.push(e.value);
    else selectPortLoad.splice(selectPortLoad.indexOf(e.value), 1);

    setPortLoad(selectPortLoad);
  };

  const onPodChange = (e) => {
    let selectedPortDischarge = [...portDischarge];

    if (e.checked) selectedPortDischarge.push(e.value);
    else
      selectedPortDischarge.splice(selectedPortDischarge.indexOf(e.value), 1);
    setPortDischarge(selectedPortDischarge);
  };

  const loadingSkeleton = <Skeleton width="14rem" height="2rem" />;

  return (
    <div className={styles.filters}>
      <div className={styles.filter}>
        <span>
          <MdTune className={styles.filterIcon} />
          Filters
        </span>
        <span>Clear All</span>
      </div>
      <div className={styles.liners}>
        <span>Liners</span>
        <span>
          <MultiSelect
            style={{ width: "200px", height: "40px" }}
            value={selectedCities}
            options={cities}
            onChange={(e) => setSelectedCities(e.value)}
            optionLabel="name"
            placeholder="Search"
          />
        </span>
      </div>
      <div className={styles.directRoute}>
        <span>
          Direct Route
          <InputSwitch
            checked={checked1}
            onChange={(e) => setChecked1(e.value)}
          />
        </span>
      </div>
      <div className={styles.cargoType}>
        <span>Cargo Type</span>
        {isLoading ? (
          loadingSkeleton
        ) : (
          <span>
            <div className="field-radiobutton">
              <RadioButton
                inputId="all"
                name="all"
                value="All"
                onChange={(e) => setCargoType(e.value)}
                checked={cargoType === "All"}
              />
              <label htmlFor="all">All</label>
            </div>
            <div className="field-radiobutton">
              <RadioButton
                inputId="FAK"
                name="FAK"
                value="FAK"
                onChange={(e) => setCargoType(e.value)}
                checked={cargoType === "FAK"}
              />
              <label htmlFor="FAK">FAK</label>
            </div>
            <div className="field-radiobutton">
              <RadioButton
                inputId="chilled"
                name="chilled"
                value="Chilled"
                onChange={(e) => setCargoType(e.value)}
                checked={cargoType === "Chilled"}
              />
              <label htmlFor="chilled">Chilled</label>
            </div>
          </span>
        )}
      </div>
      <div className={styles.commodity}>
        <span>Commodity</span>
        {isLoading ? (
          loadingSkeleton
        ) : (
          <span>
            <div className="field-checkbox">
              <Checkbox
                inputId="general"
                name="generalcargo"
                value="General Cargo"
                onChange={onCommodityChange}
                checked={commodity.indexOf("General Cargo") !== -1}
              />
              <label htmlFor="general">General Cargo</label>
            </div>
            <div className="field-checkbox">
              <Checkbox
                inputId="notavailable"
                name="notavailable"
                value="Not Available"
                onChange={onCommodityChange}
                checked={commodity.indexOf("Not Available") !== -1}
              />
              <label htmlFor="notavailable">Not Available</label>
            </div>
            <div className="field-checkbox">
              <Checkbox
                inputId="riceseed"
                name="riceseed"
                value="Rice Seeds"
                onChange={onCommodityChange}
                checked={commodity.indexOf("Rice Seeds") !== -1}
              />
              <label htmlFor="riceseds">Rice Seeds</label>
            </div>
          </span>
        )}
      </div>
      <div className={styles.portOfLoding}>
        <span>Port of Loading</span>
        {isLoading ? (
          loadingSkeleton
        ) : (
          <span>
            <div className="field-checkbox">
              <Checkbox
                inputId="INNSA"
                name="INNSA"
                value="INNSA"
                onChange={onPodChange}
                checked={portDischarge.indexOf("INNSA") !== -1}
              />
              <label htmlFor="INNSA">Chicago</label>
            </div>
            <div className="field-checkbox">
              <Checkbox
                inputId="N/A"
                name="N/A"
                value="N/A"
                onChange={onPodChange}
                checked={portDischarge.indexOf("N/A") !== -1}
              />
              <label htmlFor="N/A">Los Angeles</label>
            </div>
          </span>
        )}
      </div>
      <div className={styles.portOfDischarge}>
        <span>Port of Discharger</span>
        {isLoading ? (
          loadingSkeleton
        ) : (
          <span>
            <div className="field-checkbox">
              <Checkbox
                inputId="DEHAM"
                name="DEHAM"
                value="DEHAM"
                onChange={onPolChange}
                checked={portLoad.indexOf("DEHAM") !== -1}
              />
              <label htmlFor="DEHAM">Chicago</label>
            </div>
            <div className="field-checkbox">
              <Checkbox
                inputId="N/A"
                name="N/A"
                value="N/A"
                onChange={onPolChange}
                checked={portLoad.indexOf("N/A") !== -1}
              />
              <label htmlFor="N/A">Los Angeles</label>
            </div>
          </span>
        )}
      </div>
    </div>
  );
};

export default Filter;
