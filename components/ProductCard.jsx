"use client";
import Image from 'next/image';
import { useCart } from '@/store/useCart';

export default function ProductCard({ id, title, price, category, image, description }) {
  // Tunachukua addToCart kutoka kwenye store
  // Hii itafanya modal ifunguke kiotomatiki kwa sababu ya logic tuliyoweka kwenye store
  const addToCart = useCart((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({ id, title, price, image, category });
  };

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Picha yenye zoom effect */}
      <div className="overflow-hidden rounded-xl mb-3 relative h-[250px] w-full">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      
      {/* Maelezo ya bidhaa */}
      <div className="flex-1 px-1">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {category}
        </span>
        <h3 className="font-bold text-gray-900 text-sm mt-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-blue-600 font-black text-lg mt-1">
          {price}
        </p>
        {description && (
          <p className="text-gray-600 text-xs mt-2 line-clamp-2">
            {description}
          </p>
        )}
      </div>

      <button 
        onClick={handleAddToCart}
        className="w-full mt-4 bg-blue-950 text-white py-2.5 rounded-xl font-bold hover:bg-blue-800 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}