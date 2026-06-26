export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero / Title ─────────────────────────────────── */}
      <div className="bg-gray-50 border-b border-gray-100 py-14 text-center">
        <h1 className="text-4xl font-black text-blue-950 tracking-tight">About</h1>
        <div className="mx-auto mt-3 w-12 h-1 bg-blue-600 rounded-full" />
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-6 text-gray-700 leading-relaxed text-[15px]">

        <p>
          Karibu <strong className="text-blue-950">SHOP-TZ</strong>, duka lako la mtandaoni la
          Tanzania linalookuwezesha kupata bidhaa bora za mitindo ya kisasa kwa bei nafuu.
          Lengo letu ni kukupa uzoefu bora wa ununuzi wa mtandaoni — rahisi, wa kuaminika,
          na wa haraka.
        </p>

        <p>
          SHOP-TZ ilianzishwa kwa misingi ya ubora, uaminifu, na huduma inayozingatia
          mahitaji ya mteja. Tunakupatia bidhaa za wanaume, wanawake, watoto, na viatu —
          zote zikiwa na uhakika wa ubora wa hali ya juu.
        </p>

        <p>
          Mkusanyiko wetu wa bidhaa umebuniwa kwa makini ili kukidhi mahitaji ya
          masoko ya Tanzania. Kila bidhaa imechaguliwa kwa uangalifu mkubwa ili
          kuhakikisha unapata thamani halisi kwa pesa yako.
        </p>

        <p>
          Tumefanya maboresho makubwa katika sekta ya biashara ya mtandaoni hapa
          Tanzania, tukiwa na zaidi ya <strong className="text-blue-950">bidhaa 100+</strong> zinazopatikana,
          na wateja wanaoendelea kuongezeka kila siku. Dhamira yetu ya kutoa bidhaa
          za kisasa na zinazofaa haibadiliki.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-gray-100 my-8">
          {[
            { value: '100+', label: 'Bidhaa' },
            { value: '500+', label: 'Wateja' },
            { value: '4.8★', label: 'Rating' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-black text-blue-950">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <p>
          Tunaendelea kupanua huduma zetu na kuongeza bidhaa mpya mara kwa mara.
          Kushirikiana nawe ni furaha yetu kubwa, na tunashukuru uaminifu wako.
        </p>

      </div>
    </div>
  );
}
