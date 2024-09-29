const express = require("express");

const app = express();

app.get("/user/:userID/:name/:password" , (req, res) => {
  console.log(req.params);
  res.send({ firstname: "Vijay", lastName: "Sivakadatcham" });
});


app.post("/user", (req, res) => {
  //saving data base
  res.send("Data saved in the databaase succesfully!");
});

app.delete("/user", (req, res) => {
  res.send("Deleted the data");
});

// app.use("/user", (req, res) => {
//   res.send("Hahaha");
// });

//this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Testing...");
});

app.listen(7777, () => {
  console.log("server is listening oon port 7777... ");
});
