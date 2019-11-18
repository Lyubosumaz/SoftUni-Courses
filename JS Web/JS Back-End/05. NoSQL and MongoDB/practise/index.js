// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
const dbUrl = 'mongodb://localhost:27017';
const { MongoClient } = require('mongodb');
const client = new MongoClient(dbUrl);
client.connect(function (err, client) {
    if (err) {
        console.error(err);
        return;
    }
    const db = client.db('testdb');
    const users = db.collection('users');
    
    users.insert({ name: "test" }).then(qr => {
        console.log(qr);
        users.deleteMany({ name: 'test' }).then(qr => {
            console.log(qr);
        })
    })
});