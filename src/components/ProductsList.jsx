import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { CartContext } from "../context/CartContext";
import styles from "../styles/ProductList.module.css";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.data);
        setFilteredProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  if (loading) return <div className={styles.loadingSpinner}></div>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <SearchBar onSearch={handleSearch} className={styles.searchBar} />
      <div className={styles.productList}>
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.image.url} alt={product.image.alt || product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.discountedPrice.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <Link to={`/product/${product.id}`}>
                <button>View Product</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsList;
