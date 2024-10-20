const express = require("express");

const app = express();
const { adminAuth, userAuth } = require("./middleware/auth");
//Handle Auth Middleware for all GET, POST .. requests
app.use("/admin", adminAuth);

app.get("/user/login", (req, res) => {
  res.send("user logged in sucessfull!!!");
});

app.get("/user/data", userAuth, (req, res) => {
  res.send("User data sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data Sent");
});
app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

app.listen(7777, () => {
  console.log("server is listening on port 7777... ");
});
