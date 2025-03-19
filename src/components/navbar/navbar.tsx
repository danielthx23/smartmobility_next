"use client"

import { useState, ChangeEvent, FormEvent } from "react";
import Image from 'next/image';
import { FaBars, FaLanguage, FaMap, FaMapMarkerAlt, FaRoute, FaSearch, FaSubway, FaUtensils } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';
import MobileNavBar from '../mobileNavbar/mobileNavbar';
import NavLink from '../navLink/navLink';
import Link from 'next/link';

interface Page {
  href: string;
  label: string;
}

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>(''); // Estado para armazenar o valor da busca
  const [filteredPages, setFilteredPages] = useState<Page[]>([]); // Estado para armazenar as páginas filtradas
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false); // Estado para controlar a visibilidade da barra de pesquisa

  // Lista de páginas para sugerir
  const pages: Page[] = [
    { href: "/", label: "Home" },
    { href: "/area_tour", label: "Área Tour" },
    { href: "/chat_metro", label: "ChatMetrô" },
    { href: "/direcoes", label: "Destino" },
    { href: "/food_services", label: "Food services" },
    { href: "/localizacao", label: "Localização" },
    { href: "/mapa_metro", label: "Metrô" },
  ];

  // Função para atualizar o estado da busca e filtrar as páginas
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filtra as páginas com base no valor da busca
    const filtered = pages.filter(page =>
      page.label.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPages(filtered);
  };

  // Função para tratar o submit do formulário
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // Função para alternar a visibilidade do campo de busca
  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <>
      <header className="w-full sticky top-0 bg-[#3E5179] py-3">
        <nav className="w-full flex flex-col md:flex-row items-center justify-between font-lilita px-12 xl:px-24">
          {/* Barra de pesquisa - desktop */}
          <form onSubmit={handleSubmit} className="relative hidden md:flex flex-row justify-between items-center rounded-full bg-[#E2DEDC] w-[400px] xl:w-[500px] px-8 pr-4">
            <input
              type="text"
              placeholder="Buscar..."
              className="placeholder-neutral-400 font-lilita w-full py-2 text-md xl:text-2xl focus:outline-none focus:ring-0"
              value={searchQuery} // Bind o valor do input com o estado searchQuery
              onChange={handleSearchChange} // Chama a função para filtrar as páginas
            />
            <button type="submit" className="flex items-center space-x-3 lg:space-x-4 mr-4" aria-label="Buscar">
              <span className="border-l border-1 border-black h-10"></span>
              <FaSearch className="text-black" size={24} />
            </button>

            {/* Lista de sugestões que aparece abaixo da barra de busca */}
            {searchQuery && filteredPages.length > 0 && (
              <div className="absolute left-0 w-full max-h-[300px] overflow-auto bg-white border border-gray-300 rounded-lg shadow-lg z-10"
                style={{
                  marginTop: `${(filteredPages.length * 3) + 3.5}rem`,
                }}>
                <ul className="text-black">
                  {filteredPages.map((page, index) => (
                    <li
                      key={page.href}
                      className={`h-12 px-4 py-2 hover:bg-gray-200`}
                    >
                      <Link href={page.href} className="decoration-none z-20">
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </form>

          {/* Barra de navegação móvel */}
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
              {/* Ícone de busca móvel */}
              <button onClick={toggleSearchVisibility}>
                <FaSearch className="text-xl text-white" />
              </button>
            </li>
          </ul>

          {/* Campo de busca móvel */}
          {isSearchVisible && (
            <form onSubmit={handleSubmit} className="relative md:hidden flex flex-row justify-between items-center rounded-full bg-[#E2DEDC] w-full px-8 pr-4 my-4">
              <input
                type="text"
                placeholder="Buscar..."
                className="placeholder-neutral-400 font-lilita w-full py-2 text-md focus:outline-none focus:ring-0"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit" className="flex items-center space-x-3 lg:space-x-4 mr-4" aria-label="Buscar">
                <span className="border-l border-1 border-black h-10"></span>
                <FaSearch className="text-black" size={24} />
              </button>

              {/* Lista de sugestões */}
              {searchQuery && filteredPages.length > 0 && (
                <div className="absolute left-0 w-full max-h-[300px] overflow-auto bg-white border border-gray-300 rounded-lg shadow-lg z-10"
                  style={{
                    marginTop: `${(filteredPages.length * 3) + 3.5}rem`,
                  }}>
                  <ul className="text-black">
                    {filteredPages.map((page, index) => (
                      <li
                        key={page.href}
                        className={`h-12 px-4 py-2 hover:bg-gray-200`}
                      >
                        <Link href={page.href} className="decoration-none z-20">
                          {page.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </form>
          )}

          {/* Links de navegação */}
          <ul className="text-white flex items-center gap-12 w-full md:w-auto">
            <li className="hidden md:flex items-center">
              <button className="flex items-center justify-center">
                <FaLanguage size={52} className="text-white" />
              </button>
            </li>
            <span className="w-full md:w-auto hidden md:block border-l border-1 border-white h-12"></span>
            <li className="flex justify-center w-full h-full md:block md:w-auto">
              <Link href="/faq" className="decoration-none text-white text-lg xl:text-2xl">
                FAQ
              </Link>
            </li>
            <span className="hidden md:block border-l border-1 border-white h-12"></span>
            <li className="flex justify-center w-full h-full md:block md:w-auto">
              <Link href="/ajuda" className="decoration-none text-white text-lg xl:text-2xl">
                Ajuda
              </Link>
            </li>
            <span className="hidden md:block border-l border-1 border-white h-12"></span>
            <li className="flex justify-center w-full h-full md:block md:w-auto">
              <Link href="/about" className="decoration-none text-white text-lg xl:text-2xl">
                Quem somos
              </Link>
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
              <NavLink href="/" icon={<FaHouse className="text-black" size={42} />} label="Home" />

              {/* ChatMetrô */}
              <NavLink href="/chat_metro" icon={<Image className="w-12 h-auto" src="/icones_logos/chat_metro.png" alt="Logo do chatbot" width={300} height={300} />} label="ChatMetrô" />

              {/* Destino */}
              <NavLink href="/direcoes" icon={<FaRoute className="text-black" size={42} />} label="Destino" />

              {/* Localização */}
              <NavLink href="/localizacao" icon={<FaMapMarkerAlt className="text-black" size={42} />} label="Localização" />

              {/* Metrô */}
              <NavLink href="/mapa_metro" icon={<FaSubway className="text-black" size={42} />} label="Metrô" />

              {/* Área Tour */}
              <NavLink href="/area_tour" icon={<FaMap className="text-black" size={42} />} label="Área tour" />

              {/* Food Services */}
              <NavLink href="/food_services" icon={<FaUtensils className="text-black" size={42} />} label="Food services" />
            </div>
          </div>
        </header>
      </main>
      <MobileNavBar />
    </>
  );
};

export default NavBar;
