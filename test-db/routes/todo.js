const express = require('express');
const router = express.Router();
const { getTodos, createTodo, getTodoById } = require('../Controller/todos')

router.get('/todos', getTodos)

router.post('/new/todo', createTodo)

router.get('/todo/:id', getTodoById)

module.exports = router

