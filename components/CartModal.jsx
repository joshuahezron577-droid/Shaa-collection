"use client";
import { useCart } from '@/store/useCart';

export default function CartModal({ isOpen, onClose }) {
  const { cart, removeFromCart } = useCart();

  if (!isOpen) return null;

  // Logic ya kutuma oda WhatsApp
  const handleWhatsAppOrder = () => {
    const phone = "2557XXXXXXXX"; // WEKA NAMBA YAKO HAPA
    const message = `Habari! Nataka kuagiza bidhaa hizi: %0A` + 
                    cart.map(item => `- ${item.title} (${item.price})`).join('%0A');
    
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 flex justify-end">
      <div className="w-full max-w-sm bg-white h-full p-6 shadow-xl flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Mkeka Wako</h2>
          <button onClick={onClose} className="text-2xl hover:text-red-500 transition-colors">×</button>
        </div>
        
        {/* Hii div itaruhusu scroll kama vitu ni vingi */}
        <div className="flex-1 overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-400 mt-10">Kapu lako liko wazi. Chagua bidhaa!</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-blue-600 text-xs font-bold">{item.price}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="text-red-500 text-xs hover:underline"
                >
                  Ondoa
                </button>
              </div>
            ))
          )}
        </div>
        
        {/* Button ya WhatsApp */}
        {cart.length > 0 && (
          <button 
            onClick={handleWhatsAppOrder}
            className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
          >
            Malizia Oda (WhatsApp)
          </button>
        )}
      </div>
    </div>
  );
}