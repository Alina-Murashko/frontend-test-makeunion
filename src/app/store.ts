import { configureStore } from '@reduxjs/toolkit'
import { AnyAction, combineReducers } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { appReducer } from "./app.reducer.ts";
import { usersReducer } from "./users/users.reducer.ts";
import {tasksReducer} from "./task/task.reducer.ts";


const rootReducer = combineReducers({
  app: appReducer,
  users: usersReducer,
  tasks: tasksReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AnyAction
>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

