import { Link } from "react-router-dom";
import "./header-filter.css";
function Headerfilter() {
  return (
    <div className="row justify-content-center filter-container">
      <div className="col-8">
        <div className="row">
          <div className="col-2">
            <Link to="home">
            <a>SHOP</a>
            </Link>
          </div>
          <div className="col-2">
            <a>WEEKLY DEALS</a>
          </div>
          <div className="col-2">
            <a>LESS THAN 1500</a>
          </div>
          <div className="col-2">
            <a>BUNDLES</a>
          </div>
          <div className="col-2">
            <a>ATTARS</a>
          </div>
          <div className="col-2">
            <a>GUESS & WIN</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Headerfilter;
