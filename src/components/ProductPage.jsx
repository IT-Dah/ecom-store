import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import styles from "../styles/ProductPage.module.css";

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        const result = await response.json();
        setProduct(result.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className={styles.productContainer}>
      {product.image && (
        <img src={product.image.url} alt={product.image.alt || product.title} />
      )}
      <div className={styles.productDetails}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.discountedPrice.toFixed(2)}</p>
        <button className={styles.addToCartBtn} onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;