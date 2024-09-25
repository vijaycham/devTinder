const express = require("express");

const app = express();

//This will only handle GET call to/ user
app.get("/user", (req, res) => {
  res.send({ firstname: "Vijay", lastName: "Sivakadatcham" });
});

app.post("/user", (req, res) => {
  //saving data base
  res.send("Data saved in the databaase succesfully!");
});

app.delete("/user", (req, res) => {
  res.send("Deleted the data");
});

app.use("/user", (req, res) => {
  res.send("Hahaha");
});

//this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Testing...");
});

app.listen(7777, () => {
  console.log("server is listening oon port 7777... ");
});
