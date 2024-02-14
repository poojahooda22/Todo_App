const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

let todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
  });
  
  var ctr = 1;
  app.post('/todos', (req, res) => {
    const newTodo = {
      id: ctr, // unique random id
      title: req.body.title,
      description: req.body.description
    };
    ctr = ctr + 1
    todos.push(newTodo);
    res.status(201).json(newTodo);
  });

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  })
  
  // for all other routes, return 404
  app.use((req, res, next) => {
    res.status(404).send();
  });
  
  app.listen(3000);