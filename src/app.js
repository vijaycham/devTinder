const express = require("express");

const app = express();

// GET/users => it will go through the chain of middleware and then it will handle the response

//GET/users => middlwares chan => rquest handler


app.use("/user", (req,res, next) =>{
  console.log('2nd route handler');
  //res.send("2nd response")
  next();
})
app.use(
  "/user", 
  (req, res, next) => {
    console.log("Handling the route user 1");
    //res.send("1st Response");
    //next();
  },
); 


app.listen(7777, () => {
  console.log("server is listening on port 7777... ");
});
