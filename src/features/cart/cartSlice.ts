import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { CartState } from "../../models/cart.mode";
import {addToCartHandler, deleteAllHandler, removeFromCartHanler, updateInCartHandler} from './cartReducers'



const initialState: CartState = {
  cart: [
    {
      id: nanoid(),
      name: "perfume 1",
      description: "some description",
      price: 23,
      quantity: 2,
    },
  ],
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

export const { addToCart, deleteAll, removeFromCart, updateInCart } = cartSlice.actions;

export default cartSlice.reducer;

