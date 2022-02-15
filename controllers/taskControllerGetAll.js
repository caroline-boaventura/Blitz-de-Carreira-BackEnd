const { getAll } = require('../services/taskServiceGetAll')

const getAllTask = async (req, res) => {
  try {
    const allTasks = await getAll()

    return res.status(200).json(allTasks);
  } catch (error) {
    console.log(`GET ALL TASKS ERROR: ${error}`)
  }
}

module.exports = { getAllTask };