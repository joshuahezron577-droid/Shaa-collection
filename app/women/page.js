import { womenProducts } from '@/data/Product';
import ProductCard from '@/components/ProductCard';

export default function WomenPage() {
  return (
    <main className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-black text-blue-950 tracking-tight">Bidhaa za Wanawake</h1>
        <div className="mx-auto mt-3 w-12 h-1 bg-blue-600 rounded-full" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {womenProducts.length > 0 ? (
          womenProducts.map((item) => <ProductCard key={item.id} {...item} />)
        ) : (
          <p className="text-gray-500 col-span-full text-center">Hakuna bidhaa kwa sasa.</p>
        )}
      </div>
    </main>
  );
}
