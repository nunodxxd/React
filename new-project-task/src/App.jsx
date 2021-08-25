import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import Tasks from './components/Tasks';
import './App.css';
import AddTask from './components/AddTask';

const App = () =>{
  //let message = 'hello world'
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map( task => {
      if(task.id === taskId) return {...task, completed: !task.completed}
      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTittle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTittle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };



  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
      </div> 
    </>
  )
};

export default App;