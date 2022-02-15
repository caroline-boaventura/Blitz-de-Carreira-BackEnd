const { update } = require('../services/taskServiceUpdateTask');

const editTask = async (req, res, next) => {
  try {
    const { name, status } = req.body;
    const { id } = req.params;

    const updateTask = await update(name, status, id);

    return res.status(200).json(updateTask);
  } catch (error) {
    console.log(`ERROR EDIT TASK: ${error}`);
    next(error);
  }
};

module.exports = {
  editTask,
}
