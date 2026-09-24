import { createSlice } from "@reduxjs/toolkit";

const savedData = JSON.parse(localStorage.getItem("data")) || [];

const itemDataSlice = createSlice({
  name: "itemData",
  initialState: {
    items: savedData,
    currency: "₹",
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("data", JSON.stringify(state.items));
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("data", JSON.stringify(state.items));
    },
    deleteAll: (state) => {
      state.items = [];
      localStorage.removeItem("data");
    },
    changeCurrencyToUSDollar: (state) => {
      state.currency = "$";
    },
    changeCurrencyToINR: (state) => {
      state.currency = "₹";
    },
  },
});

export default itemDataSlice;

export const itemDataActions = itemDataSlice.actions;
