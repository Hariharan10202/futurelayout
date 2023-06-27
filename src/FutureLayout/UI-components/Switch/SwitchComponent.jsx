import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

const SwitchComponent = () => {
  const [checked, setChecked] = useState(false);

  const styles = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <div style={styles}>
      <span>No</span>
      <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
      <span>Yes</span>
    </div>
  );
};

export default SwitchComponent;
