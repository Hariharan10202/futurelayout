import axios from "axios";

export const fetchQuotesData = async () => {
  let myHeaders = new Headers();
  myHeaders.append(
    "authorization",
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE1ZjljNjU4YjM0OWIxNTI2ZGZjY2E4Y2Q0MTk0OTI4NTAzNGU5NWExZTA4Zjc4OTE4OWVkOTk5MGQ5MmQwNGRkNTBkNWEwZWVkMGY5YTNlIn0.eyJhdWQiOiIxIiwianRpIjoiMTVmOWM2NThiMzQ5YjE1MjZkZmNjYThjZDQxOTQ5Mjg1MDM0ZTk1YTFlMDhmNzg5MTg5ZWQ5OTkwZDkyZDA0ZGQ1MGQ1YTBlZWQwZjlhM2UiLCJpYXQiOjE2NzgwODQxNTEsIm5iZiI6MTY3ODA4NDE1MSwiZXhwIjoxNjc5MzgwMTUxLCJzdWIiOiJiNWRkNTdjMC0wY2RjLTExZWQtOThlNy1hNzc2YWU3MTAwNTkiLCJzY29wZXMiOltdfQ.pDw4zt7SatJH6jZ9WAxnwBlhrflr3G3Nquun-Ra34COMkqHr3VJM9k7w7k-x8CXkAxyKIu-JCYfXiaQ8mOnWxky1X9ZKHdQsolQ1M7WN2d_KG6Uf_ve3sEEE76OKSsteqGjimfgVPlnlQY6YFdgeCNRkiWBEmJxheCiJqa9TkmHi6j05GmbrbyYg51sF5ZSTPuU8jv3089nvIrTSaatqB27Qq3pd8MCGjL_wQNiUvgK47Kq9TajhUOCWrAChvn822mlzE_0oFKNq0FHT7xVmLHE2O5D6Y1H-nAhtBFXJTQ3wQVD1toOjlRT7wqllWG7FDGnTZ-myDYlPgbXZCl-NPG319tC6SXrLW8nyPoAZmriA9cMcofIjVLHsv75SwZ_qjBxjgTjm1F9GyfvSSal7ixQG2jOEdF7KHYPWlEiRmMB0amAkBRBK4ns64MlZ-vHwnAUHDlV6XnBf_-K3i-nLnqR2IpnwF_AAU0gJ-X2u-cUe2TClDiP5mdshUM4H89AMiPbzEoYc3gVIuayMR98kkMXUgLoAPFul6SI3Nq3LTNiZh51QJHy2UKtfrNeJOKGVgamVTSx-ce7oKknM4ae6Rwnmc-dUv6BG6omj7CzAgJdgHXySFj42OeOvhQeyVl7dSgkttkuYih0Rez2cVfk9QmMD2sJtK6SLFac9Y-7dRb8"
  );
  myHeaders.append("content-type", "application/json;charset=UTF-8");
  myHeaders.append("referer-domain", "ship.xyzforwarder.com");

  let raw =
    '{"data":{"limit":30,"offset":0,"status":["Active"],"mode":[],"date_range":{"from":"2023-02-05T08:41:27.031Z","to":"2023-03-07T08:41:27.031Z"},"created_by":{"data":[]},"customer_details":{"data":{"user":[],"company":[]}},"origin":[],"destination":[],"load_types":[],"sort_by":"created_on","sort_by_type":"DESC","search":""}}';

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const resData = axios.get(
    `https://api.freightbro.com/api/v2/quote/list`,
    requestOptions
  );
  console.log(resData);
};
