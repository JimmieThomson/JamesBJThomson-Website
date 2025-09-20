import React, { useState, useEffect } from 'react';

// Simple fallback component that looks like a lanyard
const SimpleLanyard = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '20px'
    }}>
      {/* Lanyard String */}
      <div style={{
        width: '4px',
        height: '150px',
        background: 'linear-gradient(180deg, var(--color-accent) 0%, var(--color-success) 100%)',
        borderRadius: '2px',
        marginBottom: '10px'
      }}></div>
      
      {/* Card */}
      <div 
        className="simple-lanyard-card"
        style={{
          width: '80px',
          height: '120px',
          background: 'var(--color-bg-tertiary)',
          border: '2px solid var(--color-border)',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          animation: 'gentle-sway 3s ease-in-out infinite'
        }}>
        <div style={{
          color: 'var(--color-text-secondary)',
          fontSize: '12px',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          JT
        </div>
        <div style={{
          color: 'var(--color-text-tertiary)',
          fontSize: '8px',
          marginTop: '4px'
        }}>
          Developer
        </div>
      </div>

    </div>
  );
};

export default SimpleLanyard;