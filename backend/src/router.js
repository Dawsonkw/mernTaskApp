const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn')

const createTasksRoute = require('./routes/createTaskRoute');
const readTasksRoute = require('./routes/readTasksRoute');
const updateTasksRoute = require('./routes/updateTaskRoute');


const router = express.Router();

router.post('/login', require('./routes/loginRoute'));

router.post('/tasks', isLoggedIn, createTasksRoute);
router.get('/tasks', isLoggedIn, readTasksRoute);

router.put('/tasks/:id', isLoggedIn, updateTasksRoute);

// router.get('/tasks', isLoggedIn, require('./routes/readTasksRoute'));



module.exports = router