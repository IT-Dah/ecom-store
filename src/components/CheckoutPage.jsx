import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0);

  if (cart.length === 0) return <h2>Your cart is empty</h2>;

  const handleCheckout = () => {
    clearCart(); // Clear the cart after successful checkout
    navigate("/checkout-success");
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.discountedPrice.toFixed(2)}</p>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={handleCheckout}>Confirm Purchase</button>
      <Link to="/cart">
        <button>Back to Cart</button>
      </Link>
    </div>
  );
};

export default CheckoutPage;
