const path = require("path");
const fs = require("fs");

const dataFileName = "data";
const dataTypeName = ".json";
const dataName = `${dataFileName}${dataTypeName}`;
const dataPath = path.join(__dirname, "..", "data");

const checkDataDir = fs.readdirSync(dataPath)[0];

const countNumName = "countNum.json";

module.exports = {
  dataFileName,
  dataTypeName,
  dataName,
  dataPath,
  checkDataDir,
};
