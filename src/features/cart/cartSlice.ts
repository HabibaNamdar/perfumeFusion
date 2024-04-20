import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { CartState } from "../../models/cart.mode";
import {
  addToCartHandler,
  deleteAllHandler,
  removeFromCartHanler,
  updateInCartHandler,
} from "./cartReducers";

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHanler,
    updateInCart: updateInCartHandler,
    deleteAll: deleteAllHandler,
  },
});

export const { addToCart, deleteAll, removeFromCart, updateInCart } =
  cartSlice.actions;

export default cartSlice.reducer;
