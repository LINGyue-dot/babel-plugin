const fs = require("fs");

function readFileCode(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, "utf-8", function (err, data) {
      err && reject(err);
      resolve(data);
    });
  });
}

module.exports = {
  readFileCode,
};
