import React from "react";
import styles from "./Currency.module.css";

import { AiFillCheckSquare } from "react-icons/ai";
import AccordionPanel from "../Accordion/AccordionPanel";

const Currency = () => {
  return (
    <div className={styles.container}>
      <div className={styles.currencyHeader}>
        <div className="">
          <span>Currency Settings</span>
          <p>
            The base currency, currency conversion markup and mapping for the
            rates can be configured below. The base currency is the default
            currency for all the users across the platform. Please note that the
            currency conversions are based on the base currency.
          </p>
        </div>
        <div className={styles.currencyButton}>
          <div>
            <button>
              <AiFillCheckSquare /> Notifications
            </button>
            <button>View Exchange Rates</button>
          </div>
        </div>
      </div>
      <AccordionPanel
        header={"Base Currency"}
        subtext={
          "The base currency is the default currency for all the users across the platform."
        }
      />
      <AccordionPanel header={"Mark up"} subtext={"100% Percentage added."} />
      <AccordionPanel header={"Mapping"} />
    </div>
  );
};

export default Currency;
