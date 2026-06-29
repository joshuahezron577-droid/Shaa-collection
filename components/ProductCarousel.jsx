"use client";
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/store/useCart';
import { toast } from 'react-hot-toast';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function getStarData(id) {
  const ratings = [4, 5, 3, 4, 5, 4, 3, 5];
  const reviews = [87, 213, 45, 127, 302, 64, 19, 511];
  return {
    filled: ratings[id % ratings.length],
    reviews: reviews[id % reviews.length],
  };
}

function CarouselCard({ product }) {
  const addToCart = useCart((state) => state.addToCart);
  const { filled, reviews } = getStarData(product.id);

  const handleAddToCart = () => {
    addToCart({ id: product.id, title: product.title, price: product.price, image: product.image, category: product.category });
    toast.success(`${product.title} imeongezwa kwenye cart!`, {
      style: { background: '#172554', color: '#fff' },
    });
  };

  return (
    <div className="carousel-item w-56 md:w-64">
      <div className="bg-white border border-gray-200 rounded-md shadow-sm w-full flex flex-col overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

        {/* Image with hover zoom */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-xs font-semibold">Hakuna Picha</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3 flex flex-col flex-1">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug mb-1">
            {product.title}
          </h3>

          {/* Stars */}
          <div className="flex items-center gap-1 mb-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) =>
                i <= filled
                  ? <AiFillStar key={i} className="text-yellow-400" size={13} />
                  : <AiOutlineStar key={i} className="text-yellow-400" size={13} />
              )}
            </div>
            <span className="text-xs text-blue-600 font-semibold">{reviews}</span>
          </div>

          <p className="text-base font-black text-gray-900 mb-3">{product.price}</p>

          <div className="mt-auto">
            <button
              onClick={handleAddToCart}
              className="w-full font-bold text-sm px-4 py-2 rounded-md transition-all duration-200 active:scale-95 bg-blue-950 hover:bg-blue-950 text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProductCarousel = ({ products }) => {
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction) => {
    const container = document.getElementById('carousel-container');
    const scrollAmount = 300;
    if (direction === 'left') container.scrollLeft -= scrollAmount;
    else container.scrollLeft += scrollAmount;
  };

  return (
    <div
      className="mt-4 mb-2 px-4 relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1 h-6 bg-blue-950 rounded-full inline-block" />
        <h2 className="text-xl font-black text-gray-900 tracking-tight">New Arrivals</h2>
      </div>

      <div className="relative w-full">
        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 top-[37.5%] -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-blue-950 hover:bg-yellow-400 hover:text-blue-950 text-white shadow-xl flex items-center justify-center transition-all duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          ❮
        </button>

        <div
          id="carousel-container"
          className="carousel carousel-center w-full space-x-4 rounded-box p-2 scroll-smooth"
        >
          {products.map((product) => (
            <CarouselCard key={product.id} product={product} />
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 top-[37.5%] -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-blue-950 hover:bg-yellow-400 hover:text-blue-950 text-white shadow-xl flex items-center justify-center transition-all duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
