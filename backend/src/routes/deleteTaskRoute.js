const TaskModel = require('../models/TaskModel');

module.exports = async (req, res) => {
    const {id} = req.params;
    const task  = await TaskModel.findById(id);
    await task.deleteOne();
    res.status(204).json(task);
    console.log('Task Removed Successfully')
}