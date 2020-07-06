const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// Connection URL instead of localhost use IP will give better performance
const connectionUrl = 'mongodb://127.0.0.1:27017';

// Database Name
const databaseName = 'task-manager';

MongoClient.connect(connectionUrl, { useNewUrlParser: true}, (error, client) => {

    if(error)
        return console.log("Unable to connect mongodb");

        console.log("Connection Successfully to Mongodb");
        const db = client.db(databaseName);
        //single document
        // db.collection('users').insertOne({
        //    name: 'Monika', 
        //    age: 24,
        //    dob: '01-04-1996' 
        // }, (error, result) => {
        //         if(error)
        //             console.log("error: ",error);
            
        //         console.log(result.ops);
        // });

      // Insert Many document
        // db.collection('users').insertMany([{
        //     name: 'Samrat', 
        //     age: 02,
        //     dob: '07-02-2017' 
        // },
        // {
        //     name: 'Anand', 
        //     age: 22,
        //     dob: '07-02-1997' 
        // }], (error, result)=>{
        //     if(error)
        //         console.log("error: ",error);
                
        //     console.log(result.ops);
        // } );

        db.collection('tasks').insertMany([{
            name: 'InsertRecord', 
            description: 'Inserting many records to DB',
            completed: true 
        },
        {
            name: 'UpdateRecord', 
            description: 'Updating many records to DB',
            completed: false 
        },
        {
            name: 'DeleteRecord', 
            description: 'Deleting many records to DB',
            completed: true 
        },
        {
            name: 'GetRecord', 
            description: 'Get many records to DB',
            completed: false 
        }], (error, result)=>{
            if(error)
                console.log("error: ",error);
                
            console.log(result.ops);
        } );
});