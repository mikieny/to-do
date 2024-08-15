    import React from 'react';
    import TaskItem from './TaskItem';
    import { Task } from '../utils/types';

    interface TaskListProps {
    tasks: Task[];
    toggleCompletion: (id: number) => void;
    removeTask: (id: number) => void;
    }

    const TaskList: React.FC<TaskListProps> = ({ tasks, toggleCompletion, removeTask }) => {
    return (
        <div className="task-list">
        {tasks.map(task => (
            <TaskItem
            key={task.id}
            task={task}
            toggleCompletion={toggleCompletion}
            removeTask={removeTask}
            />
        ))}
        </div>
    );
    };

    export default TaskList;
