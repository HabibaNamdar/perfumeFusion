import ItemInCart from "../itemInCart/itemInCart";
import { useState } from "react";
import './listItemInCart.css'
import { Link } from "react-router-dom";

function ListItemInCart() {
  const [totalItems, setTotalItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Callback function to update total items and total amount
  const updateTotals = (quantity: number, totalPrice: number) => {
    setTotalItems(prevTotalItems => prevTotalItems + quantity);
    setTotalAmount(prevTotalAmount => prevTotalAmount + totalPrice);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9 list-item-container">
          <ItemInCart updateTotals={updateTotals} />
          <ItemInCart updateTotals={updateTotals} />
          <div className="item-divider"></div>
          <div>
          <p className="total-item">Total items: {totalItems}</p>
          <p className="total-amount">Total amount: Rs.{totalAmount}</p>
          </div>
          <Link to="/check-out-form" className="btn btn-danger btn-block mt-3 col-12">Check out</Link>
        </div>
      </div>
    </div>
  );
}

export default ListItemInCart;
