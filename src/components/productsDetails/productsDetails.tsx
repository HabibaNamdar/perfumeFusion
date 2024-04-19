import { Link } from "react-router-dom";
import { useState } from "react";
import "./productsDetails.css";
function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
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
                <button className="btn btn-danger btn-block mt-3 col-12">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
