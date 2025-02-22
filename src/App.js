import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductsList from "./components/ProductsList";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import CheckoutSuccessPage from "./components/CheckoutSuccessPage";
import ContactPage from "./components/ContactPage";
import { CartProvider } from "./context/CartContext"; // ✅ Import CartProvider

function App() {
  return (
    <CartProvider> {/* ✅ Wrap everything inside CartProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductsList />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="checkout-success" element={<CheckoutSuccessPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
