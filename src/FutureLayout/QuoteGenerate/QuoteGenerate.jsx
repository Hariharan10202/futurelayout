import React, { useEffect, useState } from "react";
import styles from "./QuoteGenerate.module.css";
// import { MultiSelect } from "primereact/multiselect";
import { InputText } from "primereact/inputtext";
import QuoteGenerateRateCards from "../QuoteGenerateRateCards/QuoteGenerateRateCards";
import AddRateCard from "../Modals/AddRateCard/AddRateCard";
import { TbAnchor } from "react-icons/tb";
import { useLocation } from "react-router-dom";

const QuoteGenerate = ({ data, setData, setCurrentPath, currentPath }) => {
  const [addRateCardModal, setAddRateCardModal] = useState(false);
  const [warning, setWarning] = useState(false);

  // const cities = [
  //   { name: "New York", code: "NY" },
  //   { name: "Rome", code: "RM" },
  //   { name: "London", code: "LDN" },
  //   { name: "Istanbul", code: "IST" },
  //   { name: "Paris", code: "PRS" },
  // ];

  const path = useLocation();

  useEffect(() => {
    setCurrentPath(path.pathname);
    data.length === 1 && setWarning(true);
  }, [data, path.pathname, setCurrentPath]);

  const removeHandler = (id) => {
    const filteredData = data.filter((item) => item.objId !== id);
    setData(filteredData);
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <AddRateCard
        visible={addRateCardModal}
        setAddRateCardModal={setAddRateCardModal}
      />
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <div>
            <span>SEA-FCL</span>
            <span>Quote Generate</span>
          </div>
        </div>
        <div className={styles.searchedDetails}>
          <div>
            <span>Quote Generate</span>
          </div>
          <div>
            <div className={styles.inputField}>
              <div className={styles.origin}>
                <span>Origin</span>
                <span className="p-input-icon-left">
                  <TbAnchor />
                  <InputText placeholder="Search" className={styles.input} />
                </span>
              </div>
              <div className={styles.destination}>
                <span>Destination</span>
                <span className="p-input-icon-left">
                  <TbAnchor />
                  <InputText placeholder="Search" className={styles.input} />
                </span>
              </div>
              <div>
                <span>Load Type</span>
                <span className="p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText placeholder="Search" />
                </span>
              </div>
              <div>
                <span>Cargo Type</span>
                <span className="p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText placeholder="Search" />
                </span>
              </div>
              <div>
                <span>INCO Terms</span>
                <span className="p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText placeholder="Search" />
                </span>
              </div>
              <div>
                <span>Customs</span>
                <span className="p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText placeholder="Search" />
                </span>
              </div>
              <div>
                <span>Stuffing</span>
                <span className="p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText placeholder="Search" />
                </span>
              </div>
              <div>
                <span>Cutt Off Date</span>
                <span className="p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText placeholder="Search" />
                </span>
              </div>
              <div>
                <span>Quote Period</span>
                <span className="p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText placeholder="Search" />
                </span>
              </div>
              <div>
                <span>Terms and Conditions</span>
                <span className={styles.hyper}>+ Add Terms and Conditions</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardDetails}>
          <div className={styles.cards}>
            <div
              className={styles.addCard}
              onClick={() => setAddRateCardModal(true)}
            >
              <span>+ Add Card</span>
            </div>
            <div className={styles.cardLists}>
              <>
                {data.map((singleData) => (
                  <QuoteGenerateRateCards
                    data={singleData}
                    key={singleData.objId}
                    warning={warning}
                    removeHandler={removeHandler}
                  />
                ))}
              </>
            </div>
          </div>
          <div className={styles.Add}>
            <div>
              <span>Internal Details</span>
            </div>
            <div className={styles.internalInputs}>
              <div>
                <span>Inquiry Number</span>
                <span>
                  <InputText placeholder="Inquiry" className={styles.input} />
                </span>
              </div>
              <div>
                <span>Search Reference</span>
                <span>
                  <InputText
                    placeholder="Enter Search Reference"
                    className={styles.input}
                  />
                </span>
              </div>
              <div>
                <div className={styles.endToend}>
                  <span>Customer Details</span>
                  <span className={styles.hyper}>+Add Customer</span>
                </div>
                <span>
                  <InputText
                    placeholder="Enter Customer Details"
                    className={styles.input}
                  />
                </span>
              </div>
              <div>
                <span>CC Mail</span>
                <span>
                  <InputText
                    placeholder="Type CC Mail and click enter"
                    className={styles.input}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteGenerate;
