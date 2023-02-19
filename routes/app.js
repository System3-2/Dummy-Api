const express = require("express");
const router = express.Router();
const { getAllData, getSingleTasks } = require('../controllers/app');

router.route("/").get(getAllData);
router.route('/:id').get(getSingleTasks)
module.exports = router;
