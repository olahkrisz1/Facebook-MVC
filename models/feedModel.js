const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 15 },
  message: { type: String, required: true, maxlength: 40 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Feed = mongoose.model("Feed", feedSchema);

module.exports = Feed;
