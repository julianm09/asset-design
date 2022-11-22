const Todo = require("../Models/todo");

const getTodos = (req, res) => {
  Todo.find({}, (err, data) => {
    res.json(data);
  });
};

const createTodo = (req, res) => {
  const todo = new Todo();
  todo.task = req.body.task;
  todo.date = req.body.date;
  todo.save((err, data) => {
    if (err) return res.send("something went wrong");
    res.status(201).send("created sucessfuly");
  });
};

const getTodoById = (req, res) => {
  Todo.findById(req.params.id, (err, todo) => {
    if (err) return res.status(400).send("Not Found");

    res.json(todo);
  });
};

const getSingleTodo = (req, res) => {
  Todo.findOne({ task: { $regex: req.query.taskname } }, (err, todo) => {
    if (err) return res.status(400).send("Not Found");

    res.json(todo);
  });
};

const updateTodo = (req, res) => {
  Todo.findOneAndUpdate({ owner: req.body.owner }, { task: req.body.task }, (err, todo) => {
    if (err) return res.status(400).send("Not Found");

    res.json(todo);
  });
};

module.exports = {
  getTodos,
  createTodo,
  getTodoById,
  getSingleTodo,
  updateTodo
};
