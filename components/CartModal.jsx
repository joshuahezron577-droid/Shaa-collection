"use client";
import { useCart } from '@/store/useCart';

export default function CartModal() {
  // Sasa tunatumia store moja kwa moja, hakuna haja ya kupitisha props kwenye layout
  const { cart, isOpen, closeCart, removeFromCart } = useCart();

  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => {
    // Tunahakikisha bei ni namba safi
    const price = parseFloat(item.price.toString().replace(/[^0-9]/g, ''));
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  const handleWhatsAppOrder = () => {
    const phone = "255773753292";
    const message = `Habari! Nataka kuagiza bidhaa hizi:%0A` + 
                    cart.map(item => `- ${item.title} (${item.price})`).join('%0A') +
                    `%0A%0AJumla: ${total.toLocaleString()} TZS`;
    
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/50" onClick={closeCart}></div>
      
      <div className="relative w-full max-w-sm bg-white h-full p-6 shadow-2xl flex flex-col transition-transform">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-black tracking-tight">Your cart</h2>
          <button onClick={closeCart} className="text-2xl hover:text-red-500">×</button>
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-400 mt-10 text-sm">Mkeka wako uko wazi.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex justify-between items-start border-b border-gray-100 pb-3">
                <div>
                  <h4 className="font-bold text-sm text-gray-800">{item.title}</h4>
                  <p className="text-blue-600 text-xs font-black mt-0.5">{item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-[10px] uppercase font-bold">Delete</button>
              </div>
            ))
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center mb-4 text-sm font-black">
              <span>Total:</span>
              <span className="text-blue-950">{total.toLocaleString()} TZS</span>
            </div>
            <button onClick={handleWhatsAppOrder} className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700">
              Order now (WhatsApp)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}