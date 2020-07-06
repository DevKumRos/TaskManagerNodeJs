const express = require('express');
const mongooseDB = require('./db/mongoose');
const User = require('./models/users');
const Task = require('./models/tasks');
const app = express();
//Port
const port = process.env && process.env.PORT? process.env.PORT: 4000;

//Parse incoming JSON
app.use(express.json());

app.post('/users', (req, res) => {
    console.log("Request Data: ",req.body);
    const user = new User(req.body);
    user.save().then((response) => {
        res.status(201).send(user);
    }).catch((error) =>{
        res.status(400).send(error);
    });
    
});

app.get('/users', (req, res) => {
    console.log("Request Data: ",req.body);
    User.find({}).then((users) => {
        res.status(200).send(users);
    }).catch((error)=> {
        res.status(500).send(error);
    });
    
});

app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    console.log("Request Data: ",userId);
    User.findById(userId).then((user) => {
        return res.status(200).send(user);
    }).catch((error)=> {
        return res.status(404).send("user not found for given userId: "+userId);
    });
    
});

app.post('/tasks', (req, res) => {
    console.log("Request Data: ",req.body);
    const task = new Task(req.body);
    task.save().then((response) => {
        res.status(201).send(task);
    }).catch((error) =>{
        res.status(400).send(error);
    });
    
});

app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.status(200).send(tasks);
    }).catch((error)=> {
        res.status(500).send(error);
    });
    
});

app.get('/tasks/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    console.log("Request Data: ",taskId);
    Task.findById(taskId).then((task) => {
        res.status(200).send(task);
    }).catch((error)=> {
        return res.status(404).send("Task not found for given taskId: "+taskId);
    });
    
});

// app.listen(port, ()=> {
//     console.log("Server is up & running on PORT: ",port)
// });

