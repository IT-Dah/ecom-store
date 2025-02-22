import React, { useContext } from "react"; 
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Layout = () => {
  const { cart } = useContext(CartContext); // ✅ Make sure this is inside CartProvider

  // Calculate total quantity of all items in the cart
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">🛒 Cart ({totalQuantity})</Link> {/* ✅ Display total quantity */}
      </nav>
      <main>
        <Outlet /> {/* This renders the current page inside Layout */}
      </main>
    </div>
  );
};

export default Layout;
