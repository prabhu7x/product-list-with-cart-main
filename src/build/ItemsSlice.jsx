import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../../public/data.json";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
  cart: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    loadedItems: (state) => {
      const loadedData = data.map((item, index) => ({
        ...item,
        // id: nanoid().slice(0, 6),
        id: index,
        // quantity: 0,
      }));
      state.data = loadedData;
    },

    addToCart: (state, action) => {
      const getItem = state.data.find((item) => item.id === action.payload);
      if (getItem) {
        getItem.quantity = 1;
        state.cart = [...state.cart, getItem];
      }
    },

    removeFromCart: (state, action) => {
      const removeItems = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItems;
    },

    increment: (state, action) => {
      const itemToIncrement = state.cart.find(
        (item) => item.id === action.payload
      );
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
      }
    },

    decrement: (state, action) => {
      const itemToDecrement = state.cart.find(
        (item) => item.id === action.payload
      );
      if (itemToDecrement) {
        itemToDecrement.quantity -= 1;
      }
    },
  },
});

export const { loadedItems, addToCart, removeFromCart, increment, decrement } =
  itemsSlice.actions;
export const cartItems = (state) => state.items.cart;
export default itemsSlice.reducer;
