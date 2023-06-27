import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Rates from "../Components/Rates/Rates";
import QuoteSummary from "../Components/QuoteSummary/QuoteSummary";
import Quote from "../Components/Quote/Quote";
import "antd/dist/antd.min.css";
import Configure from "../Components/Configure/Configure";
import FutureLayout from "../FutureLayout/FutureLayout";

const Home = () => {
  const [hide, setHide] = useState(true);

  const hideNavBar = (binary) => {
    setHide(binary);
  };

  return (
    <Router>
      {hide && false && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/rates" />}></Route>
        <Route path="/rates" element={<Rates hideNavBar={hideNavBar} />} />
        <Route path="/quotesummary" element={<QuoteSummary />} />
        <Route path="/configure" element={<Configure />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/futureview" element={<FutureLayout />}></Route>
      </Routes>
    </Router>
  );
};

export default Home;
