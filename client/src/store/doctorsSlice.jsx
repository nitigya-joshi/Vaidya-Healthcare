import { createSlice } from "@reduxjs/toolkit";

export const doctorsSlice = createSlice({
    name: "doctors",
    initialState: {
        doctors: []
    },
    reducers: {
        addDoctors: (state, action) => {
            state.doctors = action.payload
        }, 
        addDoctor(state, action) {
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
        removeDoctor(state, action) {
            const existingItem = state.items.find((item) => item.id === action.payload)
            if (existingItem.totalQuantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload)
            } else {
                existingItem.totalQuantity -= 1
            }
        },
    }
})

export const { addDoctor, removeDoctor, addDoctors } = doctorsSlice.actions
export const selectDoctors = (state) => state.doctors.doctors
export default doctorsSlice.reducer