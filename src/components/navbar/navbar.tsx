import Image from 'next/image';
import { FaBars, FaLanguage, FaMap, FaMapMarkerAlt, FaRoute, FaSearch, FaSubway, FaUtensils } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';

const NavBar = () => {
  return (
    <>
    <header className="w-full sticky top-0 bg-[#3E5179] py-3">
      <nav className="w-full flex flex-col md:flex-row items-center justify-between font-lilita px-12 xl:px-24">
        <form action="" className="hidden md:flex flex-row justify-between items-center rounded-full bg-[#E2DEDC] w-[400px] xl:w-[500px] px-8 pr-4 ">
          <input
            type="text"
            placeholder="Buscar..."
            className="placeholder-neutral-400 font-lilita w-full py-2  text-md xl:text-2xl focus:outline-none focus:ring-0"
          />
          <button type="submit" className="flex items-center space-x-3 lg:space-x-4 mr-4" aria-label="Buscar">
            <span className="border-l border-1 border-black h-10"></span>
            <FaSearch className="text-black" size={24}/>
          </button>
        </form>

        <ul className="flex md:hidden items-center justify-between w-full">
          <li>
            <FaBars className="text-white text-2xl" />
          </li>
          <li></li>
          <li>
          <Image
            className="w-24"
            src="/icones_logos/logo.png"
            alt="Logo smart mobility"
            width={96} 
            height={96} 
            />
          </li>
          <li className="flex items-center gap-12">
            <FaLanguage className="text-3xl text-white" />
            <FaSearch className="text-xl text-white" />
          </li>
        </ul>

        <ul className="text-white flex items-center gap-12 w-full md:w-auto">
          <li className="hidden md:flex items-center">
            <button className="flex items-center justify-center">
              <FaLanguage size={52} className="text-white" />
            </button>
          </li>
          <span className="w-full md:w-auto hidden md:block border-l border-1 border-white h-12"></span>
          <li className="flex justify-center w-full h-full md:block md:w-auto">
            <a className="decoration-none text-white text-lg xl:text-2xl" href="./pages/faq.html">FAQ</a>
          </li>
          <span className="hidden md:block border-l border-1 border-white h-12"></span>
          <li className="flex justify-center w-full h-full md:block md:w-auto">
            <a className="decoration-none text-white text-lg xl:text-2xl" href="./pages/ajuda.html">Ajuda</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
  <header className="w-full mb-1">
    <div className="bg-[#E2DEDC] w-full hidden md:flex justify-center">
      <figure className="container bg-white flex justify-center">
        <Image 
          src="/icones_logos/logo.png" 
          alt="Logo Smart Mobility" 
          width={350}
          height={350}
        />
      </figure>
    </div>
    <div className="bg-white w-full hidden md:flex justify-center">
      <div className="bg-[#5BC7CA] container grid grid-cols-7 justify-center">
        
        {/* Home */}
        <a href="../index.html" className="text-white decoration-none flex flex-col justify-center items-center text-center  border-x-1 py-1 font-lilita">
          <FaHouse className="text-black" size={42}/>
          <p className="text-sm md:text-lg">Home</p>
        </a>

        {/* ChatMetrô */}
        <a href="../pages/chat_metro.html" className="text-white decoration-none flex flex-col justify-center items-center text-center py-1 border-x-1 font-lilita">
          <Image 
            className="w-12 h-auto" 
            src="/icones_logos/chat_metro.png"
            alt="Logo do chatbot"
            width={300}
            height={300}
          />
          <p className="text-sm md:text-lg">ChatMetrô</p>
        </a>

        {/* Destino */}
        <a href="../pages/direcoes.html" className="text-white decoration-none flex flex-col justify-center items-center text-center py-4 border-x-1 font-lilita">
          <FaRoute className="text-black" size={42} />
          <p className="text-sm md:text-lg">Destino</p>
        </a>

        {/* Localização */}
        <a href="../pages/localizacao.html" className="text-white decoration-none flex flex-col justify-center items-center text-center py-4 border-x-1 font-lilita">
          <FaMapMarkerAlt className="text-black" size={42} />
          <p className="text-sm md:text-lg">Localização</p>
        </a>

        {/* Metrô */}
        <a href="../pages/mapa_metro.html" className="text-white decoration-none flex flex-col justify-center items-center text-center py-4 border-x-1 font-lilita">
          <FaSubway className="text-black" size={42} />
          <p className="text-sm md:text-lg">Metrô</p>
        </a>

        {/* Área Tour */}
        <a href="../pages/area_tour.html" className="text-white decoration-none flex flex-col justify-center items-center text-center py-4 border-x-1 font-lilita">
          <FaMap className="text-black" size={42}/>
          <p className="text-sm md:text-lg">Área tour</p>
        </a>

        {/* Food Services */}
        <a href="../pages/food_services.html" className="text-white decoration-none flex flex-col justify-center items-center text-center py-4 border-x-1 font-lilita">
          <FaUtensils className="text-black" size={42}/>
          <p className="text-sm md:text-lg">Food services</p>
        </a>

      </div>
    </div>
  </header>
</main>
    <aside aria-label="Menu Mobile" className=" grid grid-cols-7 justify-center w-full py-1 bg-[#3E5179] fixed bottom-0 md:hidden">
         {/* Home */}
         <a href="../index.html" className="text-white decoration-none flex flex-col justify-center items-center text-center  border-x-1 py-1 font-lilita">
          <FaHouse className="text-black" size={42}/>
          <p className="text-sm md:text-lg">Home</p>
        </a>

        {/* ChatMetrô */}
        <a href="../pages/chat_metro.html" className="text-white decoration-none flex flex-col justify-center items-center text-center py-1 border-x-1 font-lilita">
          <Image 
            className="w-12 h-auto" 
            src="/icones_logos/chat_metro.png"
            alt="Logo do chatbot"
            width={300}
            height={300}
          />
          <p className="text-sm md:text-lg">ChatMetrô</p>
        </a>

        {/* Destino */}
        <a href="../pages/direcoes.html" className="text-white decoration-none flex flex-col justify-center items-center text-center py-4 border-x-1 font-lilita">
          <FaRoute className="text-black" size={42} />
          <p className="text-sm md:text-lg">Destino</p>
        </a>

        {/* Localização */}
        <a href="../pages/localizacao.html" className="text-white decoration-none flex flex-col justify-center items-center text-center py-4 border-x-1 font-lilita">
          <FaMapMarkerAlt className="text-black" size={42} />
          <p className="text-sm md:text-lg">Localização</p>
        </a>

        {/* Metrô */}
        <a href="../pages/mapa_metro.html" className="text-white decoration-none flex flex-col justify-center items-center text-center py-4 border-x-1 font-lilita">
          <FaSubway className="text-black" size={42} />
          <p className="text-sm md:text-lg">Metrô</p>
        </a>

        {/* Área Tour */}
        <a href="../pages/area_tour.html" className="text-white decoration-none flex flex-col justify-center items-center text-center py-4 border-x-1 font-lilita">
          <FaMap className="text-black" size={42}/>
          <p className="text-sm md:text-lg">Área tour</p>
        </a>

        {/* Food Services */}
        <a href="../pages/food_services.html" className="text-white decoration-none flex flex-col justify-center items-center text-center py-4 border-x-1 font-lilita">
          <FaUtensils className="text-black" size={42}/>
          <p className="text-sm md:text-lg">Food services</p>
        </a>
</aside> 
    </>
  );
};

export default NavBar;
