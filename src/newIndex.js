require('./db/mongoose');
const express = require('express');
const userRouter = require('./router/user-router');
const taskRouter = require('./router/task-router');

const app = express();
//Port
const port = process.env && process.env.PORT? process.env.PORT: 4000;

//Parse incoming JSON
app.use(express.json());

//Users API
app.use(userRouter);

//Tasks API
app.use(taskRouter);


app.listen(port, ()=> {
    console.log("NewIndex Server is up & running on PORT: ",port)
});