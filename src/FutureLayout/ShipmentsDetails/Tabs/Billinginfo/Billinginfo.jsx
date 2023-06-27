import React from "react";
import styles from "./BillingInfo.module.css";
import { Button } from "primereact/button";
import { RiShip2Fill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { BsFillTrash3Fill } from "react-icons/bs";
import { GrDocument } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

const Billinginfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.billinginfo}>
        <div className={styles.billinginfoHeader}>
          <span>Billing Info</span>
          <Button label="Add New Leg" icon="pi pi-plus-circle" />
        </div>
        <div className={styles.billinginfoBody}>
          <div>
            <div className={styles.billinginfoContainer}>
              <div>
                <RiShip2Fill className={styles.startIcon} />
              </div>
              <div>
                <div className={styles.left}>
                  <div>
                    <span>Freight</span>
                    <MdModeEdit />
                    <BsFillTrash3Fill />
                  </div>
                  <span>Basic Ocean Freight 20GP</span>
                </div>
                <div>
                  <div className={styles.middle}>
                    <div>
                      <span>Buy Rates</span>
                      <span>USD 134.44</span>
                    </div>
                    <span>USD 134.44</span>
                  </div>
                  <div className={styles.right}>
                    <div>
                      <span>Buy Rates</span>
                      <span>USD 134.44</span>
                    </div>
                    <span>USD 134.44</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.billinginfoContainer}>
              <div>
                <GrDocument className={styles.startIcon} />
              </div>
              <div>
                <div className={styles.left}>
                  <div>
                    <span>Origin Charges</span>
                    <MdModeEdit />
                    <BsFillTrash3Fill />
                  </div>
                  <span>port_and_terminal_wharfage 20GP</span>
                </div>
                <div>
                  <div className={styles.middle}>
                    <div>
                      <span>Buy Rates</span>
                      <span>USD 134.44</span>
                    </div>
                    <span>USD 134.44</span>
                  </div>
                  <div className={styles.right}>
                    <div>
                      <span>Buy Rates</span>
                      <span>USD 134.44</span>
                    </div>
                    <span>USD 134.44</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.billinginfoFooter}>
              <div>
                <span>Total</span>
                <div>
                  <span>AED 8,759</span>
                  <span>AED 8,759</span>
                </div>
              </div>
              <div className={styles.bottom}>
                <div>
                  <span>Gross profit</span>
                  <div>
                    <span>View Exchange Rates</span>
                    <FiArrowRight className={styles.arrowIcon} />
                  </div>
                </div>
                <div>
                  <div>
                    <BsGraphUpArrow />
                    <span>AED 0</span>
                  </div>
                  <span>0% Profit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Invoice}>
        <div className={styles.InvoiceHeader}>
          <span>INVOICE</span>
        </div>
        <div className={styles.InvoiceContent}>
          <span>Invoice Date : N/A</span>
          <span>Credit (In Days): N/A</span>
          <span>Payment Due Date: N/A</span>
          <span>Invoice Amount: N/A</span>
        </div>
        <div className={styles.invoiceMsg}>
          <span>No Invoice available</span>
        </div>
        <div className={styles.InvoiceCTA}>
          <Button icon="pi pi-plus" label="Add Invoice" />
        </div>
        <div className={styles.footer}>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </div>
  );
};

export default Billinginfo;
