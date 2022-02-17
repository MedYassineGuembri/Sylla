const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://" +process.env.DB_USER_PASS +"@dbsyllabi.qnowa.mongodb.net/syllabi-project")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
