import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

const SelectComponent = ({ placeholder }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <Dropdown
      value={selectedCity}
      onChange={(e) => setSelectedCity(e.value)}
      options={cities}
      optionLabel="name"
      placeholder={placeholder}
      className="w-full md:w-14rem"
    />
  );
};

export default SelectComponent;
