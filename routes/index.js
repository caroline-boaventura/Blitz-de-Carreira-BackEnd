const express = require('express');
const { getAllTask } = require('../controllers/taskControllerGetAll')
const { newTaskController } = require('../controllers/taskControllerCreateTask');
const { editTask } = require('../controllers/taskControllerUpdateTask');

const router = express.Router();

router.post('/createTask', newTaskController)
router.get('/', getAllTask)
router.put('/updateTask/:id', editTask)

module.exports = router;