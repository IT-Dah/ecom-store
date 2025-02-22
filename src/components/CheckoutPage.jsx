import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/CheckoutPage.module.css";

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0);

  if (cart.length === 0) return <h2 className={styles.emptyCart}>Your cart is empty</h2>;

  const handleCheckout = () => {
    clearCart();
    navigate("/checkout-success");
  };

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.checkoutBox}>
        <h1>Checkout</h1>
        <div className={styles.checkoutItems}>
          {cart.map((item) => (
            <div key={item.id} className={styles.checkoutItem}>
              <img src={item.image.url} alt={item.title} className={styles.productImage} /> 
              <div className={styles.productDetails}>
                <h2>{item.title}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.discountedPrice.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className={styles.totalPrice}>Total: ${total.toFixed(2)}</h3>
        <button className={styles.confirmBtn} onClick={handleCheckout}>✅ Confirm Purchase</button>
        <Link to="/cart">
          <button className={styles.backToCartBtn}>🔙 Back to Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
