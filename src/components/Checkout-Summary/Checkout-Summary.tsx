
import { Link } from "react-router-dom";
import "./Checkout-Summary.css"
function CheckoutSummary(){
    return(
        <div className="container">
            <div className="row justify-content-center ">
                <div className="col-8">
                    <div className="row">
                        <div className="col-1">
                <img src="src/assets/images/perfume1.jpg" width={50} height={100} alt="Perfume" />
                 </div>
                 <div className="col-4 mt-4">
                    <h5>Uraan</h5>
                 <p>Perfume Spray (50ml)</p>
                 </div>
                 <div className="col-4 mt-5">
                    <p>Rs 2,140.00</p>
                 </div>
                 </div> 
                 <div className="row">
                    <div className="col-5 mt-3">
                        <input type="text" className="form-control" placeholder="Discount code or gift card" />
                    </div>
                    <div className="col-3 mt-3">
                        <button type="button" className="btn border-dark">Apply</button>
                    </div>
                 </div>
                 <div className="row mt-4">
                    <div className="col-5">
                        <p>Subtotal</p>
                    </div>
                    <div className="col-5">
                        <p>Rs 2,140.00</p>
                    </div>
                 </div>
                 <div className="row">
                    <div className="col-5">
                        <p>Shipping</p>
                    </div>
                    <div className="col-5">
                        <p>Rs 169.00</p>
                    </div>
                 </div>
                 <div className="row">
                    <div className="col-4">
                        <h5>Total</h5>
                    </div>
                    <div className="col-5">
                        <p>PKR Rs 2,309.00</p>
                    </div>
                 </div>
                 <div className="row">
                    <div className="col-5">
                        <p>Including Rs 310.94 in taxes</p>
                    </div>
                 </div>
                </div>
            </div>
        </div>
        
    )
    
}
export default CheckoutSummary;