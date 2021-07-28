const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.set('json spaces', 2)

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from Zeet! Your function executed successfully!",
    event: req.event,
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app, {
  request: (req, event, context) => {
    req.event = event;
    req.context = context;
  },
});
