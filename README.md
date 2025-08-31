# 🍯 DataVinci Assignment - DataVinci Honey Co.

A responsive React application showcasing premium honey products with advanced nested checkbox functionality.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Component Details](#component-details)
- [Responsive Design](#responsive-design)
- [Testing](#testing)
- [Assignment Tasks](#assignment-tasks)
- [Demo Video](#demo-video)
- [Contributing](#contributing)

## 🎯 Project Overview

This project is a complete implementation of the DataVinci assignment requirements, featuring:

1. **Responsive UI/UX Design** - Desktop and mobile layouts based on Figma specifications
2. **Advanced Nested Checkbox Logic** - Multi-level selection with proper state management
3. **Modern React Architecture** - Component-based structure with separation of concerns

## ✨ Features

### 🎨 UI/UX Features
- ✅ Pixel-perfect responsive design (Desktop: >1024px, Mobile: <768px)
- ✅ Mobile-first approach with hamburger navigation
- ✅ Modern glassmorphism and gradient design elements
- ✅ Smooth animations and hover effects
- ✅ Accessibility compliance (WCAG guidelines)

### 🔧 Functional Features
- ✅ Multi-page navigation (Home, Products, About, Contact)
- ✅ Product showcase with ratings and cart functionality
- ✅ Advanced search functionality
- ✅ Contact form with validation
- ✅ Nested checkbox component with perfect logic

### 📱 Responsive Features
- ✅ Collapsible navigation for mobile
- ✅ Adaptive grid layouts
- ✅ Touch-friendly interface elements
- ✅ Optimized typography scaling

## 🛠 Tech Stack

```json
{
  "dependencies": {
    "@testing-library/jest-dom": "5.11.9",
    "@testing-library/react": "11.2.5",
    "@testing-library/user-event": "12.6.2",
    "chalk": "4.1.0",
    "history": "5.0.0",
    "msw": "0.28.1",
    "js-cookie": "2.2.1",
    "react": "17.0.1",
    "react-dom": "17.0.1",
    "react-icons": "4.2.0",
    "react-loader-spinner": "4.0.0",
    "react-router-dom": "5.2.0"
  }
}
```

## 📁 Project Structure

```
src/
├── App.js                    # Main application component
├── index.js                  # Application entry point
├── components/               # Reusable components
│   ├── Header.js            # Navigation header
│   ├── NestedCheckbox.js    # Advanced checkbox logic
│   ├── ProductCard.js       # Product display component
│   ├── SearchBar.js         # Search functionality
│   └── Footer.js            # Footer component
├── pages/                   # Page components
│   ├── HomePage.js          # Landing page
│   ├── ProductsPage.js      # Products catalog
│   ├── AboutPage.js         # Company information
│   └── ContactPage.js       # Contact form
├── styles/                  # CSS modules
│   ├── global.css           # Global styles
│   ├── Header.css           # Header styling
│   ├── NestedCheckbox.css   # Checkbox styling
│   ├── ProductCard.css      # Product card styling
│   └── pages.css            # Page-specific styles
├── data/                    # Static data
│   └── products.js          # Product data
└── tests/                   # Test files
    ├── App.test.js
    ├── NestedCheckbox.test.js
    └── components/
        └── Header.test.js
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Surya413413/DataVinci-assginment
   cd datavinci-honey-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Run tests**
   ```bash
   npm test
   # or
   yarn test
   ```

## 🧩 Component Details

### 📦 NestedCheckbox Component

The core component implementing advanced checkbox logic:

**Key Features:**
- **Select All**: Controls all categories and items
- **Parent Categories**: Controls all child items within category
- **Individual Items**: Updates parent state automatically
- **Indeterminate States**: Shows partial selections visually

**Usage:**
```javascript
import NestedCheckbox from '../components/NestedCheckbox';

<NestedCheckbox />
```

## 🧪 Testing

### Test Coverage
- **Unit Tests**: Component functionality
- **Integration Tests**: User interactions
- **Responsive Tests**: Breakpoint behavior

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```



## 📋 Assignment Tasks

### ✅ Task 1: Responsive Layout Implementation

**Completed Features:**
- [x] Figma design analysis and implementation
- [x] Mobile-first responsive approach
- [x] Breakpoint management (>1024px desktop, <768px mobile)
- [x] Collapsible navigation with hamburger menu
- [x] Multi-column to single-column layout adaptation
- [x] Accessibility compliance (WCAG guidelines)
- [x] Cross-browser testing compatibility




**Test Scenarios:**
- [x] Select "Select All" → Every checkbox checked
- [x] Deselect "Select All" → Every checkbox unchecked
- [x] Select "Fruits" → All fruits selected
- [x] Unselect "Fruits" → All fruits deselected
- [x] Select some fruits → "Fruits" shows indeterminate state
- [x] Select all fruits individually → "Fruits" becomes checked
- [x] Mixed selections → "Select All" shows indeterminate state








## 🏗 Architecture Decisions

### Component Architecture
- **Atomic Design**: Small, reusable components
- **Separation of Concerns**: Logic, styling, and data separated
- **Single Responsibility**: Each component has one primary purpose

### State Management
- **Local State**: Using React hooks for component-specific state
- **Prop Drilling**: Minimal and controlled for page navigation
- **Immutable Updates**: Spread operators for state updates

### CSS Architecture
- **CSS Modules**: Separate CSS files for each component
- **BEM Methodology**: Block, Element, Modifier naming
- **Mobile-First**: Progressive enhancement approach

## 📱 Responsive Design Features

### Mobile Optimizations
- **Touch-friendly**: 44px minimum touch targets
- **Readable text**: 16px minimum font size
- **Optimized spacing**: Adequate padding for finger navigation
- **Fast loading**: Optimized images and minimal dependencies

### Desktop Enhancements
- **Hover effects**: Interactive feedback
- **Multi-column layouts**: Efficient space usage
- **Keyboard navigation**: Full accessibility support



### Testing the Checkbox Logic

1. **Select All Test:**
   - Click "Select All"
   - Verify: All items are checked
   - Click "Select All" again
   - Verify: All items are unchecked

2. **Parent Category Test:**
   - Click "Fruits"
   - Verify: Apple, Banana, Orange are all checked
   - Click "Fruits" again
   - Verify: All fruits are unchecked

3. **Indeterminate Test:**
   - Click only "Apple" and "Banana"
   - Verify: "Fruits" shows indeterminate state (dash/mixed)
   - Verify: "Select All" shows indeterminate state

4. **Child to Parent Test:**
   - Manually check Apple, Banana, Orange individually
   - Verify: "Fruits" becomes fully checked
   - Verify: If all items are selected, "Select All" becomes checked



## 🔍 Code Quality Features

### Performance Optimizations
- **React.memo**: Prevent unnecessary re-renders
- **useCallback**: Optimize event handlers
- **Lazy loading**: Code splitting for pages
- **Debounced search**: Efficient search implementation

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy
- **ARIA labels**: Screen reader support
- **Keyboard navigation**: Tab order and focus management
- **Color contrast**: WCAG AA compliance
- **Focus indicators**: Visible focus states

### Code Standards
- **ESLint**: Code quality enforcement
- **Prettier**: Consistent formatting
- **PropTypes**: Type checking for props
- **JSDoc**: Component documentation





## 🎯 Assignment Completion Checklist

### Task 1: Responsive Layout ✅
- [x] Figma design implemented for Desktop and Mobile
- [x] Mobile-first responsive approach
- [x] Hamburger navigation for mobile
- [x] Grid layout adaptation
- [x] Typography scaling
- [x] Touch-friendly interface
- [x] Cross-browser compatibility tested

### Task 2: Nested Checkbox ✅
- [x] Select All functionality working
- [x] Parent category logic implemented
- [x] Child item logic implemented
- [x] Indeterminate states working
- [x] State propagation (up and down)
- [x] Real-time selection summary
- [x] All test scenarios passing



## 🚀 Future Enhancements

### Potential Improvements
1. **Performance**: Virtual scrolling for large product lists
2. **State Management**: Redux for complex state
3. **Testing**: E2E tests with Cypress
4. **PWA**: Service worker for offline capability
5. **Animations**: Framer Motion for advanced animations
6. **TypeScript**: Type safety implementation


## 📞 Support & Contact

For any questions or issues:

- **Documentation**: Check inline code comments
- **Issues**: Create GitHub issues for bugs

## 📄 License

This project is created for the DataVinci assignment and is available under the MIT License.

---

**Built with ❤️ by [suresh] for DataVinci Assignment**

> *Demonstrating modern React development practices, responsive design principles, and advanced state management techniques.*
