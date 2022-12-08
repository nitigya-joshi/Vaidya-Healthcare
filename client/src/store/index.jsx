import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import usersReducer from './usersSlice';
import doctorsReducer from './doctorsSlice';
import scrolledReducer from './scrolledSlice';
const store = configureStore({
    reducer: { user: userReducer, users: usersReducer, doctors: doctorsReducer, scrolled: scrolledReducer }
})

export default store;