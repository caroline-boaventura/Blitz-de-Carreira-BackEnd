const express = require('express');
const { getAllTask } = require('../controllers/taskControllerGetAll')

const router = express.Router();

router.get('/', getAllTask)

module.exports = router;