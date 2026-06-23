"use client";

import { useEffect, useRef } from 'react';

export default function HeroCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const slides = carouselRef.current.querySelectorAll('.carousel-item');
        const activeSlide = carouselRef.current.querySelector('.carousel-item.active') || slides[0];
        let nextSlide = activeSlide.nextElementSibling || slides[0];
        
        nextSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        
        slides.forEach(s => s.classList.remove('active'));
        nextSlide.classList.add('active');
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-4 py-4">
 <div 
  ref={carouselRef} 
  className="carousel w-full rounded-2xl shadow-xl overflow-hidden aspect-[16/9] md:aspect-[3/1]" 
>
  {/* Slide 1 */}
  <div 
    id="slide-1" 
    className="carousel-item relative w-full h-full"
    style={{ 
      backgroundImage: `url('Images/Herous/Slide-1.jpeg')`,
      backgroundSize: '100% 100%', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  ></div>
  
  {/* Slide 2 */}
  <div 
    id="slide-2" 
    className="carousel-item relative w-full h-full"
    style={{ 
      backgroundImage: `url('Images/Herous/Slide-2.jpeg')`,
      backgroundSize: '100% 100%', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  ></div>
  
  {/* Slide 3 */}
  <div 
    id="slide-3" 
    className="carousel-item relative w-full h-full"
    style={{ 
      backgroundImage: `url('Images/Herous/Slide-3.jpeg')`,
      backgroundSize: '100% 100%', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  ></div>
</div>
    </section>
  );
}