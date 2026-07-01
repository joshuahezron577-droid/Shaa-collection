"use client";
import { useCart } from '@/store/useCart';
import { FaWhatsapp, FaTrashAlt } from 'react-icons/fa';
import { FiX, FiShoppingCart } from 'react-icons/fi';
import { toast } from 'react-hot-toast'; // Usisahau ku-import hii

export default function CartModal() {
  const { cart, isOpen, closeCart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.toString().replace(/[^0-9]/g, ''));
    return sum + (isNaN(price) ? 0 : price) * (item.quantity || 1);
  }, 0);

  const handleWhatsAppOrder = () => {
    toast((t) => (
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-gray-800">Umeridhika na bidhaa zako?</p>
        <div className="flex gap-2">
          <button 
            onClick={() => {
              toast.dismiss(t.id);
              const phone = "255773753292";
              const lines = cart.map((item) => `• ${item.title} x${item.quantity || 1} — ${item.price}`).join('%0A');
              const message = `Habari! Nataka kuagiza bidhaa hizi:%0A%0A${lines}%0A%0A*Jumla ya Malipo: TZS ${total.toLocaleString()}*`;
              window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
              clearCart(); // Hiari: Kufuta cart baada ya kutuma
            }}
            className="bg-green-600 text-white px-4 py-1.5 rounded text-xs font-bold"
          >
            Tuma Order
          </button>
          <button onClick={() => toast.dismiss(t.id)} className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded text-xs font-bold">
            Cancel
          </button>
        </div>
      </div>
    ), { duration: 6000 });
  };

  const handleClearAll = () => {
    toast((t) => (
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold">Futa bidhaa zote kwenye cart?</p>
        <div className="flex gap-2">
          <button onClick={() => { toast.dismiss(t.id); clearCart(); }} className="bg-red-600 text-white px-4 py-1.5 rounded text-xs font-bold">
            Futa
          </button>
          <button onClick={() => toast.dismiss(t.id)} className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded text-xs font-bold">
            Hapana
          </button>
        </div>
      </div>
    ));
  };

  if (!isOpen) return null;
  const itemCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    // ... (Hii sehemu ya UI ibaki vile vile ilivyokaa vizuri) ...
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeCart} />
      <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col pb-24">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-blue-950">
          <div className="flex items-center gap-2 text-white">
            <FiShoppingCart size={18} />
            <h2 className="font-black text-base tracking-tight">Your Cart</h2>
            {itemCount > 0 && (
              <span className="bg-yellow-400 text-blue-950 text-[11px] font-black px-2 py-0.5 rounded-full">{itemCount}</span>
            )}
          </div>
          <button onClick={closeCart} className="text-white/70 hover:text-white p-1"><FiX size={20} /></button>
        </div>

        {/* Items List - (Hii baki kama ilivyokua) */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
               <FiShoppingCart size={48} strokeWidth={1} />
               <p className="font-semibold text-sm">Mkeka wako uko wazi.</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex items-start justify-between gap-3 border border-gray-100 rounded-xl p-3">
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-gray-900">{item.title}</h4>
                  <p className="text-blue-950 text-sm font-black mt-1">{item.price} · x{item.quantity || 1}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500"><FaTrashAlt size={13} /></button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase">Jumla</p>
                <p className="text-xl font-black text-blue-950">TZS {total.toLocaleString()}</p>
              </div>
              <button onClick={handleClearAll} className="flex items-center gap-1.5 text-xs font-bold text-red-500 hover:text-red-700">
                <FaTrashAlt size={11} /> Delete All
              </button>
            </div>
            <button onClick={handleWhatsAppOrder} className="w-full flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-black py-3.5 rounded-xl transition-all">
              <FaWhatsapp size={20} /> Order Now via WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
}