export function Services() {
  return (
    <section className="py-20 bg-purple-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para o controle e prevenção de zoonose,
            garantindo a saúde de animais e humanos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Serviço 1 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Consultoria em Zoonose
            </h3>
            <p className="text-gray-600">
              Assessoria especializada para identificação, prevenção e controle de doenças zoonóticas
              em comunidades e estabelecimentos.
            </p>
          </div>

          {/* Serviço 2 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Vacinação e Profilaxia
            </h3>
            <p className="text-gray-600">
              Programas de vacinação para animais e orientações sobre profilaxia para prevenir
              a transmissão de zoonose.
            </p>
          </div>

          {/* Serviço 3 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Diagnóstico Laboratorial
            </h3>
            <p className="text-gray-600">
              Análises laboratoriais avançadas para detecção precoce de agentes zoonóticos
              em animais e ambientes.
            </p>
          </div>

          {/* Serviço 4 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Educação e Capacitação
            </h3>
            <p className="text-gray-600">
              Programas educacionais e treinamentos para profissionais da saúde,
              veterinários e comunidade sobre zoonose.
            </p>
          </div>

          {/* Serviço 5 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Vigilância Epidemiológica
            </h3>
            <p className="text-gray-600">
              Monitoramento contínuo e vigilância de zoonose para detecção precoce
              e resposta rápida a surtos.
            </p>
          </div>

          {/* Serviço 6 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Bem-estar Animal
            </h3>
            <p className="text-gray-600">
              Promoção do bem-estar animal através de práticas éticas e sustentáveis,
              contribuindo para a prevenção de zoonose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
