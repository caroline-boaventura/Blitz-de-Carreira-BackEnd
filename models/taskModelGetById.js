const connect = require('./connection');
const { ObjectId } = require('mongodb');

const findTaskById = async (id) => {
  const conn = await connect();
  console.log(id, 'ID MODEL')
  const taskExists = await conn.collection('tasks').findOne({ _id: ObjectId(id) });

  return taskExists;
};

module.exports = { findTaskById }
