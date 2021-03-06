const { editTask } = require('../models/taksModelUpdateTask');
const { findTaskById } = require('../models/taskModelGetById');
const { ERROR_TASK_NOT_FOUND } = require('../errorObjects/index');

const update = async (name, status, date, idTask) => {

  const task = await findTaskById(idTask);

  if (!task) throw ERROR_TASK_NOT_FOUND;

  const updateTask = await editTask(name, status, date, idTask);

  return updateTask;
};

module.exports = {
  update,
}