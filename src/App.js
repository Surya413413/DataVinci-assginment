
import React, { useState, useEffect } from 'react';
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage"
import ContactPage from "./pages/ContactPage"
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage/index.js';

import styles from "./styles/styles";

import "./App.css"
const App = () => {

  const [currentPage, setCurrentPage] = useState('home');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'products':
        return <ProductsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div style={styles.body}>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
      
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
        }
        
        input:focus, textarea:focus {
          border-color: #7c3aed !important;
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1) !important;
        }
        
        button:hover {
          background-color: #6d28d9 !important;
          transform: translateY(-1px);
        }
        
        .product-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem !important;
          }
          
          .hero-subtitle {
            font-size: 1rem !important;
          }
          
          .product-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default App;

