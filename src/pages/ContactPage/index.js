import React, { useState, useEffect } from 'react';

import styles from "../../styles/styles.js";



const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.main}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: '600' }}>
        Contact Us
      </h1>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        padding: '3rem',
        borderRadius: '16px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e2e8f0',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</div>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
            Get in touch with us for any questions about our DataVinci products.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            style={{
              padding: '1rem',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            style={{
              padding: '1rem',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
            style={{
              padding: '1rem',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '1rem',
              resize: 'vertical',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
          />
          <button type="submit" style={styles.button}>
            ✉️ Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage