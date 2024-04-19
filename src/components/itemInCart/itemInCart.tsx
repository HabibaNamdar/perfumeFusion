import { useState } from "react";
import "./itemInCart.css";

interface ItemInCartProps {
  updateTotals: (quantity: number, totalPrice: number) => void;
}

function ItemInCart({ updateTotals }: ItemInCartProps) {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 2140; // Price per item
  const total = quantity * pricePerItem; // Calculate total price

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateTotals(-1, -pricePerItem); // Update total items and total amount
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    updateTotals(1, pricePerItem); // Update total items and total amount
  };

  return (
    <div className="row justify-content-center items-container align-items-center">
      <div className="col-md-2">
        <img src="src/assets/images/perfume1.jpg" width={50} height={100} alt="Perfume" />
      </div>
      <div className="col-md-4">
        <h2 className="mb-0">URAAN</h2>
        <p>Ambery Vanilla Boost</p>
      </div>
      <div className="col-md-3">
        <div className="quantity-selector">
          <button onClick={decrementQuantity}>-</button>
          <div>{quantity}</div>
          <button onClick={incrementQuantity}>+</button>
        </div>
      </div>
      <div className="col-md-2">
        <h2>Rs.{total}</h2>
      </div>
    </div>
  );
}

export default ItemInCart;
