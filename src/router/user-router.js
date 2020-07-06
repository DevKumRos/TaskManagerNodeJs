const express = require('express');
const User = require('../models/users');
const userRouter = new express.Router();

userRouter.post('/users', async (req, res) => {
    console.log("NewIndex Request Data: ",req.body);
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch( error ) {
        res.status(400).send(error);
    }
});

userRouter.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(201).send(users);
    } catch( error ) {
        res.status(400).send(error);
    }
});

userRouter.get('/users/:userId',async (req, res) => {
    const userId = req.params.userId;
    console.log("NewIndex Request Data: ",userId);
    try{
        const user = await User.findById(userId);
        return res.status(200).send(user);
    } catch(error) {
        return res.status(404).send("user not found for given userId: "+userId);
    }
});

userRouter.patch('/users/:userId',async (req, res) => {
    const updates = Object.keys(req.body);

    const allowedUpdates = ['name', 'password', 'email', 'age'];
    console.log("updates : ", updates);
    const validOperation = updates.every((update) => allowedUpdates.includes(update));
    if(!validOperation) {
        return res.status(400).send({error: 'Invalid Updates!!'});
    }
    const userId = req.params.userId;
    const userBody = req.body;
    console.log("NewIndex Request userId: "+userId+", Request Body: "+ userBody);
    try{
        const user = await User.findByIdAndUpdate(userId, userBody, {new: true, runValidators:true});
        return res.status(200).send(user);
    } catch(error) {
        return res.status(404).send("user not found for given userId: "+userId);
    }
});

userRouter.delete('/users/:userId',async (req, res) => {
    const userId = req.params.userId;
    try{
        const user = await User.findByIdAndDelete(userId);
        if(!user) {
            return res.status(404).send("user not found for given userId: "+userId);
        }
        return res.status(200).send(user);
    } catch(error) {
        return res.status(404).send("user not found for given userId: "+userId);
    }
});


module.exports = userRouter;