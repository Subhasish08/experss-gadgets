const express = require("express");
const app = express();

app.get("./gadgets", (response, request) => {
  respond.sendFile("./gadgets.html", { root: __dirname });
});
module.exports = app;
