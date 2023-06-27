import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import styles from "./Configure.module.css";
import "./tabLine.css";
import ConfigData from "../ConfigurationData/ConfigData";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Configure() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Configuration</h1>
      <Box className={styles.container}>
        <Box sx={{ borderBottom: 1, borderColor: "#afafaf" }}>
          <Tabs
            className={styles.Tabs}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              className={styles.label}
              label="System Data"
              {...a11yProps(0)}
            />
            <Tab
              className={styles.label}
              label="Customer & Agents"
              {...a11yProps(1)}
            />
            <Tab
              className={styles.label}
              label="Internal Team & Roles"
              {...a11yProps(2)}
            />
            <Tab
              className={styles.label}
              label="Terms & Conditions"
              {...a11yProps(3)}
            />
            <Tab
              className={styles.label}
              label="Communication Email"
              {...a11yProps(4)}
            />
          </Tabs>
        </Box>
        <TabPanel className={styles.tabPanel} value={value} index={0}>
          <ConfigData dataValue={"System Data"} />
        </TabPanel>
        <TabPanel className={styles.tabPanel} value={value} index={1}>
          <ConfigData dataValue={"Customer & Agents"} />
        </TabPanel>
        <TabPanel className={styles.tabPanel} value={value} index={2}>
          <ConfigData dataValue={"Internal Team & Roles"} />
        </TabPanel>
        <TabPanel className={styles.tabPanel} value={value} index={3}>
          <ConfigData dataValue={"Terms & Conditions"} />
        </TabPanel>
        <TabPanel className={styles.tabPanel} value={value} index={4}>
          <ConfigData dataValue={"Communication Email"} />
        </TabPanel>
      </Box>
    </div>
  );
}
