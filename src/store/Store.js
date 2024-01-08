import { configureStore } from "@reduxjs/toolkit";
import { numReducer } from "./features/Number/numSlice.js";


export const store = configureStore({
    reducer: {
        number: numReducer
    }
})