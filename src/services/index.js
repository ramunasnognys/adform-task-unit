import { get } from "./util.js";

console.log("START");

//GET Data
get().then((data) => {
    console.log(data)
    // displayTitle(data.data.slice(0, 3));
  });
