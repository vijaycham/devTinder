const express = require("express");

const app = express();
const { adminAuth, userAuth } = require("./middleware/auth");

app.get("/getUserData", (req, res) => {
  // try {
    //Logic of DB call and get User Data
    throw new Error("jjkllll");
    res.send("user data sent");
  // } catch (err) {
  //   res.status(500).send("some Error contact support tea");
  // }
});

app.use("/", (err,req, res, next) => {
  if(err) {
    //Log your error
    res.status(500).send("something went wrong");
  }
})
app.listen(7777, () => {
  console.log("server is listening on port 7777... ");
});
