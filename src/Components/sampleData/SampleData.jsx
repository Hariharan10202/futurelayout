import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../index.css";

import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { sampleData } from "../../sampleData";
import styles from "./sampleData.module.css";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";

const DataTableLazyDemo = () => {
  // const { readString } = usePapaParse();

  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState(null);
  const [selectedCustomers, setSelectedCustomers] = useState();

  const columns = [
    {
      field: "customerName",
      header: "Customer Name",
    },
    {
      field: "LeadDesignation",
      header: "Lead Designation",
    },
    { field: "Email", header: "Email" },
    { field: "Phone", header: "Phone" },
    { field: "Mobile", header: "Mobile" },
    { field: "CompanySize", header: "Company Size" },
    { field: "City", header: "City" },
    { field: "Country", header: "Country" },
    { field: "LeadSource", header: "Lead Source" },
    { field: "LeadSubSource", header: "Lead SubSource" },
    { field: "LeadType", header: "Lead Type" },
    { field: "ServicesOffered", header: "Services Offered" },
    { field: "Website", header: "Website" },
    { field: "DomainURL", header: "Domain URL" },
    { field: "ExhibitorSponsor", header: "Exhibitor/Sponsor" },
    { field: "FullName", header: "FullName" },
    { field: "MeetingOwner", header: "Meeting Owner" },
    { field: "Date", header: "Date" },
    { field: "LeadRegistrationID", header: "Lead Registration ID" },
    { field: "Action", header: "Action" },
  ];

  const [selectedColumns, setSelectedColumns] = useState(columns);

  const [lazyParams, setLazyParams] = useState({
    first: 0,
    rows: 10,
    page: 1,
    sortField: null,
    sortOrder: null,
    filters: {
      customerName: { value: "", matchMode: "contains" },
      LeadDesignation: { value: "", matchMode: "contains" },
      Email: { value: "", matchMode: "contains" },
      Phone: { value: "", matchMode: "contains" },
      Mobile: { value: "", matchMode: "contains" },
      CompanySize: { value: "", matchMode: "contains" },
      City: { value: "", matchMode: "contains" },
      Country: { value: "", matchMode: "contains" },
      LeadSource: { value: "", matchMode: "contains" },
      LeadSubSource: { value: "", matchMode: "contains" },
      LeadType: { value: "", matchMode: "contains" },
      ServicesOffered: { value: "", matchMode: "contains" },
      Website: { value: "", matchMode: "contains" },
      DomainURL: { value: "", matchMode: "contains" },
      ExhibitorSponsor: { value: "", matchMode: "contains" },
      Company: { value: "", matchMode: "contains" },
      MeetingOwner: { value: "", matchMode: "contains" },
      Date: { value: "", matchMode: "contains" },
      Time: { value: "", matchMode: "contains" },
      LeadRegistrationID: { value: "", matchMode: "contains" },
    },
  });

  let loadLazyTimeout = null;

  const onPage = (event) => {
    setLazyParams(event);
  };

  const onSort = (event) => {
    setLazyParams(event);
  };

  const onFilter = (event) => {
    event["first"] = 0;
    setLazyParams(event);
  };

  const actionBodyTemplate = () => {
    return (
      <div>
        <Button className={styles.button} label="Action" />
      </div>
    );
  };

  const onColumnToggle = (event) => {
    let selectedColumns = event.value;
    let orderedSelectedColumns = columns.filter((col) =>
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
        style={{ width: "20em" }}
      />
    </div>
  );

  const columnComponents = selectedColumns.map((col, entries) => {
    return (
      <Column
        key={col.field}
        field={col.field}
        body={col.field === "Action" && actionBodyTemplate}
        header={col.header}
        filter={col.field !== "Action" && true}
        sortable={col.field !== "Action" && true}
        filterPlaceholder={col.field !== "Action" && `Search by ${col.field}`}
        style={
          col.field === "Action" ? { width: "150px" } : { width: `${250}px` }
        }
      />
    );
  });
  const loadLazyData = () => {
    setLoading(true);

    if (loadLazyTimeout) {
      clearTimeout(loadLazyTimeout);
    }
    loadLazyTimeout = setTimeout(() => {
      setCustomers(sampleData);
      setLoading(false);
    }, Math.random() * 1000 + 250);
  };

  useEffect(() => {
    loadLazyData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className={styles.card}>
        <h1>Customers</h1>
        <DataTable
          header={header}
          first={lazyParams.first}
          rows={10}
          onPage={onPage}
          scrollable
          scrollDirection="both"
          scrollHeight="800px"
          onSort={onSort}
          sortField={lazyParams.sortField}
          sortOrder={lazyParams.sortOrder}
          onFilter={onFilter}
          filters={lazyParams.filters}
          loading={loading}
          filterDisplay="row"
          onSelectionChange={(e) => setSelectedCustomers(e.value)}
          selection={selectedCustomers}
          value={customers}
        >
          {columnComponents}
        </DataTable>
      </div>
    </div>
  );
};

export default DataTableLazyDemo;
