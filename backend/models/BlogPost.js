const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 100 },
  content: { type: String, required: true },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BlogPost", blogPostSchema);
