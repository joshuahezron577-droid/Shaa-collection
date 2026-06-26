import { FaStar, FaStarHalfAlt, FaRegStar, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const reviews = [
  {
    name: "Amina S.",
    rating: 5,
    date: "Juni 2026",
    text: "Bidhaa niliyoagiza ilifika haraka sana na ilikuwa exactly kama ilivyoonekana kwenye picha. Huduma bora kabisa, nitaendelea kununua hapa!",
  },
  {
    name: "John M.",
    rating: 4.5,
    date: "Mei 2026",
    text: "Nimefurahi sana na quality ya nguo nilizopata. Bei ni nafuu kuliko maduka mengine. Delivery ilichelewa kidogo lakini ilifika salama.",
  },
  {
    name: "Fatuma K.",
    rating: 5,
    date: "Mei 2026",
    text: "Mara yangu ya kwanza kununua online Tanzania na nimeridhika kabisa. Wasiliano wa WhatsApp ulikuwa mzuri na wa haraka. Asante SHOP-TZ!",
  },
  {
    name: "David L.",
    rating: 4,
    date: "Aprili 2026",
    text: "Viatu nilivyonunua vina ubora wa hali ya juu. Size ilikuwa sahihi kama nilivyouliza. Nitawapendekeza kwa marafiki zangu.",
  },
  {
    name: "Zainab A.",
    rating: 5,
    date: "Aprili 2026",
    text: "Gauni nililoagiza lilikuwa zuri sana! Design ya kisasa na kinyago laini. Nitarudi tena bila shaka. Duka hili ni la kuamini.",
  },
  {
    name: "Peter N.",
    rating: 4.5,
    date: "Machi 2026",
    text: "Nimefanya order mara tatu na kila wakati nimeridhika. Bidhaa za watoto wangu zilikuwa bora na kwa bei nzuri. Highly recommended!",
  },
];

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        if (i <= Math.floor(rating)) return <FaStar key={i} className="text-yellow-400" size={14} />;
        if (i === Math.ceil(rating) && rating % 1 !== 0) return <FaStarHalfAlt key={i} className="text-yellow-400" size={14} />;
        return <FaRegStar key={i} className="text-yellow-400" size={14} />;
      })}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Title ────────────────────────────────────────── */}
      <div className="bg-gray-50 border-b border-gray-100 py-14 text-center">
        <h1 className="text-4xl font-black text-blue-950 tracking-tight">Customer Reviews</h1>
        <div className="mx-auto mt-3 w-12 h-1 bg-blue-600 rounded-full" />
      
      </div>

      {/* ── Reviews Grid ─────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-3"
            >
              {/* Top: avatar + name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center text-white font-black text-sm shrink-0">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm leading-tight">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.date}</p>
                </div>
              </div>

              {/* Stars */}
              <Stars rating={r.rating} />

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Contact Us section ───────────────────────────── */}
      <div className="bg-blue-950 py-14">
        <div className="max-w-5xl mx-auto px-6">

          {/* Section title */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white tracking-tight">Contact Us</h2>
            <div className="mx-auto mt-3 w-12 h-1 bg-yellow-400 rounded-full" />
          </div>

          {/* 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">

            {/* Physical Address */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                <FaMapMarkerAlt size={24} className="text-white" />
              </div>
              <h3 className="font-black uppercase tracking-widest text-sm">Anwani Yetu</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Tunafanya kazi Tanzania nzima. Wasiliana nasi kupitia simu au WhatsApp tupange mkutano.
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                <FaEnvelope size={24} className="text-white" />
              </div>
              <h3 className="font-black uppercase tracking-widest text-sm">Email Address</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Barua pepe rasmi yetu ni{' '}
                <a
                  href="mailto:joshuahezron577@gmail.com"
                  className="text-yellow-400 hover:text-white transition-colors font-semibold"
                >
                  joshuahezron577@gmail.com
                </a>
                . Tunajibu ndani ya masaa 24.
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                <FaPhoneAlt size={22} className="text-white" />
              </div>
              <h3 className="font-black uppercase tracking-widest text-sm">Phone Number</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Tunapatikana WhatsApp masaa 24/7. Wasiliana nasi kupitia namba yetu ya WhatsApp{' '}
                <a
                  href="https://wa.me/255773753292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-white transition-colors font-semibold"
                >
                  +255 773 753 292
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
