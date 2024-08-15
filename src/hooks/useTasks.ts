import { useState } from 'react';
import { Task } from '../utils/types';

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const toggleCompletion = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return {
    tasks,
    addTask,
    toggleCompletion,
    removeTask,
    completedTasks: tasks.filter(task => task.completed),
    incompleteTasks: tasks.filter(task => !task.completed),
  };
};

export default useTasks;
