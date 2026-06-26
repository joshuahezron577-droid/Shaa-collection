"use client";
import { useCart } from '@/store/useCart';
import { FaWhatsapp, FaTrashAlt } from 'react-icons/fa';
import { FiX, FiShoppingCart } from 'react-icons/fi';

export default function CartModal() {
  const { cart, isOpen, closeCart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.toString().replace(/[^0-9]/g, ''));
    return sum + (isNaN(price) ? 0 : price) * (item.quantity || 1);
  }, 0);

  const handleWhatsAppOrder = () => {
    // Confirmation prompt kabla ya kutuma order
    const confirmed = window.confirm(
      "✅ Je, umeridhika na bidhaa ulizochagua?\n\nBonyeza OK kutuma order yako WhatsApp.\nBonyeza Cancel kurudi na kuendelea kununua."
    );
    if (!confirmed) return;

    const phone = "255773753292";
    const lines = cart
      .map((item) => `• ${item.title} x${item.quantity || 1} — ${item.price}`)
      .join('%0A');
    const message =
      `Habari! Nataka kuagiza bidhaa hizi:%0A%0A${lines}` +
      `%0A%0A*Jumla ya Malipo: TZS ${total.toLocaleString()}*`;

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleClearAll = () => {
    const confirmed = window.confirm("Una uhakika unataka kufuta bidhaa zote kwenye cart?");
    if (confirmed) clearCart();
  };

  if (!isOpen) return null;

  const itemCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col">

        {/* ── Header ───────────────────────────────────── */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-blue-950">
          <div className="flex items-center gap-2 text-white">
            <FiShoppingCart size={18} />
            <h2 className="font-black text-base tracking-tight">Your Cart</h2>
            {itemCount > 0 && (
              <span className="bg-yellow-400 text-blue-950 text-[11px] font-black px-2 py-0.5 rounded-full leading-none">
                {itemCount}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* ── Items ────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-3 text-gray-400 py-20">
              <FiShoppingCart size={48} strokeWidth={1} />
              <p className="font-semibold text-sm">Mkeka wako uko wazi.</p>
              <p className="text-xs text-gray-300">Ongeza bidhaa ili uendelee</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-start justify-between gap-3 border border-gray-100 rounded-xl p-3 hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm text-gray-900 line-clamp-1">{item.title}</h4>
                  <p className="text-xs text-gray-400 capitalize mt-0.5">{item.category}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-blue-950 text-sm font-black">{item.price}</p>
                    {(item.quantity || 1) > 1 && (
                      <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        x{item.quantity}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-300 hover:text-red-500 transition-colors mt-0.5 shrink-0"
                  aria-label="Remove"
                >
                  <FaTrashAlt size={13} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* ── Footer ───────────────────────────────────── */}
        {cart.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-100 space-y-3">

            {/* Total + Delete All row */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Jumla</p>
                <p className="text-xl font-black text-blue-950">
                  TZS {total.toLocaleString()}
                </p>
              </div>
              <button
                onClick={handleClearAll}
                className="flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-all duration-200 border border-red-100 hover:border-red-300"
              >
                <FaTrashAlt size={11} />
                Delete All
              </button>
            </div>

            {/* WhatsApp Order button */}
            <button
              onClick={handleWhatsAppOrder}
              className="w-full flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 active:scale-[0.98] text-white font-black py-3.5 rounded-xl transition-all duration-200 shadow-md shadow-green-500/20 text-sm"
            >
              <FaWhatsapp size={20} />
              Order Now via WhatsApp
            </button>

            <button
              onClick={closeCart}
              className="w-full text-center text-xs text-gray-400 hover:text-gray-600 transition-colors py-1"
            >
              ← Endelea kununua
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
