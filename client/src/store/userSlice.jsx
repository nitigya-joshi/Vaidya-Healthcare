import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        },
        setAvatar: (state, action) => {
            state.user["pic"] = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { login, logout, setAvatar, setUser } = userSlice.actions
export const selectUser = (state) => state.user.user
export default userSlice.reducer