import React, { useState } from "react";
import RateSearch from "./RateSearch";
import { Dialog } from "primereact/dialog";

const SearchModal = ({ visible, setVisible }) => {
  return (
    <Dialog
      header="Instant Rates"
      visible={visible}
      style={{ width: "40vw" }}
      onHide={() => setVisible(false)}
    >
      <RateSearch setVisible={setVisible} />
    </Dialog>
  );
};

export default SearchModal;
