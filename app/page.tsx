import Image from 'next/image';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center p-6">
  
      {/* Centered Top Section */}
      <nav className="w-full max-w-4xl flex flex-col items-center pt-3 gap-6">
        {/* Larger Logo */}
        <Image 
          src="/logo.png" 
          alt="Cornerstone Junk Removal" 
          width={900} 
          height={300} 
          className="object-contain"
        />

        {/* Call Button positioned below the logo with padding */}
        <a 
          href="tel:8014776120" 
          className="bg-[#1e3a58] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#152a42] transition shadow-md"
        >
          Call or Text (801) 477-6120
        </a>
      </nav>

      {/* Hero Section */}
      <header className="text-center my-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Fast, Reliable Junk Removal<br/>in Payson & Utah County
        </h1>
        <p className="text-lg text-slate-600">Residential & Commercial.</p>

        <p className="text-lg text-slate-600">We are here to help get that valuable space back!</p>
      </header>

      {/* Lead Form Card */}
      <div className="w-full max-w-2xl mx-auto my-12 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSfvBqMgKQ7wQLzr8QwsnDm_C2UP3bvilOdNBicxyi-IG6TmcQ/viewform?embedded=true" 
          width="100%" 
          height="1000" 
          frameBorder="0" 
          className="border-none">
        </iframe>
      </div>

      

      {/* Value Props */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl w-full mb-12">
        <div className="p-4">🚚 <p className="font-semibold">We handle bulky items, garage cleanouts, etc.</p></div>
        <div className="p-4">📍 <p className="font-semibold">Proudly serving Payson, Spanish Fork, Provo & surrounding areas.</p></div>
        <div className="p-4">🏷️ <p className="font-semibold">Affordable, transparent pricing. Just send a few photos via text and we'll get back to you.</p> <p className="font-semibold">Thank you!</p></div>
      </section>

      {/* Footer */}
      <footer className="border-t w-full max-w-4xl pt-6 text-center text-slate-500 text-sm">
        <div className="space-x-4 mb-2">
          {/* <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Contact</a> */}
        </div>
        <p>© 2026 Cornerstone Junk Removal. Utah County.</p>
      </footer>
    </main>
  );
}