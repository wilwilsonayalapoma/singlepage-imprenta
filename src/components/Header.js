import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo"> 
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="logo-svg">
            <rect width="24" height="24" rx="4" className="logo-rect" />
            <text x="50%" y="55%" fontSize="10" className="logo-text" textAnchor="middle" fontFamily="Arial">INM</text>
          </svg>
          <span className="brand">Imprenta Nuevo Mundo</span>
        </div>

        <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
          <a href="#nosotros" onClick={() => setOpen(false)}>Nosotros</a>
          <a href="#productos" onClick={() => setOpen(false)}>Productos</a>
          <a href="#clientes" onClick={() => setOpen(false)}>Clientes</a>
          <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        </nav>

        <div className="header-controls">
          <ThemeToggle />
          <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            <span className="hamburger" />
          </button>
        </div>
      </div>
    </header>
  );
}
