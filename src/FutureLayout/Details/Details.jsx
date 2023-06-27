import React from "react";
// import styles from "./Details.module.css";
import RateDetail from "../RateDetails/RateDetail";
import QuotesDetails from "../QuotesDetails/QuotesDetails";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";
import QuoteGenerate from "../QuoteGenerate/QuoteGenerate";
import BookingSummary from "../BookingSummary/BookingSummary";
import ShipmentsDetail from "../ShipmentsDetails/ShipmentsDetail";

const Details = ({
  section,
  rate,
  showFooter,
  isVisible,
  setVisible,
  quotes,
  cardSelected,
}) => {
  const isLoading = useSelector((state) => state.rates.pending);

  const style = {
    flexGrow: 1,
    flexShrink: 1,
    minHeight: "100vh",
    backgroundColor: "#3333336a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      {section === 1 ? (
        isLoading ? (
          <div style={style}>
            <ReactLoading height={100} type={"spin"} color="#333" />
          </div>
        ) : (
          <RateDetail
            isVisible={isVisible}
            showFooter={showFooter}
            rate={rate}
          />
        )
      ) : section === 2 ? (
        "Inquiry"
      ) : section === 3 ? (
        isLoading ? (
          <div style={style}>
            <ReactLoading width={100} height={100} type={"spin"} color="#333" />
          </div>
        ) : (
          <QuotesDetails cardSelected={cardSelected} quoteCards={quotes} />
        )
      ) : section === 4 ? (
        <QuoteGenerate setData={setVisible} data={isVisible} />
      ) : section === 6 ? (
        <BookingSummary />
      ) : (
        <ShipmentsDetail />
      )}
    </>
  );
};

export default Details;
