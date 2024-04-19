import { useState } from "react";
import "./itemInCart.css";
import { Item } from "../../models/cart.mode";
function ItemInCart({ item }: { item: Item }) {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 2140; // Price per item
  const total = quantity * pricePerItem; // Calculate total price

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
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
        <h2 className="mb-0">
          {item.name}
        </h2>
        <p>{item.description}</p>
      </div>
      <div className="col-md-3">
        <div className="quantity-selector">
          <button onClick={decrementQuantity}>-</button>
          <div>{item.quantity}</div>
          <button onClick={incrementQuantity}>+</button>
        </div>
      </div>
      <div className="col-md-2">
        <h2>Rs.{item.price * item.quantity}</h2>
      </div>
    </div>
  );
}

export default ItemInCart;
