const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    completed: {
        type: Boolean,
        
    }
});

const TaskModel = mongoose.model('Task', TaskSchema);

module.exports = TaskModel;