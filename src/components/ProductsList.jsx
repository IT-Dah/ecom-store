import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products..."); // ✅ Log the request
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        console.log("Fetched products:", data); // ✅ Log the response

        if (data && data.data) {
          setProducts(data.data);
        } else {
          console.error("Unexpected API response structure:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (products.length === 0) return <p>Loading products...</p>;

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image?.url} alt={product.image?.alt || product.title} />
          <p>Price: ${product.discountedPrice.toFixed(2)}</p>
          <Link to={`/product/${product.id}`}>View Product</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
