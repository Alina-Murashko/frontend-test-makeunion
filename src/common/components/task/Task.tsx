import React from "react";
import {Button} from "../button/Button.tsx";
import s from './task.module.scss'
import {Task} from "../../../app/task/task.reducer.ts";
import {EditableSpan} from "../editableTitle/EditableTitle.tsx";

type TaskProps = {
    task: Task
    changeTaskStatus: (taskId: string) => void
    removeTask: (taskId: string) => void
    updateTitle: (taskId: string, newTitle: string) => void
};
export const Task = React.memo((props: TaskProps) => {
    const {task,changeTaskStatus,removeTask,updateTitle} = props
    const changeTaskStatusHandler = () => {
        changeTaskStatus(task.taskId)
    }

    const removeTaskHandler = () => {
        removeTask(task.taskId)
    }

    const updateTitleHandler = (newTitle: string) => {
       updateTitle(task.taskId,newTitle)
    }


    return (
        <div className={s.container}>
            <input type="checkbox" checked={task.status}
                   onChange={changeTaskStatusHandler} />
            <EditableSpan status={task.status} value={task.title} onChange={updateTitleHandler} />
            <Button className={s.button} onClick={removeTaskHandler}>x</Button>
        </div>
    );
});
