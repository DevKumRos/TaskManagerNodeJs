const express = require('express');
const Task = require('../models/tasks');
const taskRouter = new express.Router();

taskRouter.post('/tasks', async (req, res) => {
    console.log("NewIndex Request Data: ",req.body);
    const task = new Task(req.body);
    try {
        await task.save();
        res.status(201).send(task);
    } catch( error ) {
        res.status(400).send(error);
    }
});

taskRouter.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(201).send(tasks);
    } catch( error ) {
        res.status(400).send(error);
    }
});

taskRouter.get('/tasks/:taskId',async (req, res) => {
    const taskId = req.params.taskId;
    console.log("NewIndex Request Data: ",taskId);
    try{
        const task = await Task.findById(taskId);
        return res.status(200).send(task);
    } catch(error) {
        return res.status(404).send("Task not found for given taskId: "+taskId);
    }
});

taskRouter.patch('/tasks/:taskId',async (req, res) => {
    const updates = Object.keys(req.body);

    const allowedUpdates = ['name', 'description', 'completed', 'steps'];
    console.log("updates : ", updates);
    const validOperation = updates.every((update) => allowedUpdates.includes(update));
    if(!validOperation) {
        return res.status(400).send({error: 'Invalid Updates!!'});
    }
    const taskId = req.params.taskId;
    const taskBody = req.body;
    console.log("NewIndex Request taskId: "+taskId+", Request Body: "+ taskBody);
    try{
        const updateTask = await Task.findById(taskId);
        updates.forEach((update) => updateTask[update] = taskBody[update]);
        await updateTask.save();
        //const updateTask = await Task.findByIdAndUpdate(taskId, taskBody, {new: true, runValidators:true});
        return res.status(200).send(updateTask);
    } catch(error) {
        return res.status(404).send("Task not found for given taskId: "+taskId);
    }
});

taskRouter.delete('/tasks/:taskId',async (req, res) => {
    const taskId = req.params.taskId;
    try{
        const task = await Task.findByIdAndDelete(taskId);
        console.log("task : ",task);
        if(!task) {
            return res.status(404).send("Task not found for given taskId: "+taskId);
        }
        return res.status(200).send(task);
    } catch(error) {
        return res.status(404).send("Task not found for given taskId: "+taskId);
    }
});



module.exports = taskRouter;