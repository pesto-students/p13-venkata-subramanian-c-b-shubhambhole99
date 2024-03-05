const express = require('express')
const router = express.Router()
const taskcontroller=require("../controller/taskController")


//Get Task
router.get('/get', taskcontroller.getTask)


module.exports=router