const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("hello hello hellooo!!!");
});
app.use("/test", (req, res) => {
  res.send("Testing...");
});
app.use("/", (req, res) => {
  res.send("Dashboard");
});

app.listen(7777, () => {
  console.log("server is listening oon port 7777... ");
});
