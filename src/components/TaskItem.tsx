import React from 'react';
import styled from 'styled-components';

interface TaskItemProps {
    task: {
        id: number;
        text: string;
        completed: boolean;
    };
    toggleCompletion: (id: number) => void;
    removeTask: (id: number) => void;
}

const TaskContainer = styled.div<{ completed: boolean }>`
    display: flex;
    align-items: center;
    background-color: ${({ completed }) => (completed ? '#e0ffe0' : '#ffe0e0')};
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TaskText = styled.span<{ completed: boolean }>`
    flex: 1;
    text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
    color: ${({ completed }) => (completed ? '#888' : '#000')};
    margin-left: 10px;
`;

const DeleteButton = styled.button`
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
        background-color: #ff0000;
    }
`;

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleCompletion, removeTask }) => {
    return (
        <TaskContainer completed={task.completed}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompletion(task.id)}
            />
            <TaskText completed={task.completed}>{task.text}</TaskText>
            <DeleteButton onClick={() => removeTask(task.id)}>Закончить</DeleteButton>
        </TaskContainer>
    );
};

export default TaskItem;
