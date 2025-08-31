
import React, { useState } from 'react';
import styles from "../../styles/styles.js";
import SearchBar from "../../components/SearchBar/index.js";
import ProductCard from "../../components/ProductCard/index.js";
import NestedCheckbox from "../../components/NestedCheckbox/index.js";

const HomePage = () => {
  // Move products to state so we can filter them
  const [allProducts] = useState([
     {
    id: 1,
    title: "Manuka Honey UMF 24+",
    description: "Premium Manuka honey with exceptional antibacterial properties. MGO 1122+ certified from New Zealand's pristine forests.",
    price: "89.99",
    rating: 5,
    reviews: 234,
    emoji: "🍯",
    category: "manuka",
  },
  {
    id: 2,
    title: "Wild Flower Honey",
    description: "Pure wildflower honey with a delicate floral taste. Perfect for daily consumption and cooking.",
    price: "24.99",
    rating: 4,
    reviews: 156,
    emoji: "🌸",
    category: "wildflower",
  },
  {
    id: 3,
    title: "Clover Honey",
    description: "Light and mild clover honey. Ideal for tea, toast, and baking recipes.",
    price: "19.99",
    rating: 4,
    reviews: 89,
    emoji: "🍀",
    category: "clover",
  },
  {
    id: 4,
    title: "Manuka Honey UMF 15+",
    description: "High-quality Manuka honey with MGO 514+ rating. Perfect balance of potency and taste.",
    price: "49.99",
    rating: 5,
    reviews: 178,
    emoji: "🍯",
    category: "manuka",
  },
  {
    id: 5,
    title: "Forest Honey",
    description: "Rich and complex forest honey with deep amber color and robust flavor profile.",
    price: "32.99",
    rating: 4,
    reviews: 92,
    emoji: "🌲",
    category: "wildflower",
  },
  {
    id: 6,
    title: "Organic Raw Honey",
    description: "Unprocessed organic honey with natural enzymes and pollens intact.",
    price: "28.99",
    rating: 5,
    reviews: 145,
    emoji: "🌿",
    category: "organic",
  },
    {
      id: 1,
      title: "Fresh Organic Apples",
      description: "Crisp, juicy organic apples rich in fiber and vitamins. Perfect for snacking or juicing.",
      price: "4.99",
      rating: 5,
      reviews: 312,
      emoji: "🍎",
    },
    {
      id: 2,
      title: "Farm Fresh Tomatoes",
      description: "Bright red, naturally ripened tomatoes full of flavor. Great for salads, curries, and sauces.",
      price: "2.49",
      rating: 4,
      reviews: 178,
      emoji: "🍅",
    },
    {
      id: 3,
      title: "Organic Spinach",
      description: "Fresh, nutrient-rich spinach leaves packed with iron and antioxidants. Ideal for smoothies, stir-fries, and soups.",
      price: "3.49",
      rating: 5,
      reviews: 145,
      emoji: "🥬",
    },
  ]);

  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Search handler function
  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      // If search is empty, show all products
      setFilteredProducts(allProducts);
    } else {
      // Filter products based on title and description
      const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div style={styles.main}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>DataVinci</h1>
        <p style={styles.heroSubtitle}>
           Discover the finest Vegetables and Fruits from DataVinci pristine landscapes. 
          From Manuka to Wildflower, experience nature's golden treasure.
        </p>
        <button style={{
          ...styles.button,
          width: 'auto',
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          backgroundColor: '#ffffff',
          color: '#7c3aed',
          border: '2px solid #ffffff',
        }}>
          🛍️ Shop Now
        </button>
      </section>

      {/* Pass the search handler to SearchBar */}
      <SearchBar onSearch={handleSearch} />

      <section>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#1e293b',
          fontSize: '2rem',
          fontWeight: '600',
        }}>
          Featured Products
        </h2>
        
        {/* Display filtered products */}
        <div style={styles.productGrid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div style={{
              textAlign: 'center',
              gridColumn: '1 / -1',
              padding: '2rem',
              color: '#64748b',
              fontSize: '1.1rem'
            }}>
              No products found matching your search.
            </div>
          )}
        </div>
      </section>

      <NestedCheckbox />
    </div>
  );
};

export default HomePage;

















// import styles from "../../styles/styles.js";


// import SearchBar from "../../components/SearchBar/index.js";
// import ProductCard from "../../components/ProductCard/index.js";
// import NestedCheckbox from "../../components/NestedCheckbox/index.js";
// const HomePage = () => {

//   const products = [
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


//   return (
//     <div style={styles.main}>
//       <section style={styles.hero}>
//         <h1 style={styles.heroTitle}>DataVinci</h1>
//         <p style={styles.heroSubtitle}>
//           DataVinci is a data analytics and business intelligence company that helps organizations make data-driven decisions. They specialize in data engineering, visualization, and advanced analytics, providing services like dashboard development, machine learning integration, and reporting automation.
//         </p>
//         <button style={{
//           ...styles.button,
//           width: 'auto',
//           padding: '1rem 2rem',
//           fontSize: '1.1rem',
//           backgroundColor: '#ffffff',
//           color: '#7c3aed',
//           border: '2px solid #ffffff',
//         }}>
//           🛍️ Shop Now
//         </button>
//       </section>

//       <SearchBar />
    
//       <section>
//         <h2 style={{ 
//           textAlign: 'center', 
//           marginBottom: '2rem', 
//           color: '#1e293b',
//           fontSize: '2rem',
//           fontWeight: '600',
//         }}>
//           Featured Products
//         </h2>
//         <div style={styles.productGrid}>
//           {products.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       <NestedCheckbox />
//     </div>
//   );
// };

// export default HomePage