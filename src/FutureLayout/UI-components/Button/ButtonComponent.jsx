import React from "react";
import { Button } from "primereact/button";

const ButtonComponent = ({
  label,
  type,
  loading = false,
  disabled = false,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      label={label}
      className={type}
      loading={loading}
      disabled={disabled}
    />
  );
};

export default ButtonComponent;
