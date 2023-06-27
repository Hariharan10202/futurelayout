import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "./DataTable.module.css";
import { Roles } from "../../Internalteamandroles/Roles";
import { Teams } from "../../Internalteamandroles/Teams";

import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { AiFillEye } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { GrCheckmark } from "react-icons/gr";

import { Users } from "../../Internalteamandroles/Users";
import { CustomerCompany } from "../../CustomerAndAgents/CustomerCompany";
import { Tags } from "../SystemData/Tags";
import { shipmentData } from "../SystemData/Shipment";

const Table = ({ sidePanel, dataValue }) => {
  const [data, setData] = useState(Users);
  const [loading, setLoading] = useState(true);

  const rolesColumns = [
    { field: "roleName", header: "Role Name" },
    { field: "targetUser", header: "Target User" },
    { field: "Modules", header: "Modules" },
  ];

  const teamsColumns = [
    { field: "teamName", header: "Team Name" },
    { field: "manager", header: "Manager" },
    { field: "members", header: "Members" },
    { field: "parentTeam", header: "Parent Team" },
  ];

  const usersColumns = [
    { field: "Name", header: "Name" },
    { field: "Email", header: "Email" },
    { field: "Role", header: "Role" },
    { field: "Created", header: "Created On" },
    { field: "Status", header: "Status" },
  ];

  const customerCompanyColumns = [
    { field: "ShipperName", header: "Shipper Name" },
    { field: "Email", header: "Email" },
    { field: "ShipperUser", header: "Shipper User" },
    { field: "Created", header: "Created On" },
  ];

  const tagsColumns = [{ field: "TagName", header: "Tag Name" }];

  const [columns, setColumns] = useState(usersColumns);

  useEffect(() => {
    setData(
      sidePanel === "Users"
        ? Users
        : sidePanel === "Assign Shippers"
        ? []
        : sidePanel === "Roles"
        ? Roles
        : sidePanel === "Teams"
        ? Teams
        : sidePanel === "Customer Company"
        ? CustomerCompany
        : sidePanel === "Customer/Agent"
        ? Users
        : sidePanel === "Tags"
        ? Tags
        : sidePanel === "Shipment"
        ? shipmentData
        : []
    );

    setColumns(
      sidePanel === "Users"
        ? usersColumns
        : sidePanel === "Assign Shippers"
        ? []
        : sidePanel === "Roles"
        ? rolesColumns
        : sidePanel === "Teams"
        ? teamsColumns
        : sidePanel === "Customer Company"
        ? customerCompanyColumns
        : sidePanel === "Customer/Agent"
        ? usersColumns
        : sidePanel === "Tags"
        ? tagsColumns
        : []
    );

    setLoading(false); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidePanel]);

  const ActionBodyTemplate = () => {
    return (
      <div className={styles.actionContainer}>
        <MdModeEditOutline />
        <AiFillEye />
        <FaTrash />
      </div>
    );
  };

  const TrashBodyTemplate = () => {
    return (
      <div className={styles.actionContainer}>
        <FaTrash />
      </div>
    );
  };

  const TagBodyTemplate = (rowData) => {
    return (
      <div>
        <BsPencilFill color={rowData.TagColor} />
      </div>
    );
  };

  const shipMentStatusNameTemplate = (rowData) => {
    return (
      <div className={styles.shipMentTemplate}>
        <span>{rowData.StatusName}</span>
        <span>{rowData.subtext}</span>
      </div>
    );
  };

  const RoleTypeBodyTemplate = (rowData) => {
    return (
      <span
        className={
          rowData === "User Defined"
            ? `${styles.userDefined}`
            : `${styles.Global}`
        }
      >
        {rowData.RoleType}
      </span>
    );
  };

  const FCLTemplate = (rowData) => {
    return (
      <div>{rowData.FCL && <GrCheckmark className={styles.checkIcon} />}</div>
    );
  };

  const LCLTemplate = (rowData) => {
    return (
      <div>{rowData.LCL && <GrCheckmark className={styles.checkIcon} />}</div>
    );
  };

  const AIRTemplate = (rowData) => {
    return (
      <div>{rowData.AIR && <GrCheckmark className={styles.checkIcon} />}</div>
    );
  };

  const columnComponents = columns?.map((col) => {
    return (
      <Column
        className={styles.columnWidth}
        key={col.field}
        field={col.field}
        header={col.header}
      />
    );
  });

  const shipmentColumnsData = [
    { body: FCLTemplate, header: "FCL" },
    { body: LCLTemplate, header: "LCL" },
    { body: AIRTemplate, header: "AIR" },
  ];

  const shipmentColumns = shipmentColumnsData?.map((col) => {
    return (
      <Column
        className={styles.columnWidth}
        key={col.header}
        body={col.body}
        header={col.header}
      />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.Rolesheading}>
          <span>{sidePanel}</span>
          <span>{data.length} Roles Available</span>
        </div>
        <div>
          <button className={styles.roleButton}>
            <GrAdd /> Create New Role
          </button>
        </div>
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.pagination}>
          <span>Show</span>
          <select name="" id="">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>

          <span>entries</span>
        </div>
        <div className={styles.searchBar}>
          <span>Search:</span>
          <input type="text" />
        </div>
      </div>
      <div className={styles.card}>
        {!loading && (
          <DataTable value={data} responsiveLayout="scroll">
            {sidePanel === "Shipment" ? (
              <Column
                header="Status Name"
                body={shipMentStatusNameTemplate}
              ></Column>
            ) : (
              columnComponents
            )}
            {sidePanel === "Roles" ? (
              <Column header="Role Type" body={RoleTypeBodyTemplate}></Column>
            ) : (
              sidePanel === "Tags" && (
                <Column header="Tag Color" body={TagBodyTemplate}></Column>
              )
            )}
            {sidePanel === "Tags" ? (
              <Column header="Action" body={TrashBodyTemplate}></Column>
            ) : sidePanel === "Shipment" ? (
              shipmentColumns
            ) : (
              <Column header="Action" body={ActionBodyTemplate}></Column>
            )}
          </DataTable>
        )}
      </div>
    </div>
  );
};

export default Table;
