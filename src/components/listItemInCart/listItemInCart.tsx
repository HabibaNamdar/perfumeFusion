import ItemInCart from "../itemInCart/itemInCart";
import { useState } from "react";
import './listItemInCart.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Item, CartState } from "../../models/cart.mode";

function ListItemInCart() {
  const items: Item[] = useSelector((state: CartState) => state.cart);

  const [totalItems, setTotalItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9 list-item-container">
        {items.map(item => (
        <ItemInCart key={item.id} item={item} />
      ))}
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
