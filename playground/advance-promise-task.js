require('../src/db/mongoose');
const Task = require('../src/models/tasks');

// Task.findByIdAndUpdate('5f02d63ba0fef10aecb74526', {completed: false}).then((task) => {
//     console.log(task);
//     return Task.countDocuments({completed: false})
// }).then((data) =>{
//     console.log('Data: ',data);
// })
// .catch((error) => {
//     console.log('error: ',error);
// });

const updateAndGetCount = async (id, completed) => {
    const updateTask = await Task.findByIdAndUpdate(id, {completed});
    const countTask = await Task.countDocuments({completed});
    return countTask;
};

updateAndGetCount('5f02d624535df64a18aae8c3', false).then((result)=>{
    console.log("Count: ",result);
}).catch((error) => {
    console.log("Error: ",error);
});