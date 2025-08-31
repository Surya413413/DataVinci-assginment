import React, { useState, useEffect } from 'react';
import styles from "../../styles/styles";



const Header = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    // { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        <div 
          style={styles.logo}
          onClick={() => {
            setCurrentPage('home');
            setIsMobileMenuOpen(false);
          }}
        >
        DataVinci
        </div>
        
        <nav 
          style={{
            ...styles.nav,
            display: window.innerWidth <= 768 ? 'none' : 'flex',
          }}
          className="desktop-nav"
        >
          {navItems.map(item => (
            <span
              key={item.id}
              style={{
                ...styles.navLink,
                color: currentPage === item.id ? '#7c3aed' : '#64748b',
                fontWeight: currentPage === item.id ? '600' : '500',
              }}
              onClick={() => setCurrentPage(item.id)}
            >
              {item.label}
            </span>
          ))}
          {/* <button style={{
            ...styles.button,
            width: 'auto',
            padding: '0.5rem 1rem',
            fontSize: '0.8rem',
          }}>
            👤 Login
          </button> */}
        </nav>

        <button
          style={{
            ...styles.mobileMenuButton,
            display: window.innerWidth <= 768 ? 'block' : 'none',
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div style={{
          ...styles.mobileMenu,
          display: 'flex',
        }}>
          {navItems.map(item => (
            <span
              key={item.id}
              style={{
                ...styles.navLink,
                color: currentPage === item.id ? '#7c3aed' : '#64748b',
              }}
              onClick={() => {
                setCurrentPage(item.id);
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
            </span>
          ))}
          {/* <button style={styles.button}>👤 Login</button> */}
        </div>
      )}
    </header>
  );
};

export default Header