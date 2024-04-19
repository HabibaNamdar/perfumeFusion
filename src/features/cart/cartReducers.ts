import { PayloadAction } from "@reduxjs/toolkit";
import { CartState, Item } from "../../models/cart.mode";

export const addToCartHandler = (state: CartState, action: PayloadAction<Item>) => {
    const { id, name, description, price, quantity } = action.payload;
    state.cart.push({
      id,
      name,
      description,
      price,
      quantity,
    });
  }


export const removeFromCartHanler = (state:CartState, action: PayloadAction<string>) => {
    const idToRemove = action.payload;
    state.cart = state.cart.filter(item => item.id !== idToRemove);
  }

export const updateInCartHandler = (state:CartState, action: PayloadAction<{ id: string; quantity: number }>) => {
  const { id, quantity } = action.payload;
  const itemToUpdate = state.cart.find(item => item.id === id);
  if (itemToUpdate) {
    itemToUpdate.quantity = quantity;
  }
}

export const deleteAllHandler = (state:CartState) => {
  state.cart = [];
}