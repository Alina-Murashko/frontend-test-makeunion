import { Card } from "../../common/components/card/Card.tsx";
import { Button } from "../../common/components/button/Button.tsx";
import s from './todolist.module.scss'
import {Input} from "../../common/components/input/Input.tsx";
import {Task} from "../../common/components/task/Task.tsx";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {tasksActions, TaskType} from "../../app/task/task.reducer.ts";
import { v4 } from 'uuid'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store.ts";

export const Todolist = () => {
    const dispatch = useAppDispatch()
    const tasks = useSelector((state: AppRootStateType) => state.tasks)
    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null);
    const addItemHandler = () => {
        if (title.trim() !== "") {
            const taskId = v4().toString()
            const newTask: TaskType = {
                title: title,
                status: false,
                taskId: taskId,
            }
            dispatch(tasksActions.addTask({task: newTask}))

            setTitle("");
        } else {
            setError("Title is required");
        }
    };
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const changeTaskStatusHandler = (taskId: string) => {
        dispatch(tasksActions.updateStatus({taskId}))
    }
    const removeTaskHandler = (taskId: string) => {
        dispatch(tasksActions.removeTask({taskId}))
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            addItemHandler();
        }
    };

    const updateTitleHandler = (taskId: string, newTitle: string) => {
        dispatch(tasksActions.updateTitle({taskId,newTitle}))
    }
    return (
        <section className={s.container}>
            <Card className={s.card}>
                <div className={s.containerInput}>
                    <Input value={title} onChange={onChangeHandler} error={error} onKeyDown={onKeyPressHandler}/>
                    <Button onClick={addItemHandler} >+</Button>
                </div>
                {tasks.length === 0 ?
                    <div className={s.emptyTodolist}>
                        Todolist is empty
                    </div>
                    :<div className={s.taskContainer}>
                        {tasks.map(task => {
                            return <Task key={task.taskId} task={task}
                                         changeTaskStatus={changeTaskStatusHandler}
                                         removeTask={removeTaskHandler}
                                         updateTitle={updateTitleHandler}/>
                        })}
                    </div>}


            </Card>
        </section>

    )
}