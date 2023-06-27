import React, { useState } from "react";
import styles from "./FutureLayout.module.css";
import Navbar from "./Navbar/Navbar";
import ListingSection from "./ListingSection/ListingSection";
import Details from "./Details/Details";
import Footer from "./Footer/Footer";
import SearchModal from "./RateSearch/SearchModal";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Quotes from "./Quotes/Quotes";
import Shipments from "./Shipments/Shipments";
import QuotesContainer from "./QuotesConatiner/QuotesContainer";
import RatesContainer from "./RatesContainer/RatesContainer";
import ShipmentsContainer from "./ShipmentsContainer/ShipmentsContainer";
import QuoteGenerate from "./QuoteGenerate/QuoteGenerate";

const FutureLayout = () => {
  const [section, setSection] = useState(1);
  const [quotes, setQuotes] = useState([]);
  const [rate, setRate] = useState([]);
  const [isVisible, setVisible] = useState([]);
  const [showFooter, setShowFooter] = useState([]);
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const [cardSelected, setCardSelected] = useState(false);
  const [searchModal, setSearchModal] = useState(true);
  const [currentPath, setCurrentPath] = useState("/rates");

  return (
    <div className={styles.layout}>
      <Router>
        <Navbar
          setSearchModal={setSearchModal}
          setSection={setSection}
          setVisible={setVisible}
          setShowFooter={setShowFooter}
          setIsFooterVisible={setIsFooterVisible}
        />
        <SearchModal visible={searchModal} setVisible={setSearchModal} />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />}></Route>
          <Route path="/dashboard" element={<h1>Hello</h1>}></Route>
          <Route
            path="/rates"
            element={
              <RatesContainer
                setCurrentPath={setCurrentPath}
                searchModal={searchModal}
                setShowFooter={setShowFooter}
                setVisible={setVisible}
                isVisible={isVisible}
                setRate={setRate}
                rate={rate}
                showFooter={showFooter}
                isFooterVisible={isFooterVisible}
                setIsFooterVisible={setIsFooterVisible}
              />
            }
          ></Route>

          <Route path="/inquiry" element={<>Inquiry</>}></Route>
          <Route
            path="/quotegenerate/:id"
            element={
              <QuoteGenerate
                setCurrentPath={setCurrentPath}
                currentPath={currentPath}
                setData={setVisible}
                data={isVisible}
              />
            }
          ></Route>
          <Route
            path="/quotes"
            element={
              <QuotesContainer
                isFooterVisible={isFooterVisible}
                setCardSelected={setCardSelected}
                setQuotes={setQuotes}
                cardSelected={cardSelected}
                quotes={quotes}
              />
            }
          ></Route>
          <Route path="/shipments" element={<ShipmentsContainer />}></Route>
          {/* <div className={styles.mainLayout}>
            {section !== 4 && section !== 6 && (
              <ListingSection
                setShowFooter={setShowFooter}
                setVisible={setVisible}
                isVisible={isVisible}
                setRate={setRate}
                rate={rate}
                section={section}
                setQuotes={setQuotes}
                setCardSelected={setCardSelected}
              />
            )}
            <Details
              showFooter={showFooter}
              setVisible={setVisible}
              isVisible={isVisible}
              rate={rate}
              section={section}
              quotes={quotes}
              cardSelected={cardSelected}
            />
            {isFooterVisible && showFooter && isVisible.length > 0 && (
              <Footer
                setIsFooterVisible={setIsFooterVisible}
                section={section}
                setSection={setSection}
                isVisible={isVisible}
              />
            )}
          </div> */}
        </Routes>
        {isFooterVisible && showFooter && isVisible.length > 0 && (
          <Footer
            path={currentPath}
            setIsFooterVisible={setIsFooterVisible}
            isVisible={isVisible}
          />
        )}
      </Router>
    </div>
  );
};

export default FutureLayout;
