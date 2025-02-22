import { useContext } from "react"; 
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import styles from "../styles/CartPage.module.css";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0);

  if (cart.length === 0) return <h2 className={styles.emptyCart}>Your cart is empty</h2>;

  return (
    <div className={styles.cartContainer}>
      <h1>Shopping Cart</h1>
      <div className={styles.cartItems}>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image.url} alt={item.image.alt || item.title} className={styles.cartImage} />
            <div className={styles.itemDetails}>
              <h2>{item.title}</h2>
              <p>Price: ${item.discountedPrice.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <div className={styles.cartControls}>
                <button className={styles.quantityBtn} onClick={() => decreaseQuantity(item.id)}>-</button>
                <button className={styles.quantityBtn} onClick={() => increaseQuantity(item.id)}>+</button>
                <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3>Total: ${total.toFixed(2)}</h3>
      <div className={styles.checkoutActions}>
        <button className={styles.clearCartBtn} onClick={clearCart}>Clear Cart</button>
        <Link to="/checkout">
          <button className={styles.checkoutBtn}>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
