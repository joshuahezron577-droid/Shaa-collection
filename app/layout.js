"use client";
import "./globals.css";
import { useCart } from '@/store/useCart'; // Import store yako
import Navbar from "../components/Navbar";
import CartModal from "../components/CartModal";

export default function RootLayout({ children }) {
  // Tunachukua function na state kutoka kwenye store yetu ya Zustand
  const { isOpen, closeCart, openCart } = useCart();

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Tunapitisha function ya kufungua modal kwenda Navbar */}
        <Navbar onOpenCart={openCart} />
        
        {/* Modal sasa inasoma state kutoka kwenye store */}
        <CartModal isOpen={isOpen} onClose={closeCart} />

        <main className="flex-grow">{children}</main>

        <footer className="py-6 text-center text-gray-500 border-t mt-10">
          <p>&copy; 2026 SHOP-TZ. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}