import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Footer from "./Footer";

import layoutStyles from "../styles/Layout.module.css";
import headerStyles from "../styles/header.module.css";

const Layout = () => {
  const { cart } = useContext(CartContext);

  // ✅ Calculate total items in cart
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={layoutStyles.layoutContainer}>
      <nav className={headerStyles.navbar}>
        {/* ✅ DigiShop Branding */}
        <h1 className={headerStyles.brand}>DigiShop</h1>
        
        <div className={headerStyles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart" className={headerStyles.cartIcon}>
            🛒 Cart {totalCartItems > 0 && (
              <span className={headerStyles.cartBadge}>({totalCartItems})</span>
            )}
          </Link>
        </div>
      </nav>
      
      <main className={layoutStyles.mainContent}>
        <Outlet />
      </main>

      <Footer /> {/* ✅ Add Footer Here */}
    </div>
  );
};

export default Layout;
