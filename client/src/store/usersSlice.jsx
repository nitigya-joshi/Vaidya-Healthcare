import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: []
    },
    reducers: {
        addUsers: (state, action) => {
            state.users = action.payload
        }, 
        addUser(state, action) {
            const existingItem = state.items.find((item) => item.id === action.payload.id)
            if (existingItem) {
                existingItem.totalQuantity += 1
            } else {
                const newItem = action.payload
                state.items.push({
                    ...newItem, totalQuantity: 1, totalPrice: newItem.price
                })
            }

        },
        removeUser(state, action) {
            const existingItem = state.items.find((item) => item.id === action.payload)
            if (existingItem.totalQuantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload)
            } else {
                existingItem.totalQuantity -= 1
            }
        },
    }
})

export const { addUser, removeUser, addUsers } = usersSlice.actions
export const selectUsers = (state) => state.users.users
export default usersSlice.reducer