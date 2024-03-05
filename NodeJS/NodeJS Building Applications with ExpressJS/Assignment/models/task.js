const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: String,
        required: true,
        default:false
       
    },
},
    { timestamps: true }
)

module.exports = mongoose.model('Task', taskSchema)