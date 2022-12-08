import { createSlice } from "@reduxjs/toolkit";

export const scrolledSlice = createSlice({
    name: "scrolled",
    initialState: {
        scrolled: false,
    },
    reducers: {
      setScrolled: (state, action) => {
        state.scrolled = action.payload
      }
    }
})

export const { setScrolled } = scrolledSlice.actions
export const selectScrolled = (state) => state.scrolled.scrolled
export default scrolledSlice.reducer