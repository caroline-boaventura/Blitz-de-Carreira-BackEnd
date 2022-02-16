const { deleteTaskById } = require('../services/taskServiceDeleteTask');

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    await deleteTaskById(id);

    return res.status(204).json({ message: "Task apagada!" });
  } catch (error) {
    console.log(`ERROR DELETE TASK: ${error}`);
    next(error);
  }
};

module.exports = {
  deleteTask,
}
