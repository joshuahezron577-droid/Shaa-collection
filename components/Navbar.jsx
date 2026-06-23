"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/store/useCart'; // Import store yako

export default function Navbar({ onOpenCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCart((state) => state.cart); // Tunachukua listi ya vitu kutoka Zustand

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'CHILDREN', path: '/children' },
    { name: 'WOMEN', path: '/women' },
    { name: 'MEN', path: '/men' }, 
    { name: 'ELECTRONICS', path: '/electronics' },
  ];

  return (
    <nav className="w-full bg-white border-gray-200 sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      {/* TOP BAR */}
      <div className="bg-gray-50 text-[10px] md:text-xs text-gray-600 py-1 border-b border-gray-100">
        <div className="container mx-auto flex justify-end gap-4 px-4 uppercase tracking-wider font-semibold">
          <span className="inline-flex items-center gap-1">📞 +255 7XX XXX XXX</span>
          <Link href="#" className="inline-flex items-center gap-1 text-green-700 hover:text-green-800">
            💬 WhatsApp Us
          </Link>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="container mx-auto flex items-center justify-between py-3 px-4 gap-3">
        <h1 className="text-xl font-black text-blue-950 tracking-tighter">SHOP-TZ</h1>
        
        <div className="relative flex-1 max-w-md mx-4 hidden md:block">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input type="text" placeholder="Search products..." className="w-full text-sm py-1.5 pl-10 pr-4 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>

        <div className="flex items-center gap-4">
          {/* HAPA NDIPO TUNATUMIA onOpenCart */}
          <button onClick={onOpenCart} className="text-xl relative">🛒 
            {/* Inaonyesha idadi ya vitu vilivyomo kwenye cart */}
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 text-[9px] font-bold bg-orange-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </button>
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
      </div>

      {/* CATEGORY ROW */}
      <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-center gap-6 py-2 border-t border-gray-100 text-xs font-semibold text-gray-700`}>
        {navLinks.map((link) => (
          <Link key={link.name} href={link.path} className="px-2 py-1 hover:text-blue-700">
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}