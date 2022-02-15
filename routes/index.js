const express = require('express');
const { getAllTask } = require('../controllers/taskControllerGetAll')
const { newTaskController } = require('../controllers/taskControllerCreateTask');

const router = express.Router();

router.post('/createTask', newTaskController)
router.get('/', getAllTask)

module.exports = router;