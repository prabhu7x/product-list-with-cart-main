import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from './build/ItemsSlice'

export const store = configureStore({
   reducer: {
    items: itemsReducer
   } 
})