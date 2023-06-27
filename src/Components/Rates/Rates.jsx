import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import Search from "../Search/Search";
import Table from "../Table/Table";

import { useSelector } from "react-redux";

const Rates = ({ hideNavBar }) => {
  const [view, setView] = useState(true);
  const [rateProduct, setRateProducts] = useState(0);
  const displayView = useSelector((state) => state.view);

  useEffect(() => {
    hideNavBar(true);
    setView(displayView);
    return () => {};
  }, [rateProduct, displayView, hideNavBar]);

  return (
    <>
      <Search hideNavBar={hideNavBar} view={view.view} setView={setView} />
      {!view.view ? <Card /> : <Table setRateProducts={setRateProducts} />}
      {rateProduct.length > 0 && <Footer rateProduct={rateProduct} />}
    </>
  );
};

export default Rates;
