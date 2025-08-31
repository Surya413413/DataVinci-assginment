import React, { useState, useEffect } from 'react';
import styles from "../../styles/styles.js";



const NestedCheckbox = () => {
  const [checkboxState, setCheckboxState] = useState({
    selectAll: false,
    fruits: false,
    vegetables: false,
    apple: false,
    banana: false,
    orange: false,
    carrot: false,
    broccoli: false,
    potato: false,
  });

  const [indeterminateState, setIndeterminateState] = useState({
    selectAll: false,
    fruits: false,
    vegetables: false,
  });

  const updateCheckboxState = (name, checked) => {
    let newState = { ...checkboxState };
    let newIndeterminate = { ...indeterminateState };

    if (name === 'selectAll') {
      // Select/deselect all
      Object.keys(newState).forEach(key => {
        newState[key] = checked;
      });
      // Clear all indeterminate states when selecting all
      Object.keys(newIndeterminate).forEach(key => {
        newIndeterminate[key] = false;
      });
    } else if (name === 'fruits') {
      // Update all fruits
      newState.apple = checked;
      newState.banana = checked;
      newState.orange = checked;
      newState.fruits = checked;
      newIndeterminate.fruits = false;
    } else if (name === 'vegetables') {
      // Update all vegetables
      newState.carrot = checked;
      newState.broccoli = checked;
      newState.potato = checked;
      newState.vegetables = checked;
      newIndeterminate.vegetables = false;
    } else {
      // Update individual item
      newState[name] = checked;
    }

    // Update parent categories based on children
    const fruitsArray = [newState.apple, newState.banana, newState.orange];
    const vegetablesArray = [newState.carrot, newState.broccoli, newState.potato];
    
    const allFruitsChecked = fruitsArray.every(Boolean);
    const someFruitsChecked = fruitsArray.some(Boolean);
    const allVegetablesChecked = vegetablesArray.every(Boolean);
    const someVegetablesChecked = vegetablesArray.some(Boolean);

    // Set fruits category state
    if (allFruitsChecked) {
      newState.fruits = true;
      newIndeterminate.fruits = false;
    } else if (someFruitsChecked) {
      newState.fruits = false;
      newIndeterminate.fruits = true;
    } else {
      newState.fruits = false;
      newIndeterminate.fruits = false;
    }

    // Set vegetables category state
    if (allVegetablesChecked) {
      newState.vegetables = true;
      newIndeterminate.vegetables = false;
    } else if (someVegetablesChecked) {
      newState.vegetables = false;
      newIndeterminate.vegetables = true;
    } else {
      newState.vegetables = false;
      newIndeterminate.vegetables = false;
    }

    // Update select all
    const allItemsChecked = allFruitsChecked && allVegetablesChecked;
    const someItemsChecked = someFruitsChecked || someVegetablesChecked;

    if (allItemsChecked) {
      newState.selectAll = true;
      newIndeterminate.selectAll = false;
    } else if (someItemsChecked) {
      newState.selectAll = false;
      newIndeterminate.selectAll = true;
    } else {
      newState.selectAll = false;
      newIndeterminate.selectAll = false;
    }

    setCheckboxState(newState);
    setIndeterminateState(newIndeterminate);
  };

  // Effect to handle indeterminate states
  useEffect(() => {
    const selectAllEl = document.querySelector('#selectAll');
    const fruitsEl = document.querySelector('#fruits');
    const vegetablesEl = document.querySelector('#vegetables');

    if (selectAllEl) selectAllEl.indeterminate = indeterminateState.selectAll;
    if (fruitsEl) fruitsEl.indeterminate = indeterminateState.fruits;
    if (vegetablesEl) vegetablesEl.indeterminate = indeterminateState.vegetables;
  }, [indeterminateState]);

  return (
    <div style={styles.checkboxContainer}>
      <h3 style={styles.checkboxTitle}>Food Categories Selection</h3>
      
      <div style={styles.categorySection}>
        <label style={styles.checkboxItem}>
          <input
            type="checkbox"
            id="selectAll"
            style={styles.checkboxInput}
            checked={checkboxState.selectAll}
            onChange={(e) => updateCheckboxState('selectAll', e.target.checked)}
          />
          <span style={styles.checkboxLabel}>Select All</span>
        </label>
      </div>

      <div style={styles.categorySection}>
        <label style={styles.checkboxItem}>
          <input
            type="checkbox"
            id="fruits"
            style={styles.checkboxInput}
            checked={checkboxState.fruits}
            onChange={(e) => updateCheckboxState('fruits', e.target.checked)}
          />
          <span style={styles.checkboxLabel}>🍎 Fruits</span>
        </label>
        
        <div style={styles.childSection}>
          {[
            { key: 'apple', label: '🍎 Apple', emoji: '🍎' },
            { key: 'banana', label: '🍌 Banana', emoji: '🍌' },
            { key: 'orange', label: '🍊 Orange', emoji: '🍊' }
          ].map(fruit => (
            <label key={fruit.key} style={styles.checkboxItem}>
              <input
                type="checkbox"
                style={styles.checkboxInput}
                checked={checkboxState[fruit.key]}
                onChange={(e) => updateCheckboxState(fruit.key, e.target.checked)}
              />
              <span style={styles.checkboxLabel}>{fruit.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div style={styles.categorySection}>
        <label style={styles.checkboxItem}>
          <input
            type="checkbox"
            id="vegetables"
            style={styles.checkboxInput}
            checked={checkboxState.vegetables}
            onChange={(e) => updateCheckboxState('vegetables', e.target.checked)}
          />
          <span style={styles.checkboxLabel}>🥕 Vegetables</span>
        </label>
        
        <div style={styles.childSection}>
          {[
            { key: 'carrot', label: '🥕 Carrot' },
            { key: 'broccoli', label: '🥦 Broccoli' },
            { key: 'potato', label: '🥔 Potato' }
          ].map(vegetable => (
            <label key={vegetable.key} style={styles.checkboxItem}>
              <input
                type="checkbox"
                style={styles.checkboxInput}
                checked={checkboxState[vegetable.key]}
                onChange={(e) => updateCheckboxState(vegetable.key, e.target.checked)}
              />
              <span style={styles.checkboxLabel}>{vegetable.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#f8fafc',
        borderRadius: '8px',
        fontSize: '0.9rem',
        color: '#64748b',
      }}>
        <strong>Selected items:</strong> {
          Object.entries(checkboxState)
            .filter(([key, value]) => value && !['selectAll', 'fruits', 'vegetables'].includes(key))
            .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1))
            .join(', ') || 'None'
        }
      </div>
    </div>
  );
};


export default NestedCheckbox