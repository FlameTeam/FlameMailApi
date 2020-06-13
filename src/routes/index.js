const express = require("express");
const app = express();

const mailRouter = require("./mail.js");

app.use(mailRouter);

module.exports = app;
