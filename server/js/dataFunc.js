const fs = require("fs");

const { dataName, dataPath, checkDataDir } = require("./dataPath");

//
const getData = (pathFile) => {
  const data = JSON.parse(fs.readFileSync(pathFile));
  console.log("데이터 겟", data);

  return data;
};

//
const dataSave = (pathFile, object) => {
  //const data = new Uint8Array(Buffer.from(JSON.stringify(postList)));
  const data = Buffer.from(JSON.stringify(object));
  fs.writeFileSync(pathFile, data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
};

//
//
//
//
const checkData = (pathFile) => {
  const tempArr = pathFile.split("/");
  const temp = tempArr[tempArr.length - 1];

  let notMatch = true;
  checkDataDir.forEach((file) => {
    if (temp == file) {
      notMatch = false;
    }
  });

  if (notMatch) {
    //없으면 만들기
    dataSave(pathFile, []);
    return [];
  } else {
    return getData(pathFile);
  }
};

//
//
//
//
const addData = (pathFile, addObject) => {
  const data = checkData(pathFile);

  data.push(addObject);

  dataSave(pathFile, data);
};

//
//
//

const countMake = (rootPath, countSavePath) => {
  const data = checkData(rootPath);
  const count = checkData(countSavePath);
  count[0] = data.length;

  // fs.writeFileSync(count);
  dataSave(countSavePath, count);
};

// const { dataName, dataPath, checkDataDir } = require("./dataPath");
// const dataPathFile = `${dataPath}/${dataName}`;
// const countPathFile = `${dataPath}/count.json`;

// // addData(dataPathFile, {});
// countMake(dataPathFile, countPathFile);

module.exports = { dataSave, getData, addData, checkData, countMake };