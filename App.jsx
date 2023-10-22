import Navbar from "./Components/Navbar/Navbar.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop.jsx'
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import LoginSinup from "./Pages/LoginSinup.jsx";
import Cart from "./Pages/Cart.jsx";
import Footer from "./Components/Footer/Footer.jsx"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/chamsocda" element={<ShopCategory category="da"/>} />
          <Route path="/sonmoi" element={<ShopCategory category="môi"/>} />
          <Route path="/phantrangdiem" element={<ShopCategory category="mặt"/>} />
          <Route path="/kechimay" element={<ShopCategory category="mắt"/>} />
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}></Route>
          </Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/dangnhap" element={<LoginSinup/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
