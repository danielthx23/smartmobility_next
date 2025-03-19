import Image from 'next/image';
import Link from "next/link";
import { FaMap, FaMapMarkerAlt, FaRoute, FaSubway, FaUtensils } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const MobileNavBar = () => {
    return(
        <aside aria-label="Menu Mobile" className="z-10 grid grid-cols-7 justify-center w-full py-1 bg-[#3E5179] fixed bottom-0 md:hidden">
        
        {/* Home */}
        <Link href="/" className="text-white decoration-none flex flex-col justify-center items-center text-center  border-x-1 py-1 font-lilita">
          <FaHouse className="text-black" size={42}/>
          <p className="text-sm md:text-lg">Home</p>
        </Link>

        {/* ChatMetrô */}
        <Link href="/chat_metro" className="text-white decoration-none flex flex-col justify-center items-center text-center py-1 border-x-1 font-lilita">
          <Image 
            className="w-12 h-auto" 
            src="/icones_logos/chat_metro.png"
            alt="Logo do chatbot"
            width={300}
            height={300}
          />
          <p className="text-sm md:text-lg">ChatMetrô</p>
        </Link>

        {/* Destino */}
        <Link href="/direcoes" className="text-white decoration-none flex flex-col justify-center items-center text-center py-4 border-x-1 font-lilita">
          <FaRoute className="text-black" size={42} />
          <p className="text-sm md:text-lg">Destino</p>
        </Link>

        {/* Localização */}
        <Link href="/localizacao" className="text-white decoration-none flex flex-col justify-center items-center text-center py-4 border-x-1 font-lilita">
          <FaMapMarkerAlt className="text-black" size={42} />
          <p className="text-sm md:text-lg">Localização</p>
        </Link>

        {/* Metrô */}
        <Link href="/mapa_metro" className="text-white decoration-none flex flex-col justify-center items-center text-center py-4 border-x-1 font-lilita">
          <FaSubway className="text-black" size={42} />
          <p className="text-sm md:text-lg">Metrô</p>
        </Link>

        {/* Área Tour */}
        <Link href="/area_tour" className="text-white decoration-none flex flex-col justify-center items-center text-center py-4 border-x-1 font-lilita">
          <FaMap className="text-black" size={42}/>
          <p className="text-sm md:text-lg">Área tour</p>
        </Link>

        {/* Food Services */}
        <Link href="/food_services" className="text-white decoration-none flex flex-col justify-center items-center text-center py-4 border-x-1 font-lilita">
          <FaUtensils className="text-black" size={42}/>
          <p className="text-sm md:text-lg">Food services</p>
        </Link>
</aside> 
    )
}

export default MobileNavBar;