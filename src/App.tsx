import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import useTasks from './hooks/useTasks';
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f2f5;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

const AppContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
`;

const Title = styled.h1`
  color: #00838F;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #555555;
  margin-top: 20px;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 5px;
`;

const App: React.FC = () => {
  const { tasks, addTask, toggleCompletion, removeTask, completedTasks, incompleteTasks } = useTasks();

  return (
    <>
      <GlobalStyle />
      <AppContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Title>ToDo List</Title>
        <AddTaskForm addTask={addTask} />
        <SectionTitle>Невыполненные задачи</SectionTitle>
        <TaskList tasks={incompleteTasks} toggleCompletion={toggleCompletion} removeTask={removeTask} />
        <SectionTitle>Выполненные задачи</SectionTitle>
        <TaskList tasks={completedTasks} toggleCompletion={toggleCompletion} removeTask={removeTask} />
      </AppContainer>
    </>
  );
};

export default App;
