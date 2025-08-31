import React, { useState, useEffect } from 'react';
import styles from "../../styles/styles.js";

import StarRating from '../StarRating/index.js';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.productCard,
        ...(isHovered ? styles.productCardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.productImage}>
        {product.emoji}
      </div>
      <h3 style={styles.productTitle}>{product.title}</h3>
      <p style={styles.productDescription}>{product.description}</p>
      
      <div style={styles.productMeta}>
        <span style={styles.price}>${product.price}</span>
        <StarRating rating={product.rating} reviews={product.reviews} />
      </div>
      
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button style={{ ...styles.button, flex: 1 }}>
          🛒 Add to Cart
        </button>
        <button style={{
          ...styles.button,
          backgroundColor: 'transparent',
          color: '#7c3aed',
          border: '1px solid #7c3aed',
          width: '48px',
          padding: '0.75rem',
        }}>
          ❤️
        </button>
      </div>
    </div>
  );
};

export default ProductCard