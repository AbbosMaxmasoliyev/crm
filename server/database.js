const mongoose = require('mongoose');

const connect = mongoose.connect;

let database = "admin";

async function connectToDatabase() {
  const client = await connect('mongodb://127.0.0.1:27017/?directConnection=true');
  database = client
}

function getDb() {
  if (!database) {
    throw { message: 'Database not connected!' };
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};