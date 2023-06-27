import { updateStart, updateSuccess, updateError } from "./userSlice";
import axios from "axios";
import Qs from "qs";
import { cardData } from "../Data";
import { updateLiner } from "./linerSlice";

export const updateData = async (parameters, dispatch, response) => {
  try {
    dispatch(updateStart());
    let myAxios = axios.create({
      paramsSerializer: (parameters) =>
        Qs.stringify(parameters, { arrayFormat: "repeat" }),
    });
    const res = await myAxios.get(
      `https://stage-api.freightify.in/v1/prices/`,
      {
        headers: {
          Authorization: "Bearer " + response,
          "x-api-key": "nhjcgThv7A6RzrE541kOx9Lfs66GRhbG5dwsOnhQ",
          "Content-Type": "application/json",
        },
        params: parameters,
      }
    );

    // Destructuring starts

    const rateData = res.data.offers;
    console.log(rateData);

    // console.log(rateData);

    let newRatesArray = [];

    // console.log("Destructuring starts...");
    // console.time("time taken");

    const linerIngo = [];

    rateData.forEach((rate, index) => {
      const { referenceId: id } = rate.productOffer.offerType;
      const { serviceType } = rate.productPrice;
      const { transitTimeInDays } = rate.productPrice;
      const { commodity } = rate.productPrice;
      const { totalUSDAmount } = rate.productPrice;
      const { carrierName } = rate.productOffer;
      const { routeSchedule } = rate.productPrice;
      const { validTo } = rate.productPrice;
      const { viaPort } = rate.productPrice;

      let sailingDate = "-";

      if (rate.productPrice.routeSchedule.length !== 0) {
        const length = rate.productPrice.routeSchedule.length - 1;
        sailingDate = rate.productPrice.routeSchedule[length].sailingDate;
        sailingDate = String(new Date(sailingDate));
      }

      let chargeArray = [];
      let container20GP = 0;
      let container40GP = 0;
      let container40HC = 0;

      rate.productPrice.charges.forEach((charge) => {
        if (charge.rateTypeCode === "FREIGHT") {
          switch (charge.containerType) {
            case "20GP":
              container20GP += Number(charge.amount);
              chargeArray.push(charge);

              break;
            case "40GP":
              container40GP += Number(charge.amount);
              chargeArray.push(charge);
              break;
            case "40HC":
              container40HC += Number(charge.amount);
              chargeArray.push(charge);
              break;
            default:
              break;
          }
        }
      });

      let newRatesObj = {};

      newRatesObj.objId = index;

      newRatesObj.id = id || "-";
      newRatesObj.serviceType = serviceType;
      newRatesObj.carrierName = carrierName;
      newRatesObj.transitTimeInDays = transitTimeInDays
        ? transitTimeInDays
        : "-";
      newRatesObj.commodity = commodity.split(" ")[0];
      newRatesObj.totalUSDAmount = totalUSDAmount;
      newRatesObj.routeSchedule = routeSchedule;

      newRatesObj.charges = chargeArray;
      newRatesObj.container20GP = container20GP;
      newRatesObj.container40GP = container40GP;
      newRatesObj.container40HC = container40HC;
      newRatesObj.viaPort = viaPort ? viaPort : "-";

      newRatesObj.ExpiryDate = validTo ? validTo : "-";

      if (routeSchedule.length !== 0) {
        newRatesObj.POL = routeSchedule[0].fromLocation.siteName;
        newRatesObj.Origin = routeSchedule[0].fromLocation.unLocCode;
        newRatesObj.POD = routeSchedule[0].toLocation.siteName;
        newRatesObj.Destination = routeSchedule[0].toLocation.unLocCode;
      }

      if (sailingDate !== "-") {
        newRatesObj.sailingDate = `${sailingDate.split(" ")[2]} ${
          sailingDate.split(" ")[1]
        } ${sailingDate.split(" ")[3]}`;
      } else {
        return;
      }

      for (let index = 0; index < cardData.length; index++) {
        if (
          carrierName
            .toLowerCase()
            .includes(cardData[index].linerName.toLowerCase())
        ) {
          const linerObj = {};
          linerObj.name = cardData[index].linerName;
          linerObj.logo = cardData[index].liners;
          linerIngo.push(linerObj);
          newRatesObj.carrierLogo = cardData[index].liners;
          // console.log(newRatesObj.carrierLogo);
        }
      }

      newRatesArray.push(newRatesObj);
      console.log(newRatesObj.POL);
      console.log(newRatesObj.Origin);
      console.log(newRatesObj.POD);
      console.log(newRatesArray);
    });
    let uniqueArr = linerIngo.filter((obj, index, self) => {
      return index === self.findIndex((t) => t.logo === obj.logo);
    });
    // console.timeEnd("time taken");
    dispatch(updateLiner(uniqueArr));

    dispatch(updateSuccess(newRatesArray));
    // console.log("success");
  } catch (error) {
    await dispatch(updateError());
  }
};
