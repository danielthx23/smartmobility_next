"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import LinhaMetroItem from "./_components/linhaMetroItem";

const metroLines = [
  { href: "/linhas/azul", color: "bg-blue-600", number: "1", name: "Azul" },
  { href: "/linhas/verde", color: "bg-green-600", number: "2", name: "Verde" },
  { href: "/linhas/vermelha", color: "bg-red-600", number: "3", name: "Vermelha" },
  { href: "/linhas/amarela", color: "bg-yellow-500", number: "4", name: "Amarela" },
  { href: "/linhas/lilas", color: "bg-purple-700", number: "5", name: "Lilás" },
  { href: "/linhas/rubi", color: "bg-rose-700", number: "7", name: "Rubi" },
  { href: "/linhas/turquesa", color: "bg-teal-500", number: "10", name: "Turquesa" },
  { href: "/linhas/coral", color: "bg-orange-600", number: "11", name: "Coral" },
  { href: "/linhas/safira", color: "bg-indigo-600", number: "12", name: "Safira" },
  { href: "/linhas/jade", color: "bg-emerald-600", number: "13", name: "Jade" },
  { href: "/linhas/prata", color: "bg-gray-400", number: "15", name: "Prata" },
];

const MapaMetro = () => {
  const [linhaAtual, setLinhaAtual] = useState<string>();
  const [toggleMapa, setToggleMapa] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>(""); 
  
  // Função para alterar a linha atual
  const handleLinhaSelect = (linha: string) => {
    setLinhaAtual(linha);
  };
  
  // Função para alternar o mapa
  const handleToggleMapa = () => {
    setToggleMapa(!toggleMapa);
  };

  // Função para atualizar o estado da busca
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Função para filtrar as linhas com base no nome ou número
  const filteredMetroLines = metroLines.filter((linha) => 
    linha.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    linha.number.includes(searchQuery)
  );

  return (
    <div className="flex bg-[#E2DEDC] p-8 mt-4 flex-col lg:flex-row md:items-center gap-8">
      {/* Menu lateral */}
      <div className="bg-white lg:h-[850px] m-1 w-full lg:w-auto">
        <aside className="w-full lg:w-[600px]">
          <div className="flex items-end px-10 h-20 py-1 w-full bg-neutral-600 text-white sm:text-md">
            <Link href="/direcoes" className="text-white w-full decoration-none text-xl font-bold">
              <h3 className="w-full">Direções</h3>
            </Link>
            <button onClick={handleToggleMapa} className="text-white w-full decoration-none text-xl font-bold">
              <h3 className="w-full">Linhas</h3>
            </button>
          </div>
          
          {/* Campo de busca */}
          <form action="">
            <label className="flex items-center gap-1 p-10">
              <input
                type="text"
                id="startLocation"
                placeholder="Pesquise uma linha desejada"
                className="w-full py-1 border-b-1 border-black text-sm md:text-lg"
                value={searchQuery}
                onChange={handleSearchChange} // Atualiza o valor de busca
                required
              />
              <button type="submit" className="flex items-center ml-[-3rem] gap-1">
                <FaMagnifyingGlass className="text-black text-lg md:text-xl lg:text-2xl" />
              </button>
            </label>
          </form>

          {/* Lista de Linhas do Metrô */}
          <div className="flex flex-col gap-1 w-full">
            <h2 className="w-full bg-[#E2DEDC] px-4 text-lg py-2 hidden lg:block font-bold text-black">Metrô de São Paulo</h2>
            <ul className="grid grid-cols-3 gap-x-10 text-[8px] md:text-sm lg:text-lg lg:flex lg:flex-col lg:gap-2 list-none p-10">
              {filteredMetroLines.map((linha) => (
                <LinhaMetroItem
                  key={linha.number}
                  color={linha.color}
                  number={linha.number}
                  nome={linha.name}
                  handleLinhaSelect={() => handleLinhaSelect(linha.name.toLowerCase())} // Altera a linha ao clicar
                />
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Imagem do Mapa */}
      <div className="m-1 bg-gray-input w-full flex justify-center">
        {/* Imagem dinâmica com base na linha selecionada */}
      {toggleMapa ? (
        // Exibe o iframe do Google Maps se toggleMapa for falso
        <iframe
          id="mapIframe"
          width="100%"
          height="700"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/view?key=AIzaSyC5QsQ9OvxX1V-V0sKoGMmBCDgBbJ1FO44&center=-23.55052,-46.633308&zoom=12"
        />
      ) :
      (
        <>
          {/* Para telas grandes */}
          <Image
            className="w-auto h-auto max-h-[600px] hidden lg:block"
            src={linhaAtual ? `/metro_linhas/linha_${linhaAtual}.png` : '/images/mapa_metro.png'} 
            alt={`Mapa do metrô de São Paulo - Linha ${linhaAtual}`}
            width={800}
            height={600}
            priority
          />

          {/* Para telas pequenas */}
          <Image
            className="w-full h-auto lg:hidden"
            src={linhaAtual ? `/metro_linhas_verticais/linha_${linhaAtual}.png` : '/images/mapa_metro.png'} 
            alt={`Mapa do metrô de São Paulo - Linha ${linhaAtual}`}
            width={800}
            height={600}
            priority
          />
        </>
      )
    }
      </div>
    </div>
  );
};

export default MapaMetro;
