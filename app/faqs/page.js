export default function FAQsPage() {
  const faqs = [
    {
      q: "Ninawezaje kuagiza bidhaa?",
      a: "Chagua bidhaa unayoipenda, bonyeza 'Add to Cart', kisha bonyeza kitufe cha WhatsApp kwenye cart yako. Utapelekwa WhatsApp moja kwa moja kukamilisha agizo lako.",
    },
    {
      q: "Je, mnafanya delivery Tanzania nzima?",
      a: "Ndiyo! Tunafanya delivery katika maeneo yote ya Tanzania. Muda wa uwasilishaji ni siku 1–3 za kazi kulingana na eneo lako.",
    },
    {
      q: "Bei za bidhaa ni za mwisho au zinaweza kubadilika?",
      a: "Bei zilizoonyeshwa kwenye duka ni sahihi na za mwisho. Hata hivyo, tunaweza kutoa punguzo maalum kwa wateja wa karibu — wasiliana nasi kwa habari zaidi.",
    },
    {
      q: "Ninawezaje kujua bidhaa imewasilishwa?",
      a: "Baada ya kutuma agizo lako kupitia WhatsApp, tutakuarifiwa mara moja na kukupa update ya delivery kwa ujumbe wa WhatsApp.",
    },
    {
      q: "Je, ninaweza kurudisha bidhaa?",
      a: "Ndiyo. Tukikubaliana kwenye mazungumzo ya WhatsApp, bidhaa zinaweza kurudishwa ndani ya siku 7 baada ya kupokea. Bidhaa lazima iwe katika hali yake ya awali.",
    },
    {
      q: "Mnakubali malipo gani?",
      a: "Tunakubali malipo ya M-Pesa, Tigo Pesa, Airtel Money, na malipo ya mkoba. Maelezo ya akaunti yatakupwa baada ya kutuma agizo lako.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero / Title ─────────────────────────────────── */}
      <div className="bg-gray-50 border-b border-gray-100 py-14 text-center">
        <h1 className="text-4xl font-black text-blue-950 tracking-tight">FAQs</h1>
        <div className="mx-auto mt-3 w-12 h-1 bg-blue-600 rounded-full" />
      </div>

      {/* ── Accordion ────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="collapse collapse-plus bg-base-100 border border-base-300"
          >
            <input
              type="radio"
              name="faq-accordion"
              defaultChecked={i === 0}
            />
            <div className="collapse-title font-semibold text-blue-950">
              {faq.q}
            </div>
            <div className="collapse-content text-sm text-gray-600 leading-relaxed">
              {faq.a}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
