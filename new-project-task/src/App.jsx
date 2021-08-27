import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';

import './App.css';

const App = () =>{
  //let message = 'hello world'
  /*
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
  */
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
      setTasks(data);
    };

    fetchTasks();
  }, []);

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

  const handleTaskDletion = (taskId) =>{
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header/>
        <Route path="/" exact render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDletion={handleTaskDletion}/>  
            </>
          )}
        />
         <Route path="/:taskTitle" exact component={TaskDetails}/>
      </div> 
    </Router>
  )
};

export default App;