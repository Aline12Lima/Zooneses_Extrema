import logo from '../../assets/logo.png';
export function Header() {
  return (
    <header className="fixed w-full top-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className=""> 
          <img src={logo} alt="Logo Zoonose Extrema" className="h-16"/>
        </div>
        
        {/* Menu (Links simulados) */}
        <nav className="hidden md:flex space-x-12 text-gray-500">
          <a href="#" className=" px-6 py-2 text-lg text-white rounded
         transition-colors duration-300  hover:bg-blue-50 ">Início</a>
          <a href="#sobre" className="px-8 py-2 text-lg text-white rounded
         transition-colors duration-300 hover:bg-blue-50">Quem Somos</a>
          <a href="#contato" className="px-4 py-2 text-lg text-white rounded
         transition-colors duration-300 hover:bg-blue-50">Contato</a>
        </nav>
      
      </div>
    </header>
  );
}