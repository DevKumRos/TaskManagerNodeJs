// const mongoose = require('mongoose');
// const Task = mongoose.model('Task', {
//     'name': {
//         type: String,
//         trim: true,
//         required: [true, 'Provide task name its mandatory']
//     },
//     'description': {
//         type: String,
//         trim: true,
//         required: [true, 'Provide task description its mandatory']
//     },
//     'completed': {
//         type: Boolean,
//         default: false
//     },
//     'steps': {
//         type: Number,
//         trim: true,
//         default: 0,
//         validate(value) {
//             if(value < 0)   
//                 throw new Error('Number of steps cannot be negative: ', value)
//         }
//     }
// });

// const taskData = new Task({
//     'name': 'Deleted Mongodb',
//     'description': 'Deleted Mongodb going things',
//     'completed': true,
//     'steps': 2
// });

module.exports = taskData;


