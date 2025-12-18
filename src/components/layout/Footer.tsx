import { useState } from 'react';

export function Footer() {
  const [zoom, setZoom] = useState(13);

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.6690795214654!2d-46.318598225386445!3d-22.851729535904298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f${zoom}.1!3m3!1m2!1s0x94ceac370e7a4827%3A0x8a064ca727726978!2sR.%20Pres.%20Kenedy%2C%20355%20-%20Extrema%2C%20MG%2C%2037640-000!5e0!3m2!1spt-BR!2sbr!4v1766069212024!5m2!1spt-BR!2sbr`;

  return (
    <section className="py-20 bg-blue-300">
      <div className="max-w-6xl mx-auto px-4 flex md:justify-between items-center gap-20">

        {/* Onde estamos + Mapa */}
        <div className="grid md:grid-cols-2 gap-10 items-center flex-1">
          {/* Endereço */}
          <div className="m-0">
            <h2 className="text-3xl text-gray-50 font-bold mb-4">Onde estamos📍🐕</h2>

            <p className="text-gray-600 mb-2">
               R. Pres. Kenedy, 355 – Centro
            </p>

            <p className="text-gray-600 mb-2">
              Extrema – MG
            </p>

            <p className="text-gray-600 mb-4">
              CEP: 37640-000
            </p>

            {/* Link extra (boa prática) */}
            <a
              href="https://www.google.com/maps?q=R.+Pres.+Kenedy,+355+Extrema+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ver no Google Maps
            </a>
          </div>

          {/* Mapa */}
          <div className="w-full h-80 rounded-xl overflow-hidden shadow-md relative">
            <iframe src={mapSrc} width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="absolute top-2 right-2 flex flex-col gap-1">
              <button onClick={() => setZoom(prev => Math.min(prev + 1, 20))} className="bg-white shadow-md rounded p-1 hover:bg-gray-100 transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <button onClick={() => setZoom(prev => Math.max(prev - 1, 10))} className="bg-white shadow-md rounded p-1 hover:bg-gray-100 transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col items-center md:items-start gap-4 w-1/4">
          <h3 className="text-3xl text-gray-50 font-bold mb-4">Siga-nos 🥰🐈</h3>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-blue-600 transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-blue-600 transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-blue-600 transition">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
      <div>
        <p className="text-center text-gray-600 mt-12"> Zoonose de Extrema – Projeto da Prefeitura Municipal de Extrema/MG
        </p>

        <div>
         <h2 className="text-center text-gray-600 mt-4"> © 2024 Todos os direitos reservados</h2>
        </div>
      </div>
    </section>
  );
}
