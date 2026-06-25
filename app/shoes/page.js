import { shoesProducts } from '@/data/Product'; // Hii ndiyo listi yako maalum ya wanawake
import ProductCard from '@/components/ProductCard';

export default function WomenPage() {
  
  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-black text-blue-950 mb-8">Bidhaa za Wanaume</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {shoesProducts.length > 0 ? (
          shoesProducts.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))
        ) : (
          <p className="text-gray-500">Hakuna bidhaa za wanawake kwa sasa.</p>
        )}
      </div>
    </main>
  );
}
