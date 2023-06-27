import React, { useEffect, useState } from "react";
// import styles from "./MultiSelect.module.css";
import { MultiSelect } from "primereact/multiselect";
import "./styles.css";
import { useSelector } from "react-redux";

const MultiSelectComponent = ({ setLinerFilter }) => {
  const linerLogo = useSelector((state) => state.liner.data);
  const [selectedLiner, setSelectedLiner] = useState(linerLogo);

  useEffect(() => {
    setSelectedLiner(linerLogo);
  }, [linerLogo]);

  useEffect(() => {
    setLinerFilter(selectedLiner);
  }, [selectedLiner, setLinerFilter]);

  const countryTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <img
          alt={option.name}
          src={option.logo}
          className={`mr-2 flag}`}
          style={{ width: "18px" }}
        />
        <div>{option.name}</div>
      </div>
    );
  };

  const panelFooterTemplate = () => {
    const length = selectedLiner ? selectedLiner.length : 0;

    return (
      <div className="py-2 px-3">
        <b>{length}</b> item{length > 1 ? "s" : ""} selected.
      </div>
    );
  };

  return (
    <MultiSelect
      filter
      value={selectedLiner}
      options={linerLogo}
      onChange={(e) => setSelectedLiner(e.value)}
      optionLabel="name"
      placeholder="Liners"
      itemTemplate={countryTemplate}
      panelFooterTemplate={panelFooterTemplate}
      className="w-full"
      maxSelectedLabels={1}
    />
  );
};

export default MultiSelectComponent;
