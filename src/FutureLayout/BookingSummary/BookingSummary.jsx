import React, { useState } from "react";
import styles from "./BookingSummary.module.css";
import { FiArrowLeft } from "react-icons/fi";
import { BiNews } from "react-icons/bi";
import { TbAnchor } from "react-icons/tb";
import { RiShipFill } from "react-icons/ri";
import { GrSchedules } from "react-icons/gr";
import { GiHook } from "react-icons/gi";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { FaCommentAlt } from "react-icons/fa";
import { InputTextarea } from "primereact/inputtextarea";
import { FiArrowRight } from "react-icons/fi";
import { SlReload } from "react-icons/sl";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Parties } from "../../parties";
import Modal from "./Modal/Modal";

const BookingSummary = () => {
  const [cargoType, setCargoType] = useState(null);
  const [commodity, setCommodity] = useState(null);
  const [comments, setComments] = useState("");
  const [visible, setVisible] = useState(false);

  const cargoTypes = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const commodities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const detailsBody = (rowData) => {
    return (
      <div className={styles.detailsTableBody}>
        <div>
          <span>{rowData.details}</span>
          <span>
            {rowData.email} | {rowData.text}
          </span>
        </div>
      </div>
    );
  };

  const actionBody = () => {
    return (
      <div className={styles.partiesAction}>
        <span>Edit</span>
        <span>Clear</span>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Modal visible={visible} setVisible={setVisible} />
      <div className={styles.header}>
        <div>
          <FiArrowLeft className={styles.backArrow} />
          <div>
            <span>
              Instant Rates <span>/FCL/</span>
            </span>

            <span>Booking Summary</span>
          </div>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.bookingContainer}>
          <div className={styles.bookingDetails}>
            <div className={styles.Containerheader}>
              <span>Booking Details</span>
            </div>
            <div className={styles.dataPoints}>
              <div className={styles.inputFieldContainer}>
                <BiNews className={styles.inputFieldIcon} />
                <div className={styles.inputFields}>
                  <div className={styles.inputField}>
                    <span>Origin</span>
                    <span className="p-input-icon-left">
                      <i className="pi pi-search" />
                      <InputText placeholder="Agra" />
                    </span>
                  </div>
                  <div className={styles.inputField}>
                    <span>Destination</span>
                    <span className="p-input-icon-left">
                      <i className="pi pi-search" />
                      <InputText placeholder="Dighi (Pune) (INDIG), Pune, India" />
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.inputFieldContainer}>
                <TbAnchor className={styles.inputFieldIcon} />
                <div className={styles.inputFields}>
                  <div className={styles.inputField}>
                    <span>POL</span>
                    <span className="p-input-icon-left">
                      <i className="pi pi-search" />
                      <InputText placeholder="ITAGR" />
                    </span>
                  </div>
                  <div className={styles.inputField}>
                    <span>POD</span>
                    <span className="p-input-icon-left">
                      <i className="pi pi-search" />
                      <InputText placeholder="INPEK" />
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.inputFieldContainer}>
                <RiShipFill className={styles.inputFieldIcon} />
                <div className={styles.inputFields}>
                  <div className={styles.inputField}>
                    <span>Liner/Carrier</span>
                    <div className={styles.carrierLogo}>
                      <img
                        src="https://rsb.org/wp-content/uploads/2018/04/Maersk_Logo.png"
                        alt="liner-img"
                      />
                    </div>
                  </div>
                  <div className={styles.inputField}>
                    <span>Rate ID</span>
                    <span className="p-input-icon-left">
                      <i className="pi pi-search" />
                      <InputText placeholder="Search" />
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.inputFieldContainer}>
                <GrSchedules className={styles.inputFieldIcon} />
                <div className={styles.inputFields}>
                  <div
                    className={`${styles.inputField} ${styles["inputField-s"]}`}
                  >
                    <span>Schedule</span>
                    <span>No Schedule</span>
                  </div>
                  <div
                    className={`${styles.inputField} ${styles["inputField-s"]}`}
                  >
                    <span>Sailing Date</span>
                    <span>22 Jan 2020</span>
                  </div>
                  <div
                    className={`${styles.inputField} ${styles["inputField-s"]}`}
                  >
                    <span>Transit Time</span>
                    <span>29 Days</span>
                  </div>
                  <div
                    className={`${styles.inputField} ${styles["inputField-s"]}`}
                  >
                    <span>Free Days</span>
                    <span>29 Days / 23 Days</span>
                  </div>
                </div>
              </div>
              <div className={styles.inputFieldContainer}>
                <RiShipFill className={styles.inputFieldIcon} />
                <div className={styles.inputFields}>
                  <div className={styles.inputField}>
                    <span>Load Type</span>
                    <InputText placeholder="20 GP" />
                  </div>
                  <div className={styles.inputField}>
                    <span>QTY</span>
                    <InputText placeholder="1" />
                  </div>
                  <div className={styles.inputField}>
                    <span>Total Shipment Weight</span>
                    <InputText placeholder="25000" />
                  </div>
                </div>
              </div>
              <div className={styles.inputFieldContainer}>
                <GiHook className={styles.inputFieldIcon} />
                <div className={styles.inputFields}>
                  <div className={styles.inputField}>
                    <span>Load Type</span>
                    <Dropdown
                      value={cargoType}
                      onChange={(e) => setCargoType(e.value)}
                      options={cargoTypes}
                      optionLabel="name"
                      placeholder="Cargo Type"
                      className="w-full md:w-14rem"
                    />
                  </div>
                  <div className={styles.inputField}>
                    <span>Commodity</span>
                    <MultiSelect
                      value={commodity}
                      onChange={(e) => setCommodity(e.value)}
                      options={commodities}
                      optionLabel="name"
                      display="chip"
                      placeholder="Commodity"
                      maxSelectedLabels={3}
                      className="w-full md:w-20rem"
                    />
                  </div>
                  <div className={styles.inputField}>
                    <span>HS Code</span>
                    <InputText placeholder="4283" />
                  </div>
                </div>
              </div>
              <div className={styles.inputFieldContainer}>
                <FaCommentAlt className={styles.inputFieldIcon} />
                <div className={styles.inputFields}>
                  <div className={styles.inputField}>
                    <span>Load Type</span>
                    <InputTextarea
                      style={{ resize: "none" }}
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      rows={5}
                      cols={60}
                      placeholder="Comments"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.partiesDetails}>
            <div className={styles.partiedHeader}>
              <span>Parties Involved Details</span>
            </div>
            <div className={styles.partiesTable}>
              <DataTable
                showGridlines
                value={Parties}
                tableStyle={{ minWidth: "600px" }}
              >
                <Column
                  field="partiesInvolved"
                  header="parties Involved"
                ></Column>
                <Column
                  field="Details"
                  body={detailsBody}
                  header="Name"
                ></Column>
                <Column body={actionBody} header="Action"></Column>
              </DataTable>
            </div>
          </div>
        </div>
        <div className={styles.rateSummary}>
          <div className={styles.rateSummaryHeader}>
            <span>Rate Summary</span>
          </div>
          <div className={styles.upperLayout}>
            <div className={styles.rateSummaryDatapoints}>
              <div>
                <span>Origin Charges</span>
                <span>INR 100.00</span>
              </div>
              <div>
                <span>Origin Customs Charges</span>
                <span>-</span>
              </div>
              <div>
                <span>Freight Charges</span>
                <span>USD 100.00</span>
              </div>
              <div>
                <span>Destination Customs Charges</span>
                <span>EUR 100.00</span>
              </div>
              <div>
                <span>Destination Charges</span>
                <span>EUR 100.00</span>
              </div>
              <div>
                <span className={styles.hyper}>
                  View Exchange Rates
                  <FiArrowRight className={styles.hyperIcon} />
                </span>
              </div>
              <div className={styles.conveniceFee}>
                <span>Convenience Fee</span>
                <span> EUR 0.00</span>
              </div>
            </div>
          </div>
          <div className={styles.lowerLayout}>
            <div className={styles.totalCharges}>
              <div>
                <span>Total Charges</span>
                <span>USD 400.00</span>
              </div>
            </div>
            <div className={styles.Cancellation}>
              <span>Cancellation fee USD 600.0 applicable</span>
              <span>Learn more</span>
            </div>
            <div className={styles["live-booking"]}>
              <SlReload className={styles.reloadIcon} />
              <div>
                <span>Live Carrier booking</span>
                <span>Button will be enable when available</span>
              </div>
            </div>
            <div className={styles.bookingBtn}>
              <Button
                className={styles.reqBtn}
                label="Request Booking"
                icon="pi pi-arrow-right"
                iconPos="right"
                onClick={() => setVisible(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
