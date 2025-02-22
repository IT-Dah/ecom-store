import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import layoutStyles from "../styles/Layout.module.css"; // Layout styles
import headerStyles from "../styles/header.module.css"; // Header styles

const Layout = () => {
  const { cart } = useContext(CartContext);

  // ✅ Calculate total items in cart
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={layoutStyles.layoutContainer}>
      <nav className={headerStyles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className={headerStyles.cartIcon}>
          🛒 Cart {totalCartItems > 0 && (
  <span className={headerStyles.cartBadge}>({totalCartItems})</span>
)}

        </Link>
      </nav>
      <main className={layoutStyles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
