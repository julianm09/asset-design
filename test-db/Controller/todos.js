const Todo = require('../Models/todo')

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
  let todo = Todos.filter(item => item.id == req.params.id)
  res.json(todo)
}

module.exports = {
  getTodos,
  createTodo,
  getTodoById
}