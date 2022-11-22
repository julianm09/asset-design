const express = require('express');
const router = express.Router();
const { getTodos, createTodo, getTodoById, getSingleTodo, updateTodo } = require('../Controller/todos')

router.get('/todos', getTodos)

router.post('/new/todo', createTodo)

router.get('/todo/:id', getTodoById)

router.get("/todo", getSingleTodo)

router.patch("/update/todo", updateTodo)

module.exports = router

