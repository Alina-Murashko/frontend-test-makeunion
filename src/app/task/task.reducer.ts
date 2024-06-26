import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Task} from "../../common/components/task/Task.tsx";

const initialState: Task[] = [];

const slice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        removeTask: (state, action: PayloadAction<{ taskId: string }>) => {
            const index = state.findIndex((t) => t.taskId === action.payload.taskId);
            if (index !== -1) {
                state.splice(index, 1)
            }
            console.log(`error ${index} ${action.payload.taskId}`)
        },
        addTask: (state, action: PayloadAction<{ task: Task }>) => {
           state.unshift(action.payload.task);
        },
        updateStatus: (state, action: PayloadAction<{ taskId: string}>) => {
            const index = state.findIndex((t) => t.taskId === action.payload.taskId);
            if (index !== -1) {
                console.log( state[index])
               state[index] = {...state[index], status: !state[index].status}
            }
            console.log(`error ${index}`)
        },
        updateTitle: (state, action: PayloadAction<{ taskId: string, newTitle: string}>) => {
            const index = state.findIndex((t) => t.taskId === action.payload.taskId);
            if (index !== -1) {
                console.log( state[index])
                state[index] = {...state[index], title: action.payload.newTitle}
            }
            console.log(`error ${index}`)
        }
    },
});

export const tasksReducer = slice.reducer;
export const tasksActions = slice.actions;

export type Task = {
    title: string;
    status: boolean;
    taskId: string
}
