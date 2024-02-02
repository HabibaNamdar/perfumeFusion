import { Person } from "react-bootstrap-icons";
import { Cart } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";

import "./header.css";

function Header() {
  return (
    <div className="row header-container justify-content-center">
      <div className="col-11">
        <div className="row mt-3 align-items-center">
      {/* Search field */}
      <div className="col-3">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search" />
        <span className="input-group-text"><Search/></span>
        </div>
      </div>

      {/* Logo */}

      <div className="col-6 logo-name">
        <h1>Perfume Fusion</h1>
      </div>

      <div className="col-3">
        <div className="row">
          <div className="col-6">
            <div className="AccountContainer">
            <Person size={30} />
              <span className="account-text">Account</span>
            </div>
          </div>
          <div className="col-6">
            <div className="CartContainer">
            <Cart size={25}/>
              <span className="cart-text">Cart</span>
            </div>
          </div>
        </div>
      </div>

        </div>
    </div>
    </div>
  );
}
export default Header;
