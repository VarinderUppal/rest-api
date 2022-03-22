const express = require("express");
const dataController = require('../controllers/dataController')

const router = express.Router();


router.route('/').get(dataController.getAllData).post(dataController.addNewData)

router.route('/:id').get(dataController.getSingleEntry).patch(dataController.updateData).delete(dataController.deleteSingleEntry)


module.exports = router

