import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0);

  if (cart.length === 0) return <h2>Your cart is empty</h2>;

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Price: ${item.discountedPrice.toFixed(2)}</p>
          <p>Quantity: {item.quantity}</p>
          <div className="cartControls">
  <button className="quantityBtn" onClick={() => decreaseQuantity(item.id)}>-</button>
  <button className="quantityBtn" onClick={() => increaseQuantity(item.id)}>+</button>
  <button className="removeBtn" onClick={() => removeFromCart(item.id)}>Remove</button>
</div>

        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={clearCart}>Clear Cart</button>
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default CartPage;
