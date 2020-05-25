const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://solami:HeZlKdf51yjMASD2@cluster0-lxq2h.mongodb.net/test?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected');
            callback(client);
        })
        .catch(err => {
            console.log('Error Connecting to MongoDB !' + err);
        });
};

module.exports = mongoConnect;