//import from conversions index file
const { convertJPY, convertEUR } = require("./Conversions");

const getRates = async () => {
  //console.log your conversion
  console.log(await convertJPY(100, "CAD"));
  console.log(await convertEUR(100, "CAD"));
};

// call get rates function
getRates();


