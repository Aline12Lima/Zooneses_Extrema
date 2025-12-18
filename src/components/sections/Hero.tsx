import img0 from '../../assets/hero.jpeg';
import img1 from '../../assets/vacina.jpg';
import img2 from '../../assets/adção.png';
import img3 from '../../assets/catra.jpeg';
import imgcat from '../../assets/cat.png';
import imgdog from '../../assets/Dog.boll.png';
import imgg1 from '../../assets/1.jpg';
import imgg2 from '../../assets/2.jpg';
import imgg3 from '../../assets/3.jpeg';  
import imgg4 from '../../assets/4.avif';  
import bacgroundImg from  '../../assets/background.png'




export function Hero() {
  return (
    <>
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(100%); opacity: 1; }
          100% { transform: translateY(-600px); opacity: 0; }
        }
      `}</style>
      <section className="pt-32 pb-0 min-h-screen bg-purple-300 relative overflow-hidden">
        <div className=" mx-auto pl-4 pr-0 flex flex-col md:flex-row items-center gap-0 h-full">

          {/* Texto */}
          <div className="md:w-1/2 text-center md:text-left flex items-center h-full">
            <div>
              <h1 className=" text-lg text-2xl md:text-2xl font-bold text-gray-50 mb-6">
                Seu <strong className='text-gray-100'>novo </strong> melhor <strong className='text-pink-700  font-normal'>Amigo </strong> está em Extrema.
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Conheça os animais disponíveis para adoção  e mude uma vida hoje
              </p>
              <div className="flex justify-center">
               
                <button className=" bg-yellow-200 text-gray px-8 py-3 rounded-lg hover:bg-blue-700 animate-pulse">
                  Quero Adotar
                </button>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="md:w-1/2 h-full">
            <img src={img0} alt="Menina com cachorro" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>

        {/* Efeito de Emojis Flutuantes */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute bottom-0 left-10 text-4xl text-white" style={{animation: 'floatUp 6s linear infinite', animationDelay: '0s'}}> 💖🫶</div>
          <div className="absolute bottom-0 left-1/4 text-4xl text-white" style={{animation: 'floatUp 6s linear infinite', animationDelay: '1s'}}>🐶</div>
          <div className="absolute bottom-0 right-10 text-4xl text-white" style={{animation: 'floatUp 6s linear infinite', animationDelay: '2s'}}>🐱🥰</div>
          <div className="absolute bottom-0 right-1/4 text-4xl text-white" style={{animation: 'floatUp 6s linear infinite', animationDelay: '3s'}}>🎁</div>
          <div className="absolute bottom-0 left-1/2 text-4xl text-white" style={{animation: 'floatUp 6s linear infinite', animationDelay: '4s'}}>😊 🐕</div>
        </div>
      </section>

      <section id="sobre" className="relative overflow-hidden bg-gray-100 py-10 w-full mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Nossa Comunidade </h2>
        <h3 className=" font-normal mb-12" >Zoonose Extrema: Proteção para eles, segurança para você. Confira nossas atividades <strong> GRATUITAS</strong>.</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Castração",
              description: "Oferecemos castração gratuita para cães e gatos, ajudando a controlar a população animal e prevenir zoonose.",
              image: img3
            },
            {
              title: "Vacinação",
              description: "Vacinação contra raiva e outras doenças zoonóticas, garantindo a saúde dos animais e da comunidade.",
              image: img1
            },
            {
              title: "Adoção",
              description: "Programas educacionais para promover a conscientização sobre zoonose e cuidados com animais.",
              image: img2
            }
          ].map((service, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
              <img src={service.image} alt={service.title} className="w-full h-48 rounded-lg mb-4 object-cover" />
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-500 mb-4">{service.description}</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                Saiba Mais
              </button>
            </div>
          ))}
        </div>

        {/* Onda no final */}
        <svg className="absolute bottom-0 left-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-purple-300"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-purple-300"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-purple-300"></path>
        </svg>
      </section>

      {/* Nova seção: Experiências e Adaptações */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Texto no meio com imagens nas laterais */}
          <div className="grid md:grid-cols-3 items-center gap-2 mb-16">
            <img src={imgcat} alt="Desenho de gato brincando" className="w-cover h-32 object-cover " />
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Experiências e Adaptações</h1>
              <p className="text-lg text-gray-600">
                Histórias reais de animais que encontraram seu lar e de famílias que se completaram.
              </p>
            </div>
            <img src={imgdog} alt="Imagem de cachorro brincando" className="w-cover h-32 object-cover rounded-lg" />
          </div>

          {/* 4 mini cards de pets adotados */}
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 w-full items-center">
            {[
              { name: "Rex", owner: "João Silva", year: 2023, img: imgg1 },
              { name: "Mia", owner: "Maria Oliveira", year: 2022, img: imgg2 },
              { name: "Bolt", owner: "Carlos Santos", year: 2024, img: imgg3 },
              { name: "Luna", owner: "Ana Costa", year: 2023, img: imgg4 }
            ].map((pet, index) => (
              <div key={index} className="bg-pink-300 p-4 rounded-lg shadow-sm hover:shadow-md transition items-center">
                <img src={pet.img} alt={pet.name} className="w-cover h-32 object-cover rounded mb-2 items-center" />
                <h3 className="font-bold text-lg">{pet.name}</h3>
                <p className="text-gray-600 text-sm">{pet.owner}</p>
                <p className="text-gray-500 text-xs">Adotado em {pet.year}</p>
              </div>
            ))}
          </div>

         
          {/* Imagem grande com texto e botão */}
         <div
         className="relative h-96 rounded-lg overflow-hidden"
         style={{
           backgroundImage: `url(${bacgroundImg})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}
>       <div className="absolute inset-0 bg-black/20"></div>

         <div className="absolute inset-0 flex items-center justify-center">
           <div className="text-center text-white">
             <h2 className="text-6xl font-normal mb-6">
               Não perca tempo, adote o seu!
             </h2>
            
           </div>
         </div>
       </div>

          
        </div>
      </section>
    </>
  );
}