const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TodoSchema = new Schema({
  task: {type:String, default:"No Task", unique:true},
  date: Date
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo