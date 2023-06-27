import React from "react";
import Quotes from "../Quotes/Quotes";
import QuotesDetails from "../QuotesDetails/QuotesDetails";
import styles from "./QuotesContainer.module.css";

const QuotesContainer = ({
  setCardSelected,
  setQuotes,
  cardSelected,
  quotes,
}) => {
  return (
    <div className={styles.QuotesContainer}>
      <div>
        <Quotes setCardSelected={setCardSelected} setQuotes={setQuotes} />
      </div>
      <div>
        <QuotesDetails cardSelected={cardSelected} quoteCards={quotes} />
      </div>
    </div>
  );
};

export default QuotesContainer;
