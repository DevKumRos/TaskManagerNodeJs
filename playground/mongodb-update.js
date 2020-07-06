const {MongoClient, ObjectID} = require('mongodb');
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionUrl, { useNewUrlParser: true}, (error, client) => {
    if(error) 
        console.log("MongoDB connection error");

    const db = client.db(databaseName);
    const tasksCollection = db.collection('tasks');
    const usersCollection = db.collection('users');

    // const updateRecordPromise = tasksCollection.updateOne({_id: new ObjectID("5f001507a014d74550cbc331")},
    // {
    //     $set: {
    //         name: 'UpdateRecord By Kumar'
    //     }
    // }).then((result)=>{
    //     console.log("Result: ", result);
    // }).catch((error)=>{
    //     console.log("error: ", error);
    // });

    tasksCollection.updateMany({ completed: false },
    {
        $set: {
            completed: true
        }
    }).then((result)=>{
        console.log("Result: ", result);
    }).catch((error)=>{
        console.log("error: ", error);
    });

    //Update with age by 2
    usersCollection.updateMany({},
        {
            $inc: {
                age: 2
            }
        }).then((result)=>{
            console.log("Result: ", result);
        }).catch((error)=>{
            console.log("error: ", error);
        });
});