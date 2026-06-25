"use client"; // Hii inaruhusu Zustand na Toaster kufanya kazi humu
import Script from 'next/script';
import Link from 'next/link';
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { useCart } from '@/store/useCart';
import Navbar from "../components/Navbar";
import CartModal from "../components/CartModal";

export default function RootLayout({ children }) {
  // Tunatumia state moja kwa moja kutoka kwenye store, hatuhitaji ku-pass props
  const { isOpen, closeCart } = useCart();

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: { background: '#1f2937', color: '#fff', fontSize: '14px', borderRadius: '8px' },
          }}
        />

        <Navbar /> {/* Hii sasa inatumia openCart ndani yake */}
        
        <CartModal isOpen={isOpen} onClose={closeCart} />

        <main className="flex-grow">{children}</main>
        <footer className="py-12 border-t mt-12 bg-gray-50 text-gray-600">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
    
    {/* KUSHOTO */}
    <div className="flex flex-col items-center md:items-start gap-4">
      <div>
        <h3 className="font-bold text-blue-950 text-2xl">SHOP-TZ</h3>
        <p className="text-xs text-gray-400 mt-1">&copy; 2026. All rights reserved.</p>
      </div>
      <div className="space-y-2">
        <p className="font-semibold text-blue-900 text-sm border-b pb-1 w-fit">Crafted by GS Codestar</p>
        <div className="flex flex-col gap-1.5 text-xs text-gray-500">
          <a href="tel:+255XXXXXXXXX" className="hover:text-blue-600 transition-colors">📞 07XX XXX XXX</a>
          <a href="https://wa.me/255XXXXXXXXX" target="_blank" className="hover:text-green-600 transition-colors">💬 WhatsApp: 07XX XXX XXX</a>
          <a href="mailto:info@gscodestar.com" className="hover:text-blue-600 transition-colors">📧 info@gscodestar.com</a>
        </div>
      </div>
    </div>

   {/* KULIA - Imerekebishwa kwa kutumia Next/Link */}
<div className="flex flex-col items-center md:items-start gap-4">
  <h3 className="font-bold text-blue-950 text-xl uppercase tracking-wider">Store Info</h3>
  <div className="flex flex-col gap-3 text-sm">
    <Link href="/About Us" className="hover:text-blue-600 transition-all">About Us</Link>
    <Link href="/Contact Us" className="hover:text-blue-600 transition-all">Contact Us</Link>
    <Link href="/FAQs" className="hover:text-blue-600 transition-all">FAQs</Link>
    <Link href="/Customer Reviews" className="hover:text-blue-600 transition-all">Customer Reviews</Link>
  </div>
</div>
  </div>
</footer>
     {/* Third party */}
 <Script id="crisp-script" strategy="afterInteractive">
          {`
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="7cd0c15d-1733-47ce-ab8f-77fe0d9a22cf";
            (function(){
              d=document;
              s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        </Script>

      </body>
    </html>
  );
}