import React from "react";
import styles from "./Charges.module.css";
import { DataTable } from "primereact/datatable";
// import { legTable } from "../../legTable";

import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import "./table.css";
// import { fontWeight } from "@mui/system";

// import CC from "currency-converter-lt";

const Charges = ({ charges }) => {
  // const [currency, setCurrency] = useState([]);
  // const [currentCurrency, setCurrentCurrency] = useState();

  const style = { color: "#B5B5B5", fontWeight: 400 };

  const buyRateTemplate = (rowData) => {
    return (
      <>
        <span style={style}>{rowData.rateCurrency}</span>
        <span> {rowData.rate}</span>
      </>
    );
  };

  const sellRateUnitPriceTemplate = (rowData) => {
    return (
      <>
        <span style={style}>{rowData.rateCurrency}</span>
        <span> {rowData.rate}</span>
      </>
    );
  };

  const sellRateTemplate = (rowData) => {
    return (
      <>
        <span style={style}>{rowData.rateCurrency}</span>
        <span> {rowData.rate}</span>
      </>
    );
  };

  const containerTypeTemplate = (rowData) => {
    return (
      <span>{rowData.containerType === "" ? "-" : rowData.containerType}</span>
    );
  };

  let headerGroup = (
    <ColumnGroup>
      <Row>
        <Column header="Charges" rowSpan={3} />
        <Column header="Basis" rowSpan={3} />
        <Column header="Equipment Type" rowSpan={3} />
        <Column header="Quantity" rowSpan={3} />
      </Row>
      <Row>
        <Column header="Buy Rates" colSpan={2} />
        <Column header="Sell Rates" colSpan={2} />
      </Row>
      <Row>
        <Column header="Unit Price" body={buyRateTemplate} />
        <Column header="Amount" body={buyRateTemplate} />
        <Column header="Unit Price" body={sellRateTemplate} />
        <Column header="Amount" body={sellRateTemplate} />
      </Row>
    </ColumnGroup>
  );

  return (
    <div className={styles.charges}>
      <div className={styles.freight}>
        <span className={styles.freightHeader}>Freight</span>
        <span></span>
      </div>
      <div className={styles.freightTable}>
        <DataTable
          value={charges}
          headerColumnGroup={headerGroup}
          responsiveLayout="scroll"
          showGridlines
        >
          <Column
            className={styles.column}
            field="description"
            header="Charges"
          ></Column>
          <Column field="rateBasis" header="Basis"></Column>
          <Column
            field="containerType"
            header="Equipment"
            body={containerTypeTemplate}
          ></Column>
          <Column field="qty" header="Quantity"></Column>
          <Column
            field="amount"
            header="Unit Price"
            body={buyRateTemplate}
          ></Column>
          <Column
            field="amount"
            header="Amount"
            body={buyRateTemplate}
          ></Column>
          <Column
            field="amount"
            header="Unit Price"
            body={sellRateUnitPriceTemplate}
          ></Column>
          <Column
            field="amount"
            header="Amount"
            body={sellRateTemplate}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default Charges;
