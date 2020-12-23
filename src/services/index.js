import { get, getStreets } from "./util.js";

console.log("START");

//GET Data
// get().then((data) => {
//   const featuresArray = data.data.features;
//   displayFeaturesObj(featuresArray.slice(0, 6));
//   console.log(featuresArray);
// });

// const displayFeaturesObj = (data) => {
//   if (Array.isArray(data) && data.length > 0) {
//     data.forEach((element, index) => {
//       console.log(element.properties);
//     });
//   }
// };

getStreets().then((data) => {
  displayStreets(data.slice(0, 6));
  //   console.log(data.slice(0, 6));
});

const displayStreets = (data) => {
  for (let result of data) {
    const street = result.properties;
    console.log(street);
  }
};

