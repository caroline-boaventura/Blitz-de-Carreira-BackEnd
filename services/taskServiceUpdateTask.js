const { editTask } = require('../models/taksModelUpdateTask');
const { findTaskById } = require('../models/taskModelGetById');
const { ERROR_TASK_NOT_FOUND } = require('../errorObjects/index');

const update = async (name, status, idTask) => {
  console.log(name, status, idTask, '<=================')

  const task = await findTaskById(idTask);

  console.log(task, 'TASK EXISTE')

  if (!task) throw ERROR_TASK_NOT_FOUND;

  const updateTask = await editTask(name, status, idTask);

  return updateTask;
};

module.exports = {
  update,
}