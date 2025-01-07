import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/slices/ItemsSlice"

export const store = configureStore({
   reducer: {
    items: itemsReducer
   } 
})