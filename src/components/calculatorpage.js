import React from 'react';
import Calculator from './calculator';
import '../styles/calculatorpage.css';

function CalculatorPage() {
  return (
    <div className="calculator__page">
      <header className="header">Let&apos;s Do Some Math!</header>
      <Calculator />
    </div>
  );
}

export default CalculatorPage;
