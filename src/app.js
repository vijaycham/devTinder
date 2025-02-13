const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const user = require("./models/user");

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

//Get User by Gmail
app.get("/user", async (req, res) => {
  const UserEmail = req.body.emailId;

  try {
    const user = await User.findOne({ emailId: UserEmail });

    if (!user) {
      res.status(404).send("user not found");
    } else {
      res.send(user);
    }
    // const users = await User.find({ emailId: UserEmail });
    // if (users.length === 0) {
    //
    // } else {
    //   res.send(users);
    // }
  } catch (err) {
    res.status(400).send("something went wrong");
  }
});
//Feed API- GET/feed - get all the users from the database.
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});
// detele a user from the database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    //const deletUser = await User.findByIdandDelete(_id: userId)
    const deleteUser = await User.findByIdAndDelete(userId);
    if (!deleteUser) {
      return res.status(404).send("User not found");
    } else {
      res.send(" user deleted successfully");
    }
  } catch (error) {
    res.status(400).send("something went wrong");
  }
});
// update data of the user
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    await User.findByIdAndUpdate({ _id: userId }, data);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("something went wrong");
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
