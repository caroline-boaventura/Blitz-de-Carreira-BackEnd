const connect = require('./connection');

const create = async (name, status, date) => {
  const conn = await connect();
  const task = await conn.collection('tasks').insertOne({ name, status, date });

  return task;
};

module.exports = {
  create,
}