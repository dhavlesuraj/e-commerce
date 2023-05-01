
import {  Routes, Route,createSearchParams } from "react-router-dom";
import Navbar from './componant/Navbar';
import Aboute from "./componant/Aboute";
import { Product } from "./pages/product";
import { Products } from "./pages/products";
import {Cart} from "./pages/cart";
import {NotFound} from "./pages/not-found";
import { useNavigate } from "react-router-dom";
import { useCart } from "./componant/context/cart";
import Payment from "./pages/Payment";



function App() {
  let navigate = useNavigate();
  const {cartItemCount}=useCart();  //destructuring of useCart

  const onSerach=(serachQuery)=>{
   navigate(`/?${createSearchParams({ q: serachQuery })}`)
  }
  return (
    <>
        <Navbar onSearch={onSerach} cartItemCount={cartItemCount()}/>
        <Routes>
          <Route path="/" exact element={<Products />} />
          <Route path="/about" exact element={<Aboute />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/product/:productId" exact element={<Product />} />
          <Route path="*" exact element={<NotFound />} />
          <Route path="/payment" exact element={<Payment/>}/>
        </Routes>
    </>
  );
}

export default App;
