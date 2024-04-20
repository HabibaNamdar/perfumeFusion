import { useState } from "react";
import "./itemInCart.css";
import { Item } from "../../models/cart.mode";
import { XCircle } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { removeFromCart, updateInCart } from "../../features/cart/cartSlice";

function ItemInCart({ item }: { item: Item }) {
  const dispatch = useDispatch();
  const removeHandler = (item: Item) => {
    dispatch(removeFromCart(item.id));
  };

  const decrementQuantity = (item: Item) => {
    if (item.quantity > 0) {
      const newQuantity = item.quantity - 1;
      if (newQuantity == 0) {
        dispatch(removeFromCart(item.id));
      } else {
        const newItem = { ...item, quantity: newQuantity };
        dispatch(updateInCart(newItem));
      }
    }
  };

  const incrementQuantity = (item: Item) => {
    const newQuantity = item.quantity + 1;
    const newItem = { ...item, quantity: newQuantity };
    dispatch(updateInCart(newItem));
  };

  return (
    <div className="row justify-content-center items-container align-items-center">
      <div className="col-md-2">
        <img
          src="src/assets/images/perfume1.jpg"
          width={50}
          height={100}
          alt="Perfume"
        />
      </div>
      <div className="col-md-4">
        <h2 className="mb-0">{item.name}</h2>
        <p>{item.description}</p>
      </div>
      <div className="col-md-3">
        <div className="quantity-selector">
          <button
            onClick={() => {
              decrementQuantity(item);
            }}
          >
            -
          </button>
          <div>{item.quantity}</div>
          <button
            onClick={() => {
              incrementQuantity(item);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-md-2">
        <h2>Rs.{item.price * item.quantity}</h2>
      </div>
      <div className="col">
        <XCircle
          size={32}
          color="red"
          onClick={() => {
            removeHandler(item);
          }}
        />
      </div>
    </div>
  );
}

export default ItemInCart;
