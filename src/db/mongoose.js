const mongoose = require('mongoose');
//const taskData = require('./taskModel');
const userData = require('./userModel');

// Connection URL instead of localhost use IP will give better performance
const connectionUrl = 'mongodb://127.0.0.1:27017/task-manager-api';

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// // Testing Propose
// userData.save().then((response) => {
//     console.log("response: ",userData);
// }).catch((error) => {
//     console.log("error: ",error);
// });


