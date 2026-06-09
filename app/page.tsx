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
          Call (801) 477-6120
        </a>
      </nav>

      {/* Hero Section */}
      <header className="text-center my-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Fast, Reliable Junk Removal<br/>in Payson & Utah County
        </h1>
        <p className="text-lg text-slate-600">Residential & Commercial services with an easy online process.</p>
      </header>

      {/* Lead Form Card */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-lg mb-12">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Your Name *</label>
              <input type="text" className="w-full p-3 border rounded-lg" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number *</label>
              <input type="tel" className="w-full p-3 border rounded-lg" required />
            </div>
          </div>
          
          <input type="text" placeholder="Payson or Zip Code" className="w-full p-3 border rounded-lg" />
          <textarea placeholder="Description of Junk (Optional)" className="w-full p-3 border rounded-lg h-24" />
          
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center cursor-pointer hover:bg-slate-50">
            <p className="text-slate-500">📷 Add a photo of your junk (Optional)</p>
          </div>
          
          <a 
            href="YOUR_GOOGLE_FORM_LINK_HERE" 
            target="_blank" 
            className="w-full bg-[#1e3a58] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#152a42] text-center block">
            Get a Quote
          </a>
        </form>
      </div>

      {/* Value Props */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl w-full mb-12">
        <div className="p-4">🚚 <p className="font-semibold">We handle bulky items, garage cleanouts, etc.</p></div>
        <div className="p-4">📍 <p className="font-semibold">Proudly serving Payson, Spanish Fork, Provo & surrounding areas.</p></div>
        <div className="p-4">🏷️ <p className="font-semibold">Affordable, transparent pricing.</p></div>
      </section>

      {/* Footer */}
      <footer className="border-t w-full max-w-4xl pt-6 text-center text-slate-500 text-sm">
        <div className="space-x-4 mb-2">
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <p>© 2026 Cornerstone Junk Removal. Utah County.</p>
      </footer>
    </main>
  );
}