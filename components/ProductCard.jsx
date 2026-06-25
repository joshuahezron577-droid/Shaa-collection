"use client";
import Image from 'next/image';
import { useCart } from '@/store/useCart';
import { toast } from 'react-hot-toast'; // Import toast
import { FaStar } from 'react-icons/fa'; // Import star icon

export default function ProductCard({ id, title, price, category, image, description }) {
  const addToCart = useCart((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({ id, title, price, image, category });
    
    // Toast notification badala ya kufungua Modal
    toast.success(`${title} imeongezwa kwenye cart!`, {
      style: { background: '#172554', color: '#fff' }, // Blue-950 color
    });
  };

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Picha */}
      <div className="overflow-hidden rounded-xl mb-3 relative h-[250px] w-full">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      
      <div className="flex-1 px-1">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{category}</span>
        
        {/* Rating Stars - Urembo wa kitaalamu */}
        <div className="flex gap-0.5 mt-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-[10px]" />
          ))}
        </div>

        <h3 className="font-bold text-gray-900 text-sm mt-1 line-clamp-2">{title}</h3>
        <p className="text-blue-600 font-black text-lg mt-1">{price}</p>
        
        {description && (
          <p className="text-gray-600 text-xs mt-2 line-clamp-2">{description}</p>
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