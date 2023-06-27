import React from "react";
import styles from "./Documents.module.css";
import UploadComponent from "../../../UI-components/Upload/UploadComponent";
import InputTextComponent from "../../../UI-components/InputText/InputText";
import SelectComponent from "../../../UI-components/Select/SelectComponent";
import SwitchComponent from "../../../UI-components/Switch/SwitchComponent";
import TextAreaComponent from "../../../UI-components/TextArea/TextAreaComponent";
import ButtonComponent from "../../../UI-components/Button/ButtonComponent";

const Documents = () => {
  return (
    <div className={styles.container}>
      <div className={styles.documentsHeader}>
        <span>Documents</span>
      </div>
      <div className={styles.documentBody}>
        <div>
          <div className={styles.documentIUpload}>
            <div>
              <UploadComponent />
              <span>Max. 1 File at a time</span>
            </div>
          </div>
          <div className={styles.InputField}>
            <div>
              <span>Enter File Name*</span>
              <InputTextComponent placeholder={"Enter File Name"} />
            </div>
            <div>
              <span>Enter File Name*</span>
              <SelectComponent placeholder={"Select File Type"} />
            </div>
            <div>
              <span>Approval Required</span>
              <SwitchComponent />
            </div>
          </div>
          <div className={styles.Comments}>
            <div>
              <span>Comments</span>
              <TextAreaComponent />
            </div>
          </div>
        </div>
        <div className={styles.documentsActions}>
          <ButtonComponent label={"Clear"} type={"p-button-outlined"} />
          <ButtonComponent
            label={"Upload files"}
            type={"p-button"}
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Documents;
