import React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Task } from '../utils/types';
import { motion } from 'framer-motion';

const Form = styled.form`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    `;

    const Input = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    font-size: 16px;
    outline: none;

    &:focus {
        border-color: #00838F;
    }
    `;

const Button = styled(motion.button)`
    padding: 10px 20px;
    background-color: #00838F;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #006064;
    }
`;

interface FormValues {
    task: string;
    }

    const AddTaskForm: React.FC<{ addTask: (task: Task) => void }> = ({ addTask }) => {
    const { register, handleSubmit, reset } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = data => {
        addTask({ id: Date.now(), text: data.task, completed: false });
        reset();
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
            {...register('task', { required: true })}
            placeholder="Введите задачу"
        />
        <Button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            Добавить
        </Button>
        </Form>
    );
};

export default AddTaskForm;
