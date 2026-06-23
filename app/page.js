import HeroCarousel from '@/components/HeroCarousel';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/Product';

export default function HomePage() {
  return (
    <main className="p-8">
      <HeroCarousel />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {products.map((item) => (
          // All from card
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}