import React from "react";
import styles from "./ShipmentsDetails.module.css";
import { FiArrowLeft } from "react-icons/fi";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import ShipmentDetails from "./Tabs/ShipmentDetails/ShipmentDetails";
import Quotes from "./Tabs/Quotes/Quotes";
import BillingInfo from "./Tabs/Billinginfo/Billinginfo";
import Containers from "./Tabs/Containers/Containers";
import Contact from "./Tabs/Contact/Contact";
import Documents from "./Tabs/Documents/Documents";
import Tracking from "./Tabs/Tracking/Tracking";

const ShipmentsDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <FiArrowLeft className={styles.backIcon} />
          <div>
            <span>
              Shipments <b> / SEA-FCL</b>
            </span>
            <span>XYZWL9HQ</span>
          </div>
        </div>
        <div className={styles.headerActions}>
          <Button
            label="Booking Received"
            className="p-button-outlined"
            icon="pi pi-chevron-down"
            iconPos="right"
          />
          <Button
            label="Edit"
            className="p-button-outlined"
            icon="pi pi-pencil"
          />
          <Button
            label="Delete"
            className="p-button-outlined"
            icon="pi pi-trash"
          />
        </div>
      </div>
      <div className={styles.dataPoints}>
        <div>
          <div>
            <span>Origin</span>
            <span>Nankokita</span>
          </div>
          <div>
            <span>Destination</span>
            <span>MXALT/Atotonilco de Tula...</span>
          </div>
          <div>
            <span>Load Details</span>
            <span>20GPx1</span>
          </div>
          <div>
            <span>Incoterms</span>
            <span>N/A</span>
          </div>
          <div>
            <span>Carrier Name</span>
            <span>ONE</span>
          </div>
          <div>
            <span>Voyage</span>
            <span>N/A</span>
          </div>
          <div>
            <span>Rollable</span>
            <span>No</span>
          </div>
          <div>
            <span>Cutt Off Date</span>
            <span>3 Mar 2023</span>
          </div>
          <div>
            <span>Delivery Date</span>
            <span>N/A</span>
          </div>
        </div>
        <div>
          <div>
            <span>Customer</span>
            <span>Add Shipper Name</span>
          </div>
          <div>
            <span>Consignee</span>
            <span>Add Shipper Name</span>
          </div>
          <div>
            <span>Shipment Specialist</span>
            <span>N/A</span>
          </div>
          <div>
            <span>Document Expert</span>
            <span>N/A</span>
          </div>
          <div>
            <span>Mode</span>
            <span>SEA-FCL</span>
          </div>
          <div>
            <span>Commodity</span>
            <span>Rice</span>
          </div>
        </div>
      </div>
      <TabView>
        <TabPanel header="SHIPMENTS DETAILS">
          <ShipmentDetails />
        </TabPanel>
        <TabPanel header="QUOTES">
          <Quotes />
        </TabPanel>
        <TabPanel header="BILLING INFO">
          <BillingInfo />
        </TabPanel>
        <TabPanel header="DOCUMENTS">
          <Documents />
        </TabPanel>
        <TabPanel header="CONTAINERS">
          <Containers />
        </TabPanel>
        <TabPanel header="TRACKING">
          <Tracking />
        </TabPanel>
        <TabPanel header="CONTACT">
          <Contact />
        </TabPanel>
      </TabView>
    </div>
  );
};

export default ShipmentsDetail;
