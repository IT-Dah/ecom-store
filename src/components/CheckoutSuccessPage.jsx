import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CheckoutSuccessPage.module.css";

const CheckoutSuccessPage = () => {
  useEffect(() => {
    document.title = "Thank You | DigiShop";
  }, []);

  return (
    <div className={styles.successContainer}>
      <div className={styles.successContent}>
        <span className={styles.checkmark}>✔</span>
        <h1>Thank You for Your Purchase!</h1>
        <p>Your order has been placed successfully.</p>
        <Link to="/">
          <button className={styles.returnBtn}>Back to Store</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
