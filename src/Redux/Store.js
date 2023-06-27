import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import viewReducer from "./viewSlice";
import quoteReducer from "./quoteSlice";
import rateReducer from "./rateSlice";
import linerReducer from "./linerSlice";

// import logger from "redux-logger";

export default configureStore({
  reducer: {
    rates: userReducer,
    view: viewReducer,
    quotes: quoteReducer,
    rate: rateReducer,
    liner: linerReducer,
  },
});
