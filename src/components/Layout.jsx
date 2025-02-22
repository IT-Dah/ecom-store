import React, { useContext } from "react"; 
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Footer from "./Footer";

import layoutStyles from "../styles/Layout.module.css";
import headerStyles from "../styles/header.module.css";

const Layout = () => {
  const { cart } = useContext(CartContext);
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={layoutStyles.layoutContainer}>
      <header className={headerStyles.navbar}>
        { }
        <h1 className={headerStyles.brand}>DigiShop</h1>

        { }
        <nav className={headerStyles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart" className={headerStyles.cartIcon}>
            🛒 <span>Cart</span> {totalCartItems > 0 && (
              <span className={headerStyles.cartBadge}>({totalCartItems})</span>
            )}
          </Link>
        </nav>
      </header>

      <main className={layoutStyles.mainContent}>
        <Outlet />
      </main>

      <Footer /> { }
    </div>
  );
};

export default Layout;
