import styles from "../../styles/styles.js";
const StarRating = ({ rating, reviews }) => {
  return (
    <div style={styles.rating}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          style={{
            color: i < rating ? '#fbbf24' : '#e2e8f0',
            fontSize: '16px',
          }}
        >
          ★
        </span>
      ))}
      <span style={{ marginLeft: '0.5rem', color: '#64748b', fontSize: '0.9rem' }}>
        ({reviews})
      </span>
    </div>
  );
};


export default StarRating