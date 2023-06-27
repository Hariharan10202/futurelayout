import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./table.css";

import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MultiSelect } from "primereact/multiselect";

import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Popup } from "semantic-ui-react";
import { useSelector } from "react-redux";

const Table = ({ setVisible }) => {
  const isLoading = useSelector((state) => state.rates.pending);
  const rateData = useSelector((state) => state.rates.data);

  const data = useRef(null);

  const columns = [
    {
      field: "Origin",
      header: "Origin",
    },
    {
      field: "POL",
      header: "POL",
    },
    {
      field: "viaPort",
      header: "Via Port",
    },
    {
      field: "POD",
      header: "POD",
    },
    {
      field: "Destination",
      header: "Destination",
    },
    {
      field: "sailingDate",
      header: "Sailing Date",
    },
    {
      field: "transitTimeInDays",
      header: "Transit Time",
    },
    { field: "serviceType", header: "Service Type" },
    { field: "commodity", header: "Commodity" },
    { field: "xyzForwarder", header: "XYZ Forwarder" },
    { field: "ExpiryDate", header: "Expiry Date" },
  ];

  const [selectedColumns, setSelectedColumns] = useState(columns);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [rates, setRates] = useState([]);

  useEffect(() => {
    !isLoading && setRates(rateData);
    setVisible(selectedProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProducts, setVisible, rateData]);

  const onColumnToggle = (event) => {
    let selectedColumns = event.value;
    let orderedSelectedColumns = columns?.filter((col) =>
      selectedColumns.some((sCol) => sCol.field === col.field)
    );
    setSelectedColumns(orderedSelectedColumns);
  };

  const header = (
    <div style={{ textAlign: "left" }}>
      <MultiSelect
        value={selectedColumns}
        options={columns}
        optionLabel="header"
        onChange={onColumnToggle}
        style={{ width: "40em" }}
      />
    </div>
  );

  const exportCSV = () => {
    data.current.exportCSV();
  };

  const rightToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="Export"
          icon="pi pi-upload"
          className="p-button-help"
          onClick={exportCSV}
        />
      </React.Fragment>
    );
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <>
        <Popup
          style={{
            padding: "10px",
          }}
          trigger={
            <div className="linerInfo">
              <span>
                <img
                  src={rowData.carrierLogo}
                  alt={rowData.carrierLogo ? rowData.carrierName : "liner"}
                />
              </span>
              <span style={{ fontWeight: "600", fontSize: "1rem" }}>
                {rowData.carrierName}
              </span>
            </div>
          }
        >
          <Popup.Header style={{ color: "white" }}>
            <h4>{rowData.carrierName}</h4>
          </Popup.Header>
        </Popup>
      </>
    );
  };

  const equipmentTypeTemplate = (rowData) => {
    return (
      <div data-tip="Equipment Type" className="equipment-type" tooltip="Hello">
        <div className={"gp20"}>
          <span>20 GP</span>
          <span className="cost">
            {rowData.container20GP.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </div>
        <div className={"gp40"}>
          <span>40 GP</span>
          <span className="cost">
            {rowData.container40GP.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </div>
      </div>
    );
  };

  const totalCost = (rowData) => {
    return (
      <div className="totalCost">
        <span className="cost">
          {rowData.totalUSDAmount.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </div>
    );
  };

  const actionButtons = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          flexDirection: "column",
          gap: "10px",
        }}
        tooltip="Hello"
      >
        <Button label="View Details" className="p-button-outlined" />
      </div>
    );
  };

  const sailingDataTemplate = (rowData) => {
    return <span>{rowData.sailingDate}</span>;
  };

  const transitTimeTemplate = (rowData) => {
    return <span>{rowData.transitTimeInDays}</span>;
  };

  const serviceTemplate = (rowData) => {
    return <span>{rowData.serviceType}</span>;
  };

  const commodityTemplate = (rowData) => {
    return <span>{rowData.commodity}</span>;
  };

  const ExpiryDateTemplate = (rowData) => {
    return <span>{rowData.ExpiryDate}</span>;
  };

  const OriginTemplate = (rowData) => {
    return <span>{rowData.Origin}</span>;
  };
  const DestinationTemplate = (rowData) => {
    return <span>{rowData.Destination}</span>;
  };
  const POLTemplate = (rowData) => {
    return <span>{rowData.POL}</span>;
  };
  const PODTemplate = (rowData) => {
    return <span>{rowData.POD}</span>;
  };

  const viaPortTemplate = (rowData) => {
    return <span>{rowData.viaPort}</span>;
  };

  const columnComponents = selectedColumns.map((col, entries) => {
    return (
      <Column
        key={col.field}
        field={col.field}
        body={
          col.header === "Origin"
            ? OriginTemplate
            : col.header === "Destination"
            ? DestinationTemplate
            : col.header === "POL"
            ? POLTemplate
            : col.header === "Via Port"
            ? viaPortTemplate
            : col.header === "POD"
            ? PODTemplate
            : col.header === "Sailing Date"
            ? sailingDataTemplate
            : col.header === "Transit Time"
            ? transitTimeTemplate
            : col.header === "Commodity"
            ? commodityTemplate
            : col.header === "Service Type"
            ? serviceTemplate
            : col.header === "Expiry Date" && ExpiryDateTemplate
        }
        header={col.header}
        style={{ width: "170px" }}
        sortable={
          col.field === "transitTimeInDays"
            ? true
            : col.field === "sailingDate" && true
        }
      />
    );
  });

  return (
    <div className="card">
      <Toolbar className="mb-4" right={rightToolbarTemplate}></Toolbar>
      <DataTable
        onSelectionChange={(e) => {
          setSelectedProducts(e.value);
        }}
        scrollable
        header={header}
        scrollDirection="both"
        scrollHeight="600px"
        selection={selectedProducts}
        value={rates}
        responsiveLayout="scroll"
        stripedRows
        showGridlines
      >
        <Column
          frozen
          selectionMode="multiple"
          headerStyle={{ width: "3.7rem" }}
        />
        <Column
          style={{ width: "170px" }}
          header="Liners"
          body={imageBodyTemplate}
          field="carrierName"
          frozen
          filter
        ></Column>
        {columnComponents}
        <Column
          style={{ width: "200px" }}
          header="Equipment type"
          body={equipmentTypeTemplate}
          alignFrozen="right"
          frozen={true}
        ></Column>
        <Column
          style={{ width: "120px" }}
          header="Total cost"
          field="totalUSDAmount"
          body={totalCost}
          alignFrozen="right"
          frozen={true}
          sortable
        ></Column>
        <Column
          style={{ width: "200px" }}
          header="Action"
          body={actionButtons}
          alignFrozen="right"
          frozen={true}
        ></Column>
      </DataTable>
    </div>
  );
};

export default Table;
