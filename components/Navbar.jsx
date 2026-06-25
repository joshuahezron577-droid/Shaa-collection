"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/store/useCart';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  // Tunachukua 'cart' na 'openCart' kutoka kwenye store moja kwa moja
  const { cart, openCart } = useCart(); 
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/?search=${searchTerm}`);
    } else {
      router.push(`/`);
    }
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="text-xl md:text-2xl font-black text-blue-950">SHOP-TZ</Link>

        <div className="flex-1 max-w-md mx-4 flex border border-gray-200 rounded-full bg-gray-50 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full text-sm py-2 px-4 bg-transparent outline-none" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch} className="bg-blue-950 text-white px-5 text-sm font-bold hover:bg-blue-800">
            Search
          </button>
        </div>

        {/* Hapa ndipo tunapofungua Cart Modal */}
        <button onClick={openCart} className="text-xl relative p-2">
          🛒 
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              {cart.length}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}