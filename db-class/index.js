const express = require('express');
const app = express();
const mongoose = require('mongoose');
const todoRouter = require('./routes/todo');
const config = require('./config');

mongoose.connect(config.MONGODB_URL,(e)=>{
  console.log(e)
});

app.use(express.json())

app.use(todoRouter)
app.listen(3000, ()=>{console.log('server running on 3000')})