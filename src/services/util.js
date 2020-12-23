import axios from "axios";

import { BASE_URL, PRIME_URL } from "../enviroments/env.js";

// GET 
// return a promise
export const get = () => {
    return axios.get(`${PRIME_URL}`);
      console.log("users");
   }
   


console.log("hohoho");
