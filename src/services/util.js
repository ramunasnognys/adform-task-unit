import axios from "axios";

import { BASE_URL, PRIME_URL } from "../enviroments/env.js";

// GET STREETS
export const getResponse = async () => {
  
  try {
    const response = await axios.get(PRIME_URL); // Promise resolve
    
    return response.data.features;
    
  } catch (e) {
    console.log("!!!! ERRROR !!!!", e);
  }
};

// GET UNIQUE STREET NAMES
export const getUniqueListBy = (arr, key) => {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
};
