import React from 'react'
import Task from './Task';

const Tasks = ({tasks, handleTaskClick, handleTaskDletion}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} handleTaskClick={handleTaskClick} handleTaskDletion={handleTaskDletion}/>
            ))}
        </>
    );
};

export default Tasks;