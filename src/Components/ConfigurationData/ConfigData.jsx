import React, { useEffect, useState } from "react";
import styles from "./ConfigData.module.css";
import {
  CustomersAndAgents,
  InternalTeamAndRoles,
  SystemData,
  TermsAndConditions,
} from "../../configurations";

import { FaUserAlt } from "react-icons/fa";

// import { HiArrowNarrowRight } from "react-icons/hi";
import Table from "../DataTable/Table";
import CommunicationEmail from "../CommunicationEmail/CommunicationEmail";

import TermsConditions from "../TermsAndConditions/TermsConditions";
import Currency from "../Currency/Currency";

const ConfigData = ({ dataValue }) => {
  const [data, setData] = useState([]);

  const [sidePane, setSidePane] = useState("Users");

  useEffect(() => {
    setData(
      dataValue === "System Data"
        ? SystemData
        : dataValue === "Customer & Agents"
        ? CustomersAndAgents
        : dataValue === "Internal Team & Roles"
        ? InternalTeamAndRoles
        : dataValue === "Terms & Conditions"
        ? TermsAndConditions
        : []
    );

    setSidePane(
      dataValue === "System Data"
        ? "Currency"
        : dataValue === "Customer & Agents"
        ? "Customer Company"
        : dataValue === "Internal Team & Roles"
        ? "Users"
        : dataValue === "Terms & Conditions"
        ? "SEA"
        : []
    );
  }, [dataValue]);

  console.log(sidePane);

  return (
    <>
      <div className={styles.Wrapper}>
        {dataValue !== "Communication Email" && (
          <div className={styles.container}>
            {data.map((item) => {
              return (
                <div
                  className={
                    sidePane === item.text
                      ? `${styles.list} ${styles.activeTab}`
                      : item.id === 1 && !sidePane
                      ? `${styles.list} ${styles.activeTab}`
                      : `${styles.list}`
                  }
                  key={item.id}
                  onClick={() => setSidePane(item.text)}
                >
                  <div className={styles.left}>
                    <FaUserAlt className={styles.icon} />
                  </div>
                  <div className={styles.content}>{item.text}</div>
                </div>
              );
            })}
          </div>
        )}
        <div>
          {dataValue === "Communication Email" ? (
            <CommunicationEmail />
          ) : dataValue === "Terms & Conditions" ? (
            <TermsConditions sidePanel={sidePane} />
          ) : sidePane === "Currency" ? (
            <Currency />
          ) : (
            <Table dataValue={dataValue} sidePanel={sidePane} />
          )}
        </div>
        {/* <div className={styles.footer}>
        <button>
        <span>Save</span> <HiArrowNarrowRight className={styles.saveIcon} />
        </button>
      </div> */}
      </div>
    </>
  );
};

export default ConfigData;
