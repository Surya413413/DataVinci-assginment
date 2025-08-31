import styles from "../../styles/styles";


const AboutPage = () => {
  return (
    <div style={styles.main}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: '600' }}>
        About DataVinci Honey Co.
      </h1>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        padding: '3rem',
        borderRadius: '16px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e2e8f0',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🐝</div>
        </div>
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: 1.8, 
          color: '#64748b',
          marginBottom: '1.5rem',
        }}>
         DataVinci Vegetables and Fruits Co. has been producing premium honey for over 50 years. 
          Our commitment to quality and sustainability ensures that every jar contains 
          the purest, most nutritious honey nature has to offer.
        </p>
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: 1.8, 
          color: '#64748b',
        }}>
       From the remote hills where we gather unique monofloral Manuka honey to our 
          local partnerships with sustainable beekeepers, we're dedicated to bringing 
          you authentic New Zealand honey with uncompromising quality. 
        </p>
      </div>
    </div>
  );
};

export default AboutPage