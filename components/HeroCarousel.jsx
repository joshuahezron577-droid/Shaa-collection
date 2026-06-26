"use client";

import { useEffect, useState } from 'react';

const slides = [
  { id: 1, src: '/Images/Herous/Slide-1.png' },
  { id: 2, src: '/Images/Herous/Slide-2.png' },
  { id: 3, src: '/Images/Herous/Slide-3.png' },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Badilisha slide bila kusababisha page scroll
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden aspect-[16/9] md:aspect-[3/1] relative" style={{ margin: 0, padding: 0, display: 'block', lineHeight: 0 }}>
      {/* Slides container — inahamia kwa CSS transform tu */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full shrink-0"
            style={{
              backgroundImage: `url('${slide.src}')`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-5' : 'bg-white/50'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
