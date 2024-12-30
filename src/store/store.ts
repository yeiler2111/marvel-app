import { configureStore } from "@reduxjs/toolkit";
import reducer from "./userRegisterSlide";
import userReducer from './userSlide';
export const store = configureStore({
    reducer: {
        login: userReducer,
        register:reducer
    }
})