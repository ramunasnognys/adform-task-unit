import axios from "axios";

import { BASE_URL, PRIME_URL } from "../enviroments/env.js";

//GET
export const getStreets = async () => {
  try {
    const response = await axios.get(`${PRIME_URL}`); // Promise resolve
    return response.data.features;
  } catch (e) {
    //   console.log(e);
    console.log("!!!! ERRROR !!!!");
  }
};

// GET
// return a promise
export const get = () => {
  return axios.get(`${PRIME_URL}`);
};
