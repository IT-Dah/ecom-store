import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  return (
    <div>
      <h1>Thank You for Your Purchase!</h1>
      <p>Your order has been placed successfully.</p>
      <Link to="/">
        <button>Back to Store</button>
      </Link>
    </div>
  );
};

export default CheckoutSuccessPage;
