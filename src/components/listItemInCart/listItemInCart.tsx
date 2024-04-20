import ItemInCart from "../itemInCart/itemInCart";
import { useState } from "react";
import "./listItemInCart.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Item, CartState } from "../../models/cart.mode";
import { deleteAll } from "../../features/cart/cartSlice";

function ListItemInCart() {
  const dispatch = useDispatch();
  const deleteAllHandler = () => {
    dispatch(deleteAll());
  };
  const items: Item[] = useSelector((state: CartState) => state.cart);
  const totalAmount = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="container">
      {items.length > 0 && (
        <div className="row justify-content-center">
          <div className="row">
            <div className="col-md-10 d-flex align-items-start justify-content-end ">
              <span
                className="text-danger DeleteAll"
                onClick={() => {
                  deleteAllHandler();
                }}
              >
                DeleteAll{" "}
              </span>
            </div>
          </div>
          <div className="col-md-9 list-item-container">
            {items.map((item) => (
              <ItemInCart key={item.id} item={item} />
            ))}
            <div className="item-divider"></div>
            <div>
              <p className="total-item">Total items: {items.length}</p>
              <p className="total-amount">Total amount: Rs.{totalAmount}</p>
            </div>
            <Link
              to="/check-out-form"
              className="btn btn-danger btn-block mt-3 col-12"
            >
              Check out
            </Link>
          </div>
        </div>
      )}

      {
        items.length == 0 &&
        <div className="row ">
          <div className="col-md-12 text-center fw-bold">
            Their is not Items in the cart.
          </div>
        </div>
      }
    </div>
  );
}

export default ListItemInCart;
