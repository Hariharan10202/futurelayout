import React, { useState } from "react";
import styles from "./ShipmentsDetails.module.css";

import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

import { Accordion, AccordionTab } from "primereact/accordion";
import { MdModeEditOutline } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import InputTextComponent from "../../../UI-components/InputText/InputText";
import EditorComponent from "../../../UI-components/Editor/EditorComponent";
import CheckBoxComponent from "../../../UI-components/Checkbox/CheckBoxComponent";
import ButtonComponent from "../../../UI-components/Button/ButtonComponent";

const ShipmentDetails = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  // const shipperBody = () => {
  //   return (
  //     <div className={styles.shipperBody}>
  //       <span>Shipper</span>
  //       <div>
  //         <MdModeEditOutline />
  //         <FaChevronDown />
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.reference}>
          <div className={styles.referenceHeader}>
            <span>References</span>
          </div>
          <div className={styles.referenceContent}>
            <div>
              <span>Inquiry No.</span>
              <span>N/A</span>
            </div>
            <div>
              <span>Quotation No.</span>
              <span>N/A</span>
            </div>
            <div>
              <span>Search Reference</span>
              <span>Nankokita to MXALT / 3 Mar 2023</span>
            </div>
            <div>
              <span>Booking ID</span>
              <span>N/A</span>
            </div>
            <div>
              <span>Order ID</span>
              <span>XYZD2820</span>
            </div>
          </div>
        </div>
        <div className={styles.loadDetails}>
          <div className={styles.loadDetailsHeader}>
            <span>Load Details</span>
          </div>
          <div className={styles.loadDetailsContent}>
            <div>
              <span>1x</span>
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="20GP"
                className="w-full md:w-14rem"
              />
              <Accordion activeIndex={0}>
                <AccordionTab>
                  <div className={styles.loadDetailsInfo}>
                    <div>
                      <span>SN</span>
                      <span>1</span>
                    </div>
                    <div>
                      <span>Total Shippment Volume</span>
                      <div>
                        <span>0</span>
                        <span>CBM</span>
                      </div>
                    </div>
                    <div>
                      <span>Total Shipment Weight</span>
                      <div>
                        <span>0</span>
                        <span>Kgs</span>
                      </div>
                    </div>
                  </div>
                </AccordionTab>
              </Accordion>
            </div>
          </div>
          <div className={styles.loadDetailsFooter}>
            <Button
              label="Add Load"
              outlined
              className="p-button p-button-outlined"
              icon="pi pi-plus-circle"
            />
            <Button label="Update" className="p-button-outlined" />
          </div>
        </div>
        <div className={styles.commodityDetails}>
          <div className={styles.commodityDetailsHeader}>
            <span>Commodity</span>
          </div>
          <div className={styles.commodityDetailsContent}>
            <div>
              <div>
                <span>Cargo type</span>
                <span>FAK</span>
              </div>
              <div>
                <span>HS Code</span>
                <span>N/A</span>
              </div>
              <div>
                <span>Commodity</span>
                <span>Rice</span>
              </div>
            </div>
            <div>
              <MdModeEditOutline className={styles.CommodityIcon} />
              <IoCloseCircle className={styles.CommodityIcon} />
            </div>
          </div>
          <div className={styles.commodityDetailsCTA}>
            <Button
              className="p-button-outlined"
              icon="pi pi-plus-circle"
              label="Add Commodity"
            />
          </div>
        </div>
        <div className={styles.partiesInvoloved}>
          <div className={styles.partiesInvolovedHeader}>
            <span>Parties Involved</span>
          </div>
          <div className={styles.partiesInvolovedContent}>
            <Accordion activeIndex={[0]}>
              <AccordionTab
                header={
                  <div className={styles.shipperBody}>
                    <span>Shipper</span>
                    {/* <div>
                      <MdModeEditOutline />
                      <FaChevronDown />
                    </div> */}
                  </div>
                }
              >
                <div className={styles.accordionContent}>
                  <div>
                    <span>Contact person</span>
                    <span>Sesha test</span>
                  </div>
                  <div>
                    <span>Company</span>
                    <span>testsesha</span>
                  </div>
                  <div>
                    <span>Email</span>
                    <span>testsesha</span>
                  </div>
                  <div>
                    <span>Phone</span>
                    <span>94888364838</span>
                  </div>
                  <div>
                    <span>Address</span>
                    <span>-</span>
                  </div>
                  <div>
                    <span>Expiry Date</span>
                    <span>18/04/2023</span>
                  </div>
                </div>
              </AccordionTab>
            </Accordion>
            <div className={styles.accordionbody}>
              <div>
                <span>Consignee</span>
                <Button
                  label="Add"
                  className="p-button-outlined"
                  icon="pi pi-plus"
                />
              </div>
              <div>
                <span>Notify Party</span>
                <Button
                  label="Add"
                  className="p-button-outlined"
                  icon="pi pi-plus"
                />
              </div>
              <div>
                <span>CHA</span>
                <Button
                  label="Add"
                  className="p-button-outlined"
                  icon="pi pi-plus"
                />
              </div>
            </div>
            <div className={styles.partiesinvolovedFooter}>
              <Button
                label="Add New Party"
                className="p-button-outlined"
                icon="pi pi-plus-circle"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.SchedulesDetails}>
          <div className={styles.SchedulesDetailsHeader}>
            <span>Schedules Details</span>
            <Button
              label="Select New Schedule"
              className="p-button-outlined"
              icon="pi pi-plus-circle"
            />
          </div>
          <div>
            <span>No Schedules details are available</span>
            <Button
              label="Add Schedule"
              className="p-button-outlined"
              icon="pi pi-plus-circle"
            />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.updates}>
          <div className={styles.updatesHeader}>
            <span>Update</span>
          </div>
          <div className={styles.updatesContent}>
            <div>
              <BsFillCheckCircleFill className={styles.updateDataPointIcon} />
              <div className={styles.inputColumn}>
                <span>Booking Received</span>
                <span>17 Mar 2023, 10:24 AM</span>
              </div>
            </div>
            <div>
              <BsFillPersonCheckFill className={styles.updateDataPointIcon} />
              <div className={styles.inputColumn}>
                <span>Click VR</span>
                <span>17 Mar 2023, 10:24 AM</span>
              </div>
            </div>
            <div className={styles.updateComments}>
              <div className={styles.inputColumn}>
                <span>Comments</span>
                <InputTextComponent placeholder={"Comments"} />
              </div>
            </div>
            <div>
              <BsFillPersonCheckFill className={styles.updateDataPointIcon} />
              <div className={styles.inputColumn}>
                <span>
                  Click VR created the shipment (Shipment ID : XYZ0EH65)
                </span>
                <span>17 Mar 2023, 10:24 AM</span>
              </div>
            </div>
            <div>
              <EditorComponent />
            </div>
            <div className={styles.footer}>
              <CheckBoxComponent
                placeholder={"Send Notification"}
                checkId={"sendNotfiy"}
              />
              <ButtonComponent label={"Post"} type="p-button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetails;
