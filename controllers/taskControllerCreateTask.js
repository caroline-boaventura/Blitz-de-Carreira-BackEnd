const { createTask } = require('../services/taskServiceCreateTask');

const newTaskController = async (req, res) => {
  try {
    const { name, status } = req.body;

    const newTask = await createTask(name, status);

    return res.status(201).json(newTask)
  } catch (error) {
    console.log(`CREATE TASK ERROR: ${error}`)
  }
}

module.exports = { newTaskController };
