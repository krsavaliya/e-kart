import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Shop } from "./Pages/Shop";
import { Cart } from "./Pages/Cart";
import { Footer } from "./Components/Footer/Footer";
import mobile_banner from "./Components/Assets/mobile_banner.png";
import laptop_banner from "./Components/Assets/laptop_banner.png";
import accessories_banner from "./Components/Assets/accessories_banner1.png";

import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mobile"
            element={<ShopCategory banner={mobile_banner} category="mobile" />}
          />
          <Route
            path="/laptop"
            element={<ShopCategory banner={laptop_banner} category="laptop" />}
          />
          <Route
            path="/accessories"
            element={
              <ShopCategory
                banner={accessories_banner}
                category="accessories"
              />
            }
          />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
