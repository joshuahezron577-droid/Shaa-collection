"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useCart } from '@/store/useCart';
import { LuShoppingCart, LuMenu, LuX } from 'react-icons/lu';
import { FiSearch } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const navLinks = [
  { name: 'Home',     path: '/' },
  { name: 'Children', path: '/children' },
  { name: 'Women',    path: '/women' },
  { name: 'Men',      path: '/men' },
  { name: 'Shoes',    path: '/shoes' },
];

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router   = useRouter();
  const pathname = usePathname();

  const cart      = useCart((state) => state.cart);
  const openCart  = useCart((state) => state.openCart);
  const cartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(searchTerm.trim() ? `/?search=${encodeURIComponent(searchTerm.trim())}` : '/');
    setDrawerOpen(false);
  };

  // Kama si home page — ficha top bar, search, cart
  const isHome = pathname === '/';

  return (
    <nav className="w-full bg-blue-950 sticky top-0 z-50 shadow-sm">

      {/* ══ TOP BAR — home page only ═════════════════════ */}
      {isHome && (
        <div className="bg-blue-900 border-b border-blue-800 py-1.5 px-4 font-sans">
  <div className="container mx-auto flex items-center justify-center gap-4 text-xs text-blue-200">
    
    {/* Phone */}
    <a href="tel:+255696408701" 
       className="flex items-center gap-1.5 hover:text-white transition-all duration-300">
       <FaPhoneAlt size={12} />
       <span className="text-white font-medium tracking-wide">+255 696 408 701</span>
    </a>

    {/* Divider | */}
    <span className="text-blue-700 font-light">|</span>

    {/* WhatsApp */}
    <a href="https://wa.me/255773753292" target="_blank" rel="noopener noreferrer"
       className="flex items-center gap-1.5 hover:text-green-300 transition-all duration-300">
       <IoLogoWhatsapp size={14} className="text-green-400" />
       <span className="text-white font-medium tracking-wide">+255 773 753 292</span>
    </a>
    
  </div>
</div>
      
      )}

      {/* ══ MAIN HEADER — home page only ════════════════ */}
      {isHome && (
        <div className="container mx-auto flex items-center justify-between py-3 px-4 gap-4">
          {/* Logo */}
          <Link href="/"
            className="shrink-0 text-xl md:text-2xl font-black text-white tracking-tight hover:text-yellow-400 transition-colors">
            SHOP-TZ
          </Link>

          {/* Search bar */}
          <form onSubmit={handleSearch}
            className="flex flex-1 max-w-2xl items-stretch rounded-md overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Tafuta bidhaa hapa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 text-sm py-2.5 px-4 outline-none bg-white text-gray-800 placeholder-gray-400"
            />
            <button type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 transition-colors px-4 flex items-center justify-center shrink-0"
              aria-label="Search">
              <FiSearch size={18} className="text-blue-950" />
            </button>
          </form>

          {/* Cart */}
          <button onClick={openCart}
            className="shrink-0 relative flex flex-col items-center text-white hover:text-yellow-400 transition-colors p-1"
            aria-label="Cart">
            <LuShoppingCart size={26} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-yellow-400 text-blue-950 text-[10px] font-black min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1 leading-none">
                {cartCount}
              </span>
            )}
            <span className="text-[10px] font-bold mt-0.5 hidden md:block">Cart</span>
          </button>

          {/* Hamburger mobile */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="md:hidden shrink-0 text-white hover:text-yellow-400 transition-colors p-1"
            aria-label="Toggle menu">
            {drawerOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>
      )}

      {/* ══ CATEGORY PAGES — contacts + logo + search + cart ════════════ */}
      {!isHome && (
        <>
          {/* Top bar na contacts — same as home page */}
          <div className="bg-blue-900 border-b border-blue-800 py-1.5 px-4 font-sans">
            <div className="container mx-auto flex items-center justify-center gap-4 text-xs text-blue-200">
              <a href="tel:+255696408701"
                className="flex items-center gap-1.5 hover:text-white transition-all duration-300">
                <FaPhoneAlt size={12} />
                <span className="text-white font-medium tracking-wide">+255 696 408 701</span>
              </a>
              <span className="text-blue-700 font-light">|</span>
              <a href="https://wa.me/255773753292" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-green-300 transition-all duration-300">
                <IoLogoWhatsapp size={14} className="text-green-400" />
                <span className="text-white font-medium tracking-wide">+255 773 753 292</span>
              </a>
            </div>
          </div>

          {/* Logo + Search + Cart */}
          <div className="container mx-auto flex items-center justify-between py-3 px-4 gap-4">
            <Link href="/"
              className="shrink-0 text-xl md:text-2xl font-black text-white tracking-tight hover:text-yellow-400 transition-colors">
              SHOP-TZ
            </Link>

            <form onSubmit={handleSearch}
              className="flex flex-1 max-w-2xl items-stretch rounded-md overflow-hidden shadow-sm">
              <input
                type="text"
                placeholder="Tafuta bidhaa hapa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 text-sm py-2.5 px-4 outline-none bg-white text-gray-800 placeholder-gray-400"
              />
              <button type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 transition-colors px-4 flex items-center justify-center shrink-0"
                aria-label="Search">
                <FiSearch size={18} className="text-blue-950" />
              </button>
            </form>

            <button onClick={openCart}
              className="shrink-0 relative flex flex-col items-center text-white hover:text-yellow-400 transition-colors p-1"
              aria-label="Cart">
              <LuShoppingCart size={26} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-yellow-400 text-blue-950 text-[10px] font-black min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1 leading-none">
                  {cartCount}
                </span>
              )}
              <span className="text-[10px] font-bold mt-0.5 hidden md:block">Cart</span>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="md:hidden shrink-0 text-white hover:text-yellow-400 transition-colors p-1"
              aria-label="Toggle menu">
              {drawerOpen ? <LuX size={24} /> : <LuMenu size={24} />}
            </button>
          </div>
        </>
      )}

      {/* ══ DESKTOP NAV BAR — home only ══════════════════ */}
      {isHome && (
        <div className="hidden md:block bg-blue-950">
          <div className="container mx-auto px-4 flex items-center justify-center">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path}
                className={`px-5 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-150 border-b-2 ${
                  pathname === link.path
                    ? 'text-yellow-400 border-yellow-400'
                    : 'text-blue-200 border-transparent hover:text-yellow-400 hover:border-yellow-400'
                }`}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ══ MOBILE DRAWER — home only ════════════════════ */}
      {isHome && drawerOpen && (
        <div className="md:hidden border-t border-blue-800 bg-blue-900">
          <ul className="flex flex-col py-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path}
                  onClick={() => setDrawerOpen(false)}
                  className={`block px-6 py-3.5 text-sm font-semibold transition-colors ${
                    pathname === link.path
                      ? 'text-yellow-400 bg-blue-800 border-l-4 border-yellow-400'
                      : 'text-blue-100 hover:text-yellow-400 hover:bg-blue-800'
                  }`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  );
}
