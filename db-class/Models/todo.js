const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TodoSchema = new Schema({
  task: { type: String, default: "no task", unique: true },
  date: Date,
  day: String,
});

TodoSchema.pre("save", function (next) {
  let d = new Date(this.date);
  this.day = d.toDateString().slice(0, 3);
  next();
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
