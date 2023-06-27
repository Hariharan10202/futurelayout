import React, { useState } from "react";
import styles from "./AddRateCard.module.css";
import "./styles.css";
import { InputNumber } from "primereact/inputnumber";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { BiAnchor } from "react-icons/bi";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import Tabs from "./Tabs/Tabs";
import { BsArrowRight, BsGraphUp } from "react-icons/bs";

const AddRateCard = ({ visible, setAddRateCardModal }) => {
  const [sailingDate, setSailingDate] = useState();
  const [expiryDate, setExpiryDate] = useState();

  const [selectedCommodities, setSelectedCommodities] = useState(null);
  const [selectedCargoType, setSelectedCargoType] = useState(null);

  const [selectedLiner, setSelectedLiner] = useState(null);

  const commodities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const liners = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const cargoTypes = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div>
      <Dialog
        header="Create New Card"
        visible={visible}
        style={{ width: "80%", height: "78%" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        onHide={() => setAddRateCardModal(false)}
      >
        <div className={styles.container}>
          <div className={styles.inputFieldContainer}>
            <div className={styles.inputField}>
              <span>Origin</span>
              <span>
                <span className="p-input-icon-left">
                  <BiAnchor />
                  <InputText placeholder="Enter a port of loading" />
                </span>
              </span>
            </div>
            <div className={styles.inputField}>
              <span>Via Port</span>
              <span>
                <span className="p-input-icon-left">
                  <BiAnchor />
                  <InputText placeholder="Enter Via Route" />
                </span>
              </span>
            </div>
            <div className={styles.inputField}>
              <span>Port of Discharge</span>
              <span>
                <span className="p-input-icon-left">
                  <BiAnchor />
                  <InputText placeholder="Enter a port of discharge" />
                </span>
              </span>
            </div>
            <div className={styles.inputField}>
              <span>Liner / Carrier</span>
              <span>
                <Dropdown
                  filter
                  value={selectedLiner}
                  onChange={(e) => setSelectedLiner(e.value)}
                  options={liners}
                  optionLabel="name"
                  editable
                  placeholder="Select a Liner"
                  className="w-full md:w-14rem"
                />
              </span>
            </div>
            <div className={styles.inputField}>
              <span>Service Type</span>
              <span>
                <InputText placeholder="Enter Service Type" />
              </span>
            </div>
            <div className={styles.inputField}>
              <span>Transit Time</span>
              <span>
                <InputNumber
                  placeholder="Transit time"
                  inputId="withoutgrouping"
                  useGrouping={false}
                />
              </span>
            </div>
            <div className={styles.inputField}>
              <span>Free Days</span>
              <span>
                <InputText placeholder="Free days" />
              </span>
            </div>
            <div className={styles.inputField}>
              <span>Sailing Date</span>
              <span>
                <Calendar
                  placeholder="Enter Sailing Date"
                  value={sailingDate}
                  onChange={(e) => setSailingDate(e.value)}
                  dateFormat="dd/mm/yy"
                  showIcon
                />
              </span>
            </div>
            <div className={styles.inputField}>
              <span>Expiry Date</span>
              <span>
                <Calendar
                  placeholder="Enter Expiry Date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.value)}
                  dateFormat="dd/mm/yy"
                  showIcon
                />
              </span>
            </div>
            <div className={styles.inputField}>
              <span>Cargo Type</span>
              <span>
                <Dropdown
                  filter
                  value={selectedCargoType}
                  onChange={(e) => setSelectedCargoType(e.value)}
                  options={cargoTypes}
                  optionLabel="name"
                  placeholder="Cargo Type"
                  className="w-full md:w-14rem"
                />
              </span>
            </div>
            <div className={styles.inputField}>
              <span>Commodity</span>
              <span>
                <MultiSelect
                  value={selectedCommodities}
                  onChange={(e) => setSelectedCommodities(e.value)}
                  options={commodities}
                  optionLabel="name"
                  display="chip"
                  placeholder="Select Commodity"
                  maxSelectedLabels={3}
                  className="w-full md:w-20rem"
                />
              </span>
            </div>
          </div>
          <div className={styles.lowerContainer}>
            <div className={styles.tabbedNav}>
              <Tabs />
            </div>
            <div className={styles.footerSection}>
              <div className={styles.buyRate}>
                <span>BUY RATE</span> <span>USD 1.57</span>
              </div>
              <div className={styles.sellRate}>
                <span>SELL RATE</span> <span>USD 1.57</span>
              </div>
              <div className={styles.marginAction}>
                <div className={styles.margin}>
                  <span>
                    <BsGraphUp className={styles.graphLine} /> You earn USD 0.00
                    0.00 % on this rate
                  </span>
                  <span className={styles.link}>
                    View Exchange Rates
                    <BsArrowRight className={styles.arrow} />
                  </span>
                </div>
                <div className={styles.actionBtn}>
                  <Button label="Create" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AddRateCard;
