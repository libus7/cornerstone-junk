import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Cornerstone Junk Removal LLC",
                "image": "https://www.cornerstonejunkremovalut.com/logo.png",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Payson",
                  "addressRegion": "UT",
                  "addressCountry": "US"
                },
                "url": "https://www.cornerstonejunkremovalut.com",
                "telephone": "8014776120",
                "priceRange": "$$",
                "areaServed": {
                  "@type": "AdministrativeArea",
                  "name": "Utah County"
                }
              }),
            }}
          />
      </head>
      <body className="bg-slate-50 text-slate-900">
        <header>
        </header>
        
        <main>{children}</main>
        
        <footer className="mb-20">...</footer> {/* Added mb-20 to push footer up so it isn't covered by the bar */}

        {/* This div sits inside the body, pinned to the bottom of the screen */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 flex gap-2 z-50">
          <a href="tel:YOUR_PHONE_NUMBER" className="flex-1 bg-slate-800 text-white py-3 rounded-lg font-bold text-center">
            Call Now
          </a>
          <a href="#estimate" className="flex-1 bg-brand-secondary text-white py-3 rounded-lg font-bold text-center">
            Get Estimate
          </a>
        </div>
      </body>
    </html>
  )
}