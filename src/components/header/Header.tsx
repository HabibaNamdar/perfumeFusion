import { Person } from "react-bootstrap-icons";
import { Cart } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";

import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartState, Item } from "../../models/cart.mode";

function Header() {

  const items:Item[] = useSelector((state: CartState) => state.cart);

  return (
    <div className="row header-container justify-content-center">
      <div className="col-11">
        <div className="row mt-3 align-items-center">
          {/* Search field */}
          <div className="col-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <span className="input-group-text">
                <Search />
              </span>
            </div>
          </div>

          {/* Logo */}

          <div className="col-6 logo-name">
            <Link to="/home">
              <h1>Perfume Fusion</h1>
            </Link>
          </div>

          <div className="col-3">
            <div className="row">
              <div className="col-6">
                <Link to="/Login">
                  <div className="AccountContainer">
                    <Person size={30} />
                    <span className="account-text">Account</span>
                  </div>
                </Link>
              </div>
              <div className="col-6">
                <Link to="/item-in-cart">
                  <div className="CartContainer">
                    <Cart size={25} />
                    <span className="cart-text position-relative">
                      Cart
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {items.length}
                      </span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
