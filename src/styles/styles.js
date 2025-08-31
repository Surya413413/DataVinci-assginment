const styles = {
  // Global styles
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: '#f8fafc',
    color: '#1e293b',
    lineHeight: 1.6,
  },

  // Header styles
  header: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  
  headerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '70px',
  },

  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#7c3aed',
    textDecoration: 'none',
    cursor: 'pointer',
  },

  nav: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },

  navLink: {
    color: '#64748b',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.2s',
    cursor: 'pointer',
    padding: '0.5rem',
  },

  mobileMenuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    color: '#64748b',
    cursor: 'pointer',
  },

  mobileMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    padding: '1rem',
    flexDirection: 'column',
    gap: '1rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },

  // Main content styles
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },

  // Hero section
  hero: {
    textAlign: 'center',
    marginBottom: '3rem',
    background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    color: '#ffffff',
    padding: '4rem 2rem',
    borderRadius: '16px',
    margin: '2rem 0 3rem 0',
  },

  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    lineHeight: 1.2,
  },

  heroSubtitle: {
    fontSize: '1.2rem',
    opacity: 0.9,
    marginBottom: '2rem',
    maxWidth: '600px',
    margin: '0 auto 2rem auto',
  },

  // Product section
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  },

  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  },

  productCardHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
  },

  productImage: {
    width: '100%',
    height: '200px',
    backgroundColor: '#f1f5f9',
    borderRadius: '8px',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#94a3b8',
    fontSize: '4rem',
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
  },

  productTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#1e293b',
  },

  productDescription: {
    color: '#64748b',
    marginBottom: '1rem',
    fontSize: '0.9rem',
  },

  productMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },

  price: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#7c3aed',
  },

  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    color: '#fbbf24',
  },

  button: {
    backgroundColor: '#7c3aed',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.75rem 1.5rem',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Checkbox component styles
  checkboxContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    marginTop: '2rem',
  },

  checkboxTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: '#1e293b',
  },

  checkboxItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.5rem 0',
    cursor: 'pointer',
  },

  checkboxInput: {
    width: '18px',
    height: '18px',
    accentColor: '#7c3aed',
    cursor: 'pointer',
  },

  checkboxLabel: {
    fontSize: '1rem',
    cursor: 'pointer',
    userSelect: 'none',
  },

  categorySection: {
    marginLeft: '0',
    marginBottom: '1rem',
  },

  childSection: {
    marginLeft: '2rem',
    borderLeft: '2px solid #e2e8f0',
    paddingLeft: '1rem',
  },

  // Navigation styles
  navContainer: {
    padding: '1rem 0',
    borderBottom: '1px solid #e2e8f0',
    marginBottom: '2rem',
  },

  navTabs: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },

  navTab: {
    padding: '0.75rem 1.5rem',
    backgroundColor: 'transparent',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontSize: '0.9rem',
    fontWeight: '500',
  },

  navTabActive: {
    backgroundColor: '#7c3aed',
    color: '#ffffff',
    borderColor: '#7c3aed',
  },

  // Search bar styles
  searchContainer: {
    position: 'relative',
    marginBottom: '2rem',
    maxWidth: '400px',
    margin: '0 auto 2rem auto',
  },

  searchInput: {
    width: '100%',
    padding: '0.75rem 1rem 0.75rem 3rem',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  },

  searchIcon: {
    position: 'absolute',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94a3b8',
  },

  // Footer styles
  footer: {
    backgroundColor: '#1e293b',
    color: '#ffffff',
    padding: '3rem 1rem 1rem 1rem',
    marginTop: '4rem',
  },

  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },

  footerSection: {
    marginBottom: '1rem',
  },

  footerTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#ffffff',
  },

  footerLink: {
    color: '#94a3b8',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '0.5rem',
    transition: 'color 0.2s',
  },

  // Responsive breakpoints
  mobileBreakpoint: '768px',
  tabletBreakpoint: '1024px',
};

export default styles;