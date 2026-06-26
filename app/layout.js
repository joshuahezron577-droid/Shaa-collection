import Script from 'next/script';
import Link from 'next/link';
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Navbar from "../components/Navbar";
import CartModal from "../components/CartModal";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronRight, FaCode } from 'react-icons/fa';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: { background: '#1f2937', color: '#fff', fontSize: '14px', borderRadius: '8px' },
          }}
        />

        <Navbar />
        <CartModal />

        <main className="flex-grow m-0 p-0">{children}</main>

        {/* ── FOOTER ───────────────────────────────────────── */}
        <footer className="bg-blue-950 text-white">
          {/* Main footer grid — 3 equal columns */}
          <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Col 1 — Brand */}
            <div>
              <h2 className="text-2xl font-black tracking-tight mb-3">SHOP-TZ</h2>
              <p className="text-blue-200 text-sm leading-relaxed mb-5">
                Duka lako la mtandaoni Tanzania. Bidhaa bora, bei nafuu, huduma ya haraka.
              </p>
              {/* Contact icons */}
              <div className="flex gap-3">
                {[
                  { icon: <FaPhoneAlt size={14}/>, href: 'tel:+255696408701' },
                  { icon: <FaWhatsapp size={14}/>, href: 'https://wa.me/255773753292' },
                  { icon: <FaEnvelope size={14}/>, href: 'mailto:joshuahezron577@gmail.com' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-blue-700 flex items-center justify-center text-blue-300 hover:bg-yellow-400 hover:text-blue-950 hover:border-yellow-400 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* Quick links below icons */}
              <ul className="mt-6 space-y-2.5">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'FAQs', href: '/faqs' },
                  { name: 'Customer Reviews', href: '/reviews' },
                ].map((l) => (
                  <li key={l.name} className="flex items-center gap-2">
                    <FaChevronRight size={9} className="text-yellow-400 shrink-0" />
                    <Link href={l.href} className="text-blue-200 text-sm hover:text-white transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2 — Shop Store */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-white mb-4">Shop Store</h4>
              <ul className="space-y-2.5">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Children', href: '/children' },
                  { name: 'Women', href: '/women' },
                  { name: 'Men', href: '/men' },
                  { name: 'Shoes', href: '/shoes' },
                ].map((l) => (
                  <li key={l.name} className="flex items-center gap-2">
                    <FaChevronRight size={9} className="text-yellow-400 shrink-0" />
                    <Link href={l.href} className="text-blue-200 text-sm hover:text-white transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Contact Us */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-white mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaPhoneAlt size={13} className="text-yellow-400 mt-0.5 shrink-0" />
                  <a href="tel:+255696408701" className="text-blue-200 text-sm hover:text-white transition-colors">
                    0696 408 701
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FaWhatsapp size={14} className="text-green-400 mt-0.5 shrink-0" />
                  <a href="https://wa.me/255773753292" target="_blank" rel="noopener noreferrer" className="text-blue-200 text-sm hover:text-white transition-colors">
                    0773 753 292
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FaEnvelope size={13} className="text-yellow-400 mt-0.5 shrink-0" />
                  <a href="mailto:joshuahezron577@gmail.com" className="text-blue-200 text-sm hover:text-white transition-colors">
                    joshuahezron577@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt size={13} className="text-yellow-400 mt-0.5 shrink-0" />
                  <span className="text-blue-200 text-sm">Dar es Salaam, Tanzania</span>
                </li>
              </ul>

              {/* GS Codestar branding */}
              <div className="mt-6 pt-5 border-t border-blue-800">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-yellow-400 rounded-md flex items-center justify-center">
                    <FaCode size={13} className="text-blue-950" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 leading-none">Crafted by</p>
                    <p className="text-sm font-black text-white leading-tight">GS Codestar</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="border-t border-blue-800 py-4 text-center">
            <p className="text-blue-300 text-xs">
              &copy; 2026 <span className="text-white font-semibold">SHOP-TZ</span>. All rights reserved.
            </p>
          </div>
        </footer>

        {/* Crisp Chat */}
        <Script id="crisp-script" strategy="afterInteractive">
          {`
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="7cd0c15d-1733-47ce-ab8f-77fe0d9a22cf";
            (function(){
              var d=document;
              var s=d.createElement("script");
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
