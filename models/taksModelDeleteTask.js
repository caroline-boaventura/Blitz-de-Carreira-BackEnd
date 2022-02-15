const { ObjectId } = require('mongodb');

const connect = require('./connection');

const deleteTask = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const conn = await connect();
  const deleteById = await conn.collection('tasks').deleteOne({ _id: ObjectId(id) });

  return deleteById;
};

module.exports = {
  deleteTask,
}