import React, { useState } from 'react';
import styles from "../../styles/styles.js";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Call the onSearch function passed from parent
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div style={styles.searchContainer}>
      <div style={styles.searchIcon}>🔍</div>
      <input
        type="text"
        placeholder="Search DataVinci products..."
        value={searchTerm}
        onChange={handleInputChange}
        style={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;










// import React, { useState, useEffect } from 'react';
// import styles from "../../styles/styles.js";



// const SearchBar = ({ onSearch,product }) => {

//  const products = [
//   {
//     id: 1,
//     title: "Fresh Organic Apples",
//     description: "Crisp, juicy organic apples rich in fiber and vitamins. Perfect for snacking or juicing.",
//     price: "4.99",
//     rating: 5,
//     reviews: 312,
//     emoji: "🍎",
//   },
//   {
//     id: 2,
//     title: "Farm Fresh Tomatoes",
//     description: "Bright red, naturally ripened tomatoes full of flavor. Great for salads, curries, and sauces.",
//     price: "2.49",
//     rating: 4,
//     reviews: 178,
//     emoji: "🍅",
//   },
//   {
//     id: 3,
//     title: "Organic Spinach",
//     description: "Fresh, nutrient-rich spinach leaves packed with iron and antioxidants. Ideal for smoothies, stir-fries, and soups.",
//     price: "3.49",
//     rating: 5,
//     reviews: 145,
//     emoji: "🥬",
//   },
// ];

//   const [searchTerm, setSearchTerm] = useState('');

//   return (
//     <div style={styles.searchContainer}>
//       <div style={styles.searchIcon}>🔍</div>
//       <input
//         type="text"
//         placeholder="Search DataVinci products..."
//         value={searchTerm}
//         onChange={(e) => {
//           setSearchTerm(e.target.value);
//           onSearch && onSearch(e.target.value);
//         }}
//         style={styles.searchInput}
//       />
//     </div>
//   );
// };


// export default SearchBar