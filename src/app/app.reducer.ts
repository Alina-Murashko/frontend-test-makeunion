import { PayloadAction, createSlice } from '@reduxjs/toolkit'
const initialState = {
  error: null as null | string,
  status: 'idle' as RequestStatusType,
}

const slice = createSlice({
  initialState,
  name: 'app',
  reducers: {
    setAppError: (state, action: PayloadAction<{ error: null | string }>) => {
      state.error = action.payload.error
    },
    setAppStatus: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
      state.status = action.payload.status
    },
  },
})

export const appReducer = slice.reducer
export const appActions = slice.actions

export type RequestStatusType = 'failed' | 'idle' | 'loading' | 'succeeded'
