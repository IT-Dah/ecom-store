import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Footer from "./Footer";

import layoutStyles from "../styles/Layout.module.css";
import headerStyles from "../styles/header.module.css";

const Layout = () => {
  const { cart } = useContext(CartContext);
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  const badgeRef = useRef();
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    if (badgeRef.current) {
      badgeRef.current.classList.remove(headerStyles.pop);
      void badgeRef.current.offsetWidth;
      badgeRef.current.classList.add(headerStyles.pop);
    }
  }, [totalCartItems]);

  return (
    <div className={layoutStyles.layoutContainer}>
      <header className={headerStyles.navbar}>
        <h1 className={headerStyles.brand}>DigiShop</h1>
        <nav className={headerStyles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart" className={headerStyles.cartIcon}>
            🛒 <span>Cart</span>
            {totalCartItems > 0 && (
              <span
                ref={badgeRef}
                className={`${headerStyles.cartBadge} ${headerStyles.pop}`}
                aria-label={`Cart: ${totalCartItems} item${totalCartItems > 1 ? "s" : ""}`}
              >
                ({totalCartItems})
              </span>
            )}
          </Link>
          {/* Dark mode toggle */}
          <button
            style={{
              marginLeft: "1rem",
              fontSize: "1.2rem",
              background: "none",
              border: "none",
              color: "var(--color-text)",
              cursor: "pointer",
            }}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setDarkMode((v) => !v)}
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </nav>
      </header>
      <main className={layoutStyles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
