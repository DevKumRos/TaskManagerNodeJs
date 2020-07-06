const {MongoClient, ObjectID} = require('mongodb');
const id = new ObjectID();
console.log("id : ", id);
console.log("Timestamp : ", id.getTimestamp());

// Connection URL instead of localhost use IP will give better performance
const connectionUrl = 'mongodb://127.0.0.1:27017';

// Database Name
const databaseName = 'task-manager';

MongoClient.connect(connectionUrl, { useNewUrlParser: true}, (error, client) => {
    if(error)
        return console.log("Unable to connect mongodb");

        console.log("Connection Successfully to Mongodb");
        const db = client.db(databaseName);
        const collection = db.collection('tasks');
        //Get ALL Data in table
        // collection.find({}, (error, users) => {
        //     if(error)
        //     return console.log("Error: ",error );

        //     users.forEach(user => {
        //         console.log(user);
        //     });
        // });

        //Get Only one record in table
        collection.findOne({name: 'GetRecord'}, (error, user) => {
            if(error)
              return console.log("Error: ",error );

            console.log(user);
        });

        //Get Only one record in table by ID
        collection.findOne({_id: new ObjectID("5f001507a014d74550cbc332")}, (error, user) => {
            if(error)
                return console.log("Error: ",error );

            console.log(user);
        });

        // Search task not completed.
        collection.find({completed: false}).toArray((error, users)=>{
            console.log("Not completed Task: ", users);
        });
});