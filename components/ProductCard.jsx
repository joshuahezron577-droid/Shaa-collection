"use client";
import Image from 'next/image';
import { useCart } from '@/store/useCart';
import { toast } from 'react-hot-toast';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

// Toa rating tofauti kwa kila product kulingana na id
function getStarData(id) {
  const ratings = [4, 5, 3, 4, 5, 4, 3, 5];
  const reviews = [87, 213, 45, 127, 302, 64, 19, 511];
  const filled = ratings[id % ratings.length];
  return { filled, reviews: reviews[id % reviews.length] };
}

export default function ProductCard({ id, title, price, category, image, description }) {
  const addToCart = useCart((state) => state.addToCart);
  const { filled, reviews } = getStarData(id);

  const handleAddToCart = () => {
    addToCart({ id, title, price, image, category });
    toast.success(`${title} imeongezwa kwenye cart!`, {
      style: { background: '#172554', color: '#fff' },
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden">
      
      {/* ── Picha ─────────────────────────────────────── */}
      {/* h-80 inatoa urefu uleule, object-contain inahakikisha picha haikatwi */}
 
<div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
  {image ? (
    <Image
      src={image}
      alt={title}
      fill
      // object-cover inahakikisha picha inajaza box bila kuacha nafasi tupu
      className="object-cover w-full h-full"
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
        {/* Jina */}
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug mb-1">
          {title}
        </h3>

        {/* Stars + review count */}
   
        {/* Stars pekee bila namba */}
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

        {/* Bei */}
        <p className="text-lg font-black text-gray-900 mt-0.5">{price}</p>

        {/* Maelezo mafupi */}
        {description && (
          <p className="text-gray-500 text-xs mt-1 line-clamp-2">{description}</p>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Add to Cart button */}
        <button
          onClick={handleAddToCart}
          className="w-full mt-3 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-gray-900 font-bold text-sm px-4 py-2 rounded-md transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}