"use client";
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import HeroCarousel from '@/components/HeroCarousel';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/Product';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('search')?.toLowerCase() || "";

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );

  return (
    <>
      {!query && (
        <HeroCarousel />
      )}

      <div className="px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => <ProductCard key={item.id} {...item} />)
          ) : (
            <p className="col-span-full text-center text-gray-500 py-10">Hakuna bidhaa iliyopatikana.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default function HomePage() {
  return (
    <main className="w-full m-0 p-0">
      <Suspense fallback={<div className="p-8">Loading...</div>}>
        <SearchContent />
      </Suspense>
    </main>
  );
}
