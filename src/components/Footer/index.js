import styles from "../../styles/styles";



const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>🍯 New DataVinci Co.</h4>
          <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>
            Premium DataVinci products from India pristine environment.
          </p>
        </div>
        
        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Products</h4>
          <a href="#" style={styles.footerLink}>Fresh Organic Apples</a>
          <a href="#" style={styles.footerLink}>Farm Fresh Tomatoes</a>
          <a href="#" style={styles.footerLink}>Organic Spinach</a>
        </div>
        
        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Company</h4>
          <a href="#" style={styles.footerLink}>About Us</a>
          <a href="#" style={styles.footerLink}>Contact</a>
          <a href="#" style={styles.footerLink}>Sustainability</a>
        </div>
        
        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Connect</h4>
          <a href="#" style={styles.footerLink}>Facebook</a>
          <a href="#" style={styles.footerLink}>Instagram</a>
          <a href="#" style={styles.footerLink}>Newsletter</a>
        </div>
      </div>
      
      <div style={{
        textAlign: 'center',
        paddingTop: '2rem',
        marginTop: '2rem',
        borderTop: '1px solid #374151',
        color: '#94a3b8',
      }}>
        <p>&copy; 2025 DataVinci Co. All rights reserved.</p>
      </div>
    </footer>
  );
};


export default Footer