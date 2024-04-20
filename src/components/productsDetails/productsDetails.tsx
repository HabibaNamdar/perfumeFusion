import { useState } from "react";
import "./productsDetails.css";
import { Item } from "../../models/cart.mode";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";


function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  // dispatch function
  const dispatch = useDispatch();

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCartHandler = () => {
    setIsAdding(true);
    const item: Item = {
      name: "perfume2",
      description: "perfume 2 description",
      id: nanoid(),
      price: 5,
      quantity: quantity,
    };

    // adding item to the store.
    dispatch(addToCart(item));

    setTimeout(() => {
      setIsAdding(false);
    }, 2000);
  };
  

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-5">
          <img src="src/assets/images/perfume1.jpg" width={400} height={500} />
        </div>
        <div className="col-md-6">
          <h1>URAAN</h1>
          <div className="row mt-4">
            <div className="col-md-12">
              <p>Ambery Vanilla Boost</p>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <h2>Format</h2>
              </div>
              <div className="col-md-6">
                <div className="rectangle-box">
                  <p>Perfume Spray (50ml)</p>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <h3>Price</h3>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <p className="price">Rs.2,140</p>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <h3>Quantity</h3>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6">
                          <div className="quantity-selector">
                            <button onClick={decrementQuantity}>-</button>
                            <div>{quantity}</div>
                            <button onClick={incrementQuantity}>+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <button
                    className="btn btn-danger btn-block mt-3 col-12"
                    onClick={addToCartHandler}
                  >
                    Add to cart
                  </button>
                </div>
                <div className="col-md-6">
                  {isAdding && (
                    <p className="text-success mt-1 mb-0">Item added to cart</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
