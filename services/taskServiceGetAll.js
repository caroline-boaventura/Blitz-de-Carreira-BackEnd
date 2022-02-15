const { getAllTask } = require('../models/taskModelGetAll');


const getAll = async () => {
  const allTasks = await getAllTask();

  return allTasks;
}

module.exports = {
  getAll
}