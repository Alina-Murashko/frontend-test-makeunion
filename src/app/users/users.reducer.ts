import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { appActions } from "../app.reducer.ts";
import { usersAPI } from "../api/api.ts";
import { AppThunk } from "../store.ts";

const initialState  = {
    users: [] as User[],
    user: {} as User,
}


const slice = createSlice({
    initialState,
    name: 'users',
    reducers: {
        setUsers: (state, action: PayloadAction<{ users: UserResponse[]}>) => {
            state.users = action.payload.users
        },
        setCommentUser: (state, action: PayloadAction<{comment: Comment}>) => {
            state.user.comment = action.payload.comment.body
        },
        setUser: (state, action: PayloadAction<{user: User}>) => {
            state.user = {...state.user,
                ...action.payload.user,
                src : `https://ui-avatars.com/api/?name=${action.payload.user.name}&background=323854&color=fff`}
        }
    }
})

export const usersReducer = slice.reducer

export const usersAction = slice.actions


const usersGet =  (): AppThunk =>
    async (dispatch) => {
        dispatch(appActions.setAppStatus({ status: "loading" }))
        try {
            const res = await usersAPI.getUsers()
            const users = await res.json()
            dispatch(usersAction.setUsers({users}))

        } catch (error) {
            dispatch(appActions.setAppError({ error: error as string }))
        } finally {
            dispatch(appActions.setAppStatus({ status: 'succeeded' }))
        }
    };

const userComment =  (id: string): AppThunk =>
    async (dispatch) => {
        dispatch(appActions.setAppStatus({ status: "loading" }))
        try {
            const res = await usersAPI.getUserComment(id)
            const comment = await res.json()
            dispatch(usersAction.setCommentUser({comment}))
            dispatch(usersThunks.user(id))

        } catch (error) {
            dispatch(appActions.setAppError({ error: error as string }))
        } finally {
            dispatch(appActions.setAppStatus({ status: 'succeeded' }))
        }
    };

const user =  (id: string): AppThunk =>
    async (dispatch) => {
        dispatch(appActions.setAppStatus({ status: "loading" }))
        try {
            const res = await usersAPI.getUser(id)
            const user = await res.json()
            dispatch(usersAction.setUser({user}))

        } catch (error) {
            dispatch(appActions.setAppError({ error: error as string }))
        } finally {
            dispatch(appActions.setAppStatus({ status: 'succeeded' }))
        }
    };

export const usersThunks = { usersGet, userComment, user}

type UserResponse = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export type User = UserResponse & {
    src: string
    comment: string
}

type Comment = {
    postId: number
    id: number
    name: string
    email: string,
    body: string,
}