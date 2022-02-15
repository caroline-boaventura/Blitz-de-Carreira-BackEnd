const { deleteTask } = require('../models/taksModelDeleteTask');
const { findTaskById } = require('../models/taskModelGetById');
const { ERROR_TASK_NOT_FOUND } = require('../errorObjects/index');

const deleteTaskById = async (id) => {

  const task = await findTaskById(id);

  if (!task) throw ERROR_TASK_NOT_FOUND;

  const taskDeleted = await deleteTask(id);

  return taskDeleted;
};

module.exports = {
  deleteTaskById
}
