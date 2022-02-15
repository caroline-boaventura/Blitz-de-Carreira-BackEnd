const connect = require('./connection');

const getAllTask = async () => {
  const conn = await connect();
  const allTask = await conn.collection('tasks').find({}).toArray();

  return allTask;
}

module.exports = {
  getAllTask
}