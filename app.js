const express = require("express");
const morgan = require("morgan");
const router = require("./routes/router");
const app = express();

//1))  middelwares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//2)) route
app.use("/api/", router);

module.exports = app;
