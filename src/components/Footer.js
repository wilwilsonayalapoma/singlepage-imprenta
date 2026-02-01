import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-info">
          <p><strong>Imprenta Nuevo Mundo</strong></p>
          <p>Dirección: Calle Falsa 123, Ciudad</p>
          <p>Correo: <a href="mailto:info@imprentanuevomundo.com">info@imprentanuevomundo.com</a></p>
        </div>

        <div className="footer-copy">
          <p>© {new Date().getFullYear()} Imprenta Nuevo Mundo. Todos los derechos reservados.</p>
        </div>

        <div className="footer-logo">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="24" height="24" rx="4" fill="#1f6feb" />
            <text x="50%" y="55%" fontSize="10" fill="#fff" textAnchor="middle" fontFamily="Arial">INM</text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
