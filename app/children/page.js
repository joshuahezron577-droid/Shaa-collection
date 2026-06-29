import { childrenProducts } from '@/data/Product';
import ProductCard from '@/components/ProductCard';

export default function ChildrenPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <div className="flex items-center gap-2 mb-5">
        <span className="w-1 h-6 bg-blue-950 rounded-full inline-block" />
        <h1 className="text-xl font-black text-gray-900 tracking-tight">Bidhaa za Watoto</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {childrenProducts.length > 0 ? (
          childrenProducts.map((item) => <ProductCard key={item.id} {...item} />)
        ) : (
          <p className="text-gray-500 col-span-full text-center">Hakuna bidhaa kwa sasa.</p>
        )}
      </div>
    </main>
  );
}
