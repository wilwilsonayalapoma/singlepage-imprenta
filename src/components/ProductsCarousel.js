import React, { useEffect, useState, useRef } from 'react';

const images = [
  // Placeholder images - replace with your own images in /public or imported assets
  'https://via.placeholder.com/900x420?text=Producto+1',
  'https://via.placeholder.com/900x420?text=Producto+2',
  'https://via.placeholder.com/900x420?text=Producto+3',
];

export default function ProductsCarousel() {
  const [index, setIndex] = useState(0);
  const delay = 4000; // 4s per slide
  const timerRef = useRef(null);

  useEffect(() => {
    // autoplay right-to-left (we increase index to move forward)
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, delay);

    return () => clearInterval(timerRef.current);
  }, []);

  function goTo(i) {
    setIndex(i % images.length);
    clearInterval(timerRef.current);
  }

  return (
    <div className="carousel" aria-roledescription="carousel">
      <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <div className="carousel-item" key={i}>
            <img src={src} alt={`Producto ${i + 1}`} />
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
