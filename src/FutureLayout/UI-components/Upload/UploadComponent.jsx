import React from "react";

import { FileUpload } from "primereact/fileupload";

const UploadComponent = () => {
  const onUpload = () => {};

  return (
    <FileUpload
      mode="basic"
      name="demo[]"
      url="/api/upload"
      accept="image/*"
      maxFileSize={1000000}
      onUpload={onUpload}
      auto
      chooseLabel="Browse"
    />
  );
};

export default UploadComponent;
