import React from 'react'

export const Footer = () => {
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '10rem',
        backgroundColor: 'var(--ruby)',
      }}
    >
      <h3
        style={{
          color: 'var(--gray-light)',
          fontSize: '1.8rem',
        }}
      >
        POKEDEX BY barbosa02058
      </h3>
    </footer>
  )
}
