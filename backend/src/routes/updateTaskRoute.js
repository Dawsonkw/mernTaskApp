const TaskModel = require('../models/TaskModel');

module.exports = async (req, res) => {
    const {id} = req.params;
    const task = await TaskModel.findById(id); 
    task.completed = req.body.completed;
    task.text = req.body.text;
    await task.save();
    res.json(task);
}