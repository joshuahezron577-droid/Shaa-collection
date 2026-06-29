"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import HeroCarousel from '@/components/HeroCarousel';
import ProductCarousel from '@/components/ProductCarousel'; // Hii ndio component uliyounda
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/Product';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.4,
      delayChildren: 0.2     
    },
  },
};

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('search')?.toLowerCase() || "";

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );

  return (
    <>
      {/* 1. HeroCarousel inaonekana tu kama hakuna search */}
      {!query && <HeroCarousel />}
      
      {/* 2. New Arrivals Carousel inaonekana tu kama hakuna search */}
      {!query && <ProductCarousel products={products.slice(0, 5)} />} 
      
      {/* 3. Products Grid */}
      <div className="px-4 md:px-8 mt-2">
        {!query && (
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1 h-6 bg-blue-950 rounded-full inline-block" />
            <h2 className="text-xl font-black text-gray-900 tracking-tight">All Products</h2>
          </div>
        )}
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-10">Hakuna bidhaa.</p>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default function HomePage() {
  return (
    <main className="w-full m-0 p-0">
      <Suspense fallback={<div className="p-8 text-center">Inapakia...</div>}>
        <SearchContent />
      </Suspense>
    </main>
  );
}