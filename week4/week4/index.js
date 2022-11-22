const express = require('express');
const app = express();
const mongoose = require('mongoose');
const todoRouter = require('./routes/todo');

mongoose.connect('mongodb://localhost/todos',(e)=>{
  console.log(e)
});

app.use(express.json())

app.use(todoRouter)
app.listen(3000, ()=>{console.log('server running on 3000')})