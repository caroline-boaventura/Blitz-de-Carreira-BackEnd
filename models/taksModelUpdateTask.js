const { ObjectId } = require('mongodb');
const connect = require('./connection');

const editTask = async (name, status, date, idTask) => {
  const conn = await connect();
  await conn.collection('tasks')
    .updateOne(
      { _id: ObjectId(idTask) },
      { $set: { name, status, date } },
    );

  const taksById = await conn.collection('tasks').findOne({ _id: ObjectId(idTask) });

  return taksById;
};

module.exports = {
  editTask,
}