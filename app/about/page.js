
    export default function AboutPage() {
  return (
<div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Kuhusu SHOP-TZ</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Dira Yetu</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          SHOP-TZ ni jukwaa linalounganisha wateja na bidhaa bora kwa urahisi na haraka. 
          Tunajivunia kutoa huduma bora inayozingatia mahitaji ya soko la Tanzania, 
          tukiwa na lengo la kurahisisha maisha ya kila siku ya wateja wetu.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2">Tunachofanya</h3>
          <p className="text-gray-600">
            Tunarahisisha ununuzi wa mtandaoni kwa kuhakikisha unapata bidhaa 
            halisi, bei nafuu, na huduma ya haraka ya usafirishaji.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2">Kwa Nini Sisi?</h3>
          <p className="text-gray-600">
            Kujitolea kwetu katika huduma kwa wateja, uaminifu, na teknolojia 
            ya kisasa inatufanya kuwa chaguo namba moja kwa wanunuzi wa kisasa.
          </p>
        </div>
      </section>
    </div>
  )
};