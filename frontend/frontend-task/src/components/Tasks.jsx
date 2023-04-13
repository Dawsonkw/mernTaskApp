import React, { useState } from 'react';
import api from '../api/readTaskReq.js'

function Tasks(props) {
    const [newTask, setNewTask] = useState('');

    const handleTaskSubmit = async (event) => {
        event.preventDefault();
        const response = await api.postNewTask(newTask);
        if(response.ok) {
            props.onTaskCreated();
            setNewTask('');
        } else {
            console.error('error creating task:' , response.status);
        }
    }




    return (
        <div>
            <div>
                <div id='TaskBody' className='text-2xl'>
                    {props.tasks.map(task => (
                        <div>
                            <div>
                                <h3>{task.text}</h3>
                                <p>{task.completed ? 'Completed' : 'Incomplete'}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleTaskSubmit}>
                    <div>
                        <label htmlFor="newTaskText"> New Task</label>
                        <input type="text" className='form-control' value={newTask} onChange={(event) => setNewTask(event.target.value)} id="newTaskText" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Tasks;