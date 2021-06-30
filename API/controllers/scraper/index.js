"use strict";
const indeedScraper = require("./scraper.js");
module.exports.query = function (queryObject) {
  return indeedScraper.query(queryObject);
};
