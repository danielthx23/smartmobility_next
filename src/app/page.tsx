import Link from "next/link";
import Image from "next/image";
import { FaLocationDot, FaMagnifyingGlass } from "react-icons/fa6";
import { FaRoute } from "react-icons/fa";

const MainPage = () => {
  return (
    <>
    <div className="bg-white w-full flex justify-center">
        <div className="container flex justify-center py-4 bg-transparent md:bg-[#5BC7CA]">
            <h1 className="md:text-white font-oleo text-2xl text-black text-md md:text-3xl">Bem Vindo ao Smart Mobility</h1>
        </div>
    </div>
    <section className="p-0 md:p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-4 bg-[#E2DEDC] px-12 py-12 rounded-2xl">
        <h1 className="lg:hidden font-bold text-black text-center w-full flex justify-center items-center py-8 text-2xl md:text-md">
          Aqui você pode aproveitar:
        </h1>

        <div className="lg:hidden md:grid md:grid-cols-4 gap-4 flex flex-col">
          <div className="flex md:block">
            <figure>
              <Image className="w-full" src="/images/card1.png" alt="Imagem card 1" width={200} height={150} />
            </figure>
            <h1 className="bg-[#5BC7CA] text-white px-4 py-2 text-center flex items-center font-lilita rounded-b-md text-sm md:text-lg w-full md:w-auto h-full md:h-24">
              Melhor gestão para sua viagem
            </h1>
          </div>  

          <div className="flex flex-row-reverse md:block">
            <figure>
              <Image className="w-full" src="/images/card2.png" alt="Imagem card 2" width={200} height={150} />
            </figure>
            <h1 className="bg-[#5BC7CA] text-white px-4 py-2 text-center flex items-center font-lilita rounded-b-md text-sm md:text-lg w-full md:w-auto h-full md:h-24">
              Uma fácil interação da interface
            </h1>
          </div>  

          <div className="flex md:block">
            <figure>
              <Image className="w-full" src="/images/card3.png" alt="Imagem card 3" width={200} height={150} />
            </figure>
            <h1 className="bg-[#5BC7CA] text-white px-4 py-2 text-center flex items-center font-lilita rounded-b-md text-sm md:text-lg w-full md:w-auto h-full md:h-24">
              Facilidade para se localizar nas linhas do metrô
            </h1>
          </div>  

          <div className="flex flex-row-reverse md:block">
            <figure>
              <Image className="w-full" src="/images/card4.png" alt="Imagem card 4" width={200} height={150} />
            </figure>
            <h1 className="bg-[#5BC7CA] text-white px-4 py-2 text-center flex items-center font-lilita rounded-b-md text-sm md:text-lg w-full md:w-auto h-full md:h-24">
              E ótimos pontos turísticos para visitar
            </h1>
          </div>  
        </div>

        <Link href="/direcoes" className="icon-container bg-[#5BC7CA] hidden lg:flex justify-center items-center flex-col gap-12 py-12 px-4 rounded-md text-center font-lilita">
          <FaRoute className="text-black" size={96}/>
          <p className="text-3xl text-black">Rotas e Destinos</p>
        </Link>

        <Link href="/localizacao" className="icon-container bg-[#5BC7CA] hidden lg:flex justify-center items-center flex-col gap-12 py-12 px-4 rounded-md text-center font-lilita">
          <FaLocationDot className="text-black" size={96}/>
          <p className="text-3xl text-black">Minha localização</p>
        </Link>

        <Link href="/mapa_metro" className="icon-container bg-[#5BC7CA] hidden lg:flex justify-center items-center flex-col gap-12 py-12 px-4 rounded-md text-center font-lilita">
          <Image className="w-24 h-auto" src="/icones_logos/logo_metro.png" alt="Logo do metro" width={96} height={96} />
          <p className="text-3xl text-black">Mapa das estações</p>
        </Link>

        <Link href="/chat_metro" className="icon-container bg-[#5BC7CA] hidden lg:flex justify-center items-center flex-col gap-12 py-12 px-4 rounded-md text-center font-lilita">
          <Image className="w-24 h-auto" src="/icones_logos/chat_metro.png" alt="Icone chat metro" width={96} height={96} />
          <p className="text-3xl text-black">ChatMêtro</p>
        </Link>

        <Link href="/escolha" className="icon-container bg-[#5BC7CA] hidden lg:flex justify-center items-center flex-col gap-12 py-12 px-4 rounded-md text-center font-lilita">
          <FaMagnifyingGlass className="text-black" size={96}/>
          <p className="text-3xl text-black">Clique para ver o que tem perto de vocês</p>
        </Link>

        <Link href="/" className="icon-container bg-[#5BC7CA] hidden lg:flex justify-center items-center flex-col gap-12 py-12 px-4 rounded-md text-center font-lilita">
          <Image className="w-24 h-auto" src="/icones_logos/qr_code.png" alt="Escanei o QRcode para acessar o SmartMobility em seu dispositivo" width={96} height={96} />
          <p className="text-3xl text-black">Escanei o QRcode para acessar o SmartMobility em seu dispositivo</p>
        </Link>
      </div>
    </section>
    </>
  );
};

export default MainPage;
