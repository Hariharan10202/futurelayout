import React from "react";
import styles from "./Modal.module.css";
import { Dialog } from "primereact/dialog";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Button } from "primereact/button";

const Modal = ({ setVisible, visible }) => {
  return (
    <div>
      <Dialog
        header="Booking Summary"
        visible={visible}
        style={{ width: "30%" }}
        onHide={() => setVisible(false)}
      >
        <div className={styles.body}>
          <div>
            <BsFillCheckCircleFill className={styles.checked} />
            <span className={styles.orderId}>
              Your order Id <b>"XYZ5211V"</b> has been requested successfully
            </span>
            <span>
              You shall receive a call from our team within 24hours to verify &
              process your booking further
            </span>
          </div>
        </div>
        <div className={styles.footer}>
          <div>
            <span>Need assistance? Call: </span>
            <span>1800 1200 1111</span>
          </div>
          <div>
            <Button label="View Shipment" icon="pi pi-eye" />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Modal;
