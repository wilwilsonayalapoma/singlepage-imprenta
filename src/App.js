import React from "react";
import Header from "./components/Header";
import ProductsCarousel from "./components/ProductsCarousel";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <section id="inicio" className="hero">
          <div className="container">
            <h1>Imprenta Nuevo Mundo</h1>
            <p>Soluciones de impresión profesionales — calidad y rapidez.</p>
            <a
              href="https://wa.me/51999888777?text=Hola%20Imprenta%20Nuevo%20Mundo%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <span className="whatsapp-icon">💬</span> Contáctanos por WhatsApp
            </a>
          </div>
        </section>

        <section id="nosotros" className="section">
          <div className="container">
            <h2>Nosotros</h2>
            <p>
              Somos una imprenta con más de 10 años de experiencia ofreciendo
              servicios de impresión offset y digital para empresas y
              particulares.
            </p>
          </div>
        </section>

        <section id="productos" className="section">
          <div className="container">
            <h2>Productos</h2>
            <ProductsCarousel />
          </div>
        </section>

        <section id="clientes" className="section">
          <div className="container">
            <h2>Clientes</h2>
            <p>Algunas empresas que confían en nosotros.</p>
            <div className="clients-grid">
              <div className="client-logo">
                <img
                  src="https://logo.clearbit.com/coca-cola.com"
                  alt="Coca-Cola"
                />
              </div>
              <div className="client-logo">
                <img src="https://logo.clearbit.com/adidas.com" alt="Adidas" />
              </div>
              <div className="client-logo">
                <img
                  src="https://logo.clearbit.com/samsung.com"
                  alt="Samsung"
                />
              </div>
              <div className="client-logo">
                <img
                  src="https://logo.clearbit.com/microsoft.com"
                  alt="Microsoft"
                />
              </div>
              <div className="client-logo">
                <img src="https://logo.clearbit.com/nike.com" alt="Nike" />
              </div>
              <div className="client-logo">
                <img src="https://logo.clearbit.com/amazon.com" alt="Amazon" />
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="section">
          <div className="container">
            <h2>Contacto</h2>
            <div className="contact-grid">
              <div className="contact-card">
                <p className="contact-intro">
                  Estamos listos para ayudarte con tu próximo proyecto.
                </p>
                <ul className="contact-list">
                  <li className="contact-item">
                    <span className="contact-icon" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path d="M12 2a7 7 0 0 0-7 7c0 4.8 7 13 7 13s7-8.2 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                      </svg>
                    </span>
                    <div>
                      <strong>Dirección</strong>
                      <p>C. Loayza, C. Bueno, #1850, Centro, La Paz</p>
                    </div>
                  </li>
                  <li className="contact-item">
                    <span className="contact-icon" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path d="M6.6 10.2a15.3 15.3 0 0 0 7.2 7.2l2.4-2.4a1 1 0 0 1 1-.2 11.5 11.5 0 0 0 3.6.6 1 1 0 0 1 1 1v3.8a1 1 0 0 1-1 1A19 19 0 0 1 3 4a1 1 0 0 1 1-1h3.8a1 1 0 0 1 1 1 11.5 11.5 0 0 0 .6 3.6 1 1 0 0 1-.2 1Z" />
                      </svg>
                    </span>
                    <div>
                      <strong>Teléfonos</strong>
                      <p>+591 76250512 · (591) 76251133 </p>
                    </div>
                  </li>
                  <li className="contact-item">
                    <span className="contact-icon" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 3.2 8 5.3 8-5.3" />
                      </svg>
                    </span>
                    <div>
                      <strong>Correo</strong>
                      <p>
                        <a href="mailto:info@imprentanuevomundo.com">
                          info@imprentanuevomundo.com
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="contact-item">
                    <span className="contact-icon" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path d="M12 6a1 1 0 0 1 1 1v4.2l2.9 1.7a1 1 0 1 1-1 1.8l-3.4-2A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1Zm0-4a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
                      </svg>
                    </span>
                    <div>
                      <strong>Horario</strong>
                      <p>Lun - Sáb: 9:00 - 19:00</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="map-embed" aria-label="Mapa de ubicación">
                <iframe
                  title="Mapa Imprenta Nuevo Mundo"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d239.09758788552966!2d-68.13095054865062!3d-16.497731513573555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sbo!4v1771776042459!5m2!1ses!2sbo"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <a
        href="https://wa.me/59173241949?text=Hola%20Imprenta%20Nuevo%20Mundo%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contáctanos por WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
          <path
            fill="currentColor"
            d="M19.1 17.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7 0-.3-.2-1.3-.5-2.4-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.3c.2.2 2.3 3.5 5.5 4.9.8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.2-.3-.3-.6-.5M16 3C9.4 3 4 8.4 4 15c0 2.3.6 4.5 1.8 6.4L4 29l7.8-1.8c1.8 1 3.9 1.6 6.2 1.6 6.6 0 12-5.4 12-12S22.6 3 16 3m0 21.7c-2 0-3.9-.5-5.5-1.4l-.4-.2-4.6 1.1 1.2-4.5-.3-.4c-1.1-1.7-1.7-3.7-1.7-5.8 0-5.8 4.7-10.5 10.5-10.5S26.5 9.2 26.5 15 21.8 24.7 16 24.7"
          />
        </svg>
      </a>
    </div>
  );
}
