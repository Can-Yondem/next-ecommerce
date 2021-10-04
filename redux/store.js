import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import productsSlice from "./products/productsSlice";
import bagSlice from "./bag/bagSlice"

export const store = configureStore({
    reducer: {
        users: userSlice,
        products:  productsSlice,
        bag: bagSlice,
    }
})