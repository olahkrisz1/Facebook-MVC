const mongoose = require("mongoose");

// Connect to the MongoDB database
mongoose.connect(
  "mongodb+srv://olahkrisz1:cerbera@cluster0.m7dzq0e.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
