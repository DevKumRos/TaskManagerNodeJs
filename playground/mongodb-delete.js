const {MongoClient, ObjectID} = require('mongodb');
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionUrl, { useNewUrlParser: true}, (error, client) => {
    if(error) 
        console.log("MongoDB connection error");

        const db = client.db(databaseName);
        const tasksCollection = db.collection('tasks');
        const usersCollection = db.collection('users');

        // usersCollection.deleteOne({ age: 4}).then((result) => {
        //     console.log("Result: ",result);
        // }).catch((error) => {
        //     console.log("error: ",error);
        // });

        tasksCollection.deleteMany({}).then(({result}) => {
            console.log("Result: ",result);
        }).catch((error) => {
            console.log("error: ",error);
        });

});