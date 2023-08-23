const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {

MongoClient.connect('mongodb+srv://chandrachud:0542Mongo@cluster0.oazpryq.mongodb.net/?retryWrites=true&w=majority')
.then(client => {
    console.log('connected');
    callback(client);
})
.catch((err)=>{
  console.log(err);
})

};

module.exports = mongoConnect;