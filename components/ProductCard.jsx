"use client";
import Image from 'next/image';
import { useCart } from '@/store/useCart';
import { toast } from 'react-hot-toast';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { motion } from 'framer-motion'; // Imeongezwa

 const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 40,   // Hii namba ndogo inafanya animation isiwe ya haraka (sluggish/smooth)
      damping: 15,     // Hii inazuia animation isicheze-cheze (bouncing) sana
      mass: 1          // Inafanya kadi ionekane "nzito" kidogo
    } 
  },
};

// Toa rating tofauti kwa kila product kulingana na id
function getStarData(id) {
  const ratings = [4, 5, 3, 4, 5, 4, 3, 5];
  const filled = ratings[id % ratings.length];
  return { filled };
}

export default function ProductCard({ id, title, price, category, image, description }) {
  const addToCart = useCart((state) => state.addToCart);
  const { filled } = getStarData(id);

  const handleAddToCart = () => {
    addToCart({ id, title, price, image, category });
    toast.success(`${title} imeongezwa kwenye cart!`, {
      style: { background: '#172554', color: '#fff' },
    });
  };

  return (
    // Tumebadilisha div ya nje kuwa motion.div na kuweka variants
    <motion.div 
      variants={cardVariants}
      className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      
      {/* ── Picha ─────────────────────────────────────── */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
        {image ? (
         <Image
     src={image}
     alt={title}
     fill
     className="object-cover object-center w-full h-full" // Nimeongeza object-center
     sizes="(max-width: 768px) 100vw, 25vw"
/>
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-xs font-semibold">Hakuna Picha</span>
          </div>
        )}
      </div>

      {/* ── Maelezo ───────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-3">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug mb-1">
          {title}
        </h3>
    
        {/* Stars pekee */}
        <div className="flex items-center gap-1 mb-1">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((i) =>
              i <= filled ? (
                <AiFillStar key={i} className="text-yellow-400" size={14} />
              ) : (
                <AiOutlineStar key={i} className="text-yellow-400" size={14} />
              )
            )}
          </div>
        </div>

        <p className="text-lg font-black text-gray-900 mt-0.5">{price}</p>

        {description && (
          <p className="text-gray-500 text-xs mt-1 line-clamp-2">{description}</p>
        )}

        <div className="flex-1" />

        <button
          onClick={handleAddToCart}
          className="w-full mt-3 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-gray-900 font-bold text-sm px-4 py-2 rounded-md transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}