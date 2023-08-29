
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://kirankiranbang:Sept45454545@cluster0.exv9nxo.mongodb.net/?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};



const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;



























// const Sequelize = require('sequelize');

// const database = process.env.DB_NAME;
// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;
// const host = process.env.DB_HOST;

// const sequelize = new Sequelize(database, username, password, {
//   dialect: 'mysql',
//   host: host
// });

// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully (from util(folder) database.js).');
//   })
//   .catch((error) => {
//     console.error('Unable to connect to the database: ', error);
//   });

// module.exports = sequelize;
//
//
