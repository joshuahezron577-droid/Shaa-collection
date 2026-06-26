"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import HeroCarousel from '@/components/HeroCarousel';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/Product';

 const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.4, // Hii inafanya kadi ya pili isubiri 0.4s ndio ianze
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
      {!query && <HeroCarousel />}
      
      {/* Hapa ndipo tumebadilisha: mt-10 tumefanya mt-4 au mt-2 ili kubana nafasi */}
      <div className="px-4 md:px-8 mt-2"> 
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