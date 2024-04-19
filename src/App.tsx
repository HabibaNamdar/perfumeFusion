import Header from "./components/header/Header";
import Headerfilter from "./components/header-filter/Header-filter";
import Login from "./components/login/login";
import Registor from "./components/registor/Registor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetails from "./components/productsDetails/productsDetails";
import ListItemInCart from "./components/listItemInCart/listItemInCart";
import CheckoutForm from "./components/Checkout-form/Checkout-form";
import CheckoutSummary from "./components/Checkout-Summary/Checkout-Summary";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Headerfilter />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registor />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/item-in-cart" element={<ListItemInCart/>} />
          <Route path="Check-out-form" element={<CheckoutForm/>}/>
          <Route path="Check-out-Summary" element={<CheckoutSummary/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
