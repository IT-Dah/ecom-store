import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductsList from "./components/ProductsList";
import ProductPage from "./components/ProductPage";
import { CartProvider } from "./context/CartContext";

const CartPage = () => <h2>Cart Page</h2>;
const CheckoutPage = () => <h2>Checkout Page</h2>;
const CheckoutSuccess = () => <h2>Checkout Successful</h2>;
const ContactPage = () => <h2>Contact Page</h2>;

function App() {
  return (
    <CartProvider> {/* ✅ Wrap everything in CartProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductsList />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="checkout-success" element={<CheckoutSuccess />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
