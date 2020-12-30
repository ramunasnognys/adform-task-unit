import { getResponse } from "./util.js";
import { PRIME_URL } from "../enviroments/env.js";

let streets;
export const showStreets = async () => {
  
  try {
    getResponse().then((res) => {
      streets = res.map((item) => item.properties);
      const duplicateStreetsArray = streets.map((item) => item.STREET);

      // refactor
      const uniqStreetsArray = [...new Set(duplicateStreetsArray)];
      console.log(` THE LENGTH OF UNIQ values: ${uniqStreetsArray.length}`);
      console.log(` THE LENGTH OF DUPLICATE values: ${duplicateStreetsArray.length}`
      );

      uniqStreetsArray.forEach((result) => {
        console.log(result);
      }); // refactor end
    });
  } catch (error) {
    console.log(error);
  }
};

