const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log(req.body);
  // creating a new instance of the user model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added successfully");
  } catch (error) {
    res.status(400).send("Error saving the user:" + error.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established succesfully!");
    app.listen(7777, () => {
      console.log("server is listening on port 7777... ");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected!");
  });
