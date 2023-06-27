import React, { useEffect, useState } from "react";
import CardList from "../CardList/CardList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Shipments = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let subscribe = true;
    const fetchQuotes = async () => {
      if (subscribe) {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "quotes"));
        const list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });
        const sortDataDescendingById = (currentData) => {
          return [...currentData].sort((a, b) => b.Id - a.Id);
        };
        const sortedData = sortDataDescendingById(list);
        setDataList(sortedData);
        setLoading(false);
      }
    };
    fetchQuotes();
    return () => {
      subscribe = false;
    };
  }, []);

  return <CardList loading={loading} dataList={dataList} />;
};

export default Shipments;
