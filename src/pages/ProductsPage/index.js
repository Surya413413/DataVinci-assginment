import React, { useState, useEffect } from 'react';

import NestedCheckbox from "../../components/NestedCheckbox";

import styles from "../../styles/styles.js";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'manuka', label: 'Manuka Honey' },
    { id: 'wildflower', label: 'Wildflower' },
    { id: 'clover', label: 'Clover' },
  ];

  return (
    <div style={styles.main}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: '600' }}>
        Our Product Range
      </h1>
      
      <SearchBar />

      <div style={styles.navContainer}>
        <div style={styles.navTabs}>
          {categories.map(category => (
            <button
              key={category.id}
              style={{
                ...styles.navTab,
                ...(selectedCategory === category.id ? styles.navTabActive : {}),
              }}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <NestedCheckbox />
    </div>
  );
};

export default ProductsPage