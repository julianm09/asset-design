const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TodoSchema = new Schema({
  task: String,
  date: Date
})

const Todo = mongoose.model('Todo', TodoSchema)

const getTodos = (req,res)=>{
  Todo.find({},(err,data)=>{
    res.json(data)
  })
}

const createTodo = (req,res)=>{
  const todo = new Todo()
  todo.task = req.body.task
  todo.date = req.body.date
  todo.save()
  res.send()
}

const getTodoById = (req,res)=>{
  let todo = Todo.filter(item => item.id == req.params.id)
  res.json(todo)
}

module.exports = {
  getTodos,
  createTodo,
  getTodoById
}