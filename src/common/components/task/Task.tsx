import {ComponentPropsWithoutRef, memo, useCallback} from "react";
import {Button} from "../button/Button.tsx";
import s from './task.module.scss'
import {EditableSpan} from "../editableTitle/EditableTitle.tsx";
import { TaskType } from "../../../app/task/task.reducer.ts";

type TaskProps = {
    task: TaskType
    changeTaskStatus: (taskId: string) => void
    removeTask: (taskId: string) => void
    updateTitle: (taskId: string, newTitle: string) => void
} & ComponentPropsWithoutRef<'div'>
export const Task = memo((props: TaskProps) => {
    const {task,changeTaskStatus,removeTask,updateTitle, className, ...rest} = props
    const changeTaskStatusHandler = useCallback(() => {
        changeTaskStatus(task.taskId)
    },[task, changeTaskStatus])

    const removeTaskHandler = useCallback(() => {
        removeTask(task.taskId)
    },[task,removeTask])

    const updateTitleHandler = useCallback((newTitle: string) => {
       updateTitle(task.taskId,newTitle)
    },[task,updateTitle])


    return (
        <div className={`${s.container} ${className}`} {...rest}>
            <input type="checkbox" checked={task.status}
                   onChange={changeTaskStatusHandler} />
            <EditableSpan status={task.status} value={task.title} onChange={updateTitleHandler} />
            <Button className={s.button} onClick={removeTaskHandler}>x</Button>
        </div>
    );
});
