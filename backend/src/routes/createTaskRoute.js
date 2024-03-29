const TaskModel = require('../models/TaskModel');

module.exports = async (req, res) => {
    const {text} = req.body;
    const task = new TaskModel({
        text, 
        completed: false,
    })
    const newTask = await task.save();
    res.json(newTask);
};