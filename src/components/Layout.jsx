import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Layout = () => {
  const { cart } = useContext(CartContext); // ✅ Make sure this is inside CartProvider

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">🛒 Cart ({cart.length})</Link> {/* ✅ Display cart count */}
      </nav>
      <main>
        <Outlet /> {/* This renders the current page inside Layout */}
      </main>
    </div>
  );
};

export default Layout;
