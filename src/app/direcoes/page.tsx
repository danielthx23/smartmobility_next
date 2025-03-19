"use client";
import { calculateRoute } from "@/utils/maps";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaCircle } from "react-icons/fa";

const Page = () => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");

  // Função para calcular a rota (no futuro, implementaremos a API)
  const handleRouteCalculation = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();  // Previne o comportamento padrão do formulário

    // Exibe um alerta com os locais de origem e destino
    alert(`Início: ${startLocation}\nDestino: ${endLocation}\nA API do Maps será implementada para calcular a rota.`);
  };

  return (
    <main className="mt-8">
      <div className="flex bg-gray-200 flex-col items-center lg:flex-row p-4 lg:p-8 gap-8 h-[900px]">
        {/* Sidebar */}
        <div className="bg-white h-full">
          <aside className="w-full lg:w-[30rem]">
            {/* Links de navegação */}
            <div className="flex items-end h-20 px-8 w-full bg-neutral-500 text-white">
              <Link href="/direcoes" className="w-full text-white no-underline">
                <h3 className="w-full text-md md:text-lg font-bold">Direções</h3>
              </Link>
              <Link href="/mapa_metro" className="w-full text-white no-underline">
                <h3 className="w-full text-md md:text-lg font-bold">Linhas</h3>
              </Link>
            </div>

            {/* Form de rota */}
            <form onSubmit={handleRouteCalculation} id="routeForm" className="flex gap-6 p-8 h-full">
              <div className="flex flex-col gap-10 items-center justify-center">
                <FaCircle size={20} />
                <span className="absolute border-l border-1 border-dotted h-10"></span>
                <FaCircle className="text-red-600" size={20} />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Escolha seu local de partida"
                    className="text-sm md:text-lg w-full py-2 outline-none border-black border-b"
                    value={startLocation}
                    onChange={(e) => setStartLocation(e.target.value)}
                    required
                  />
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Escolha o seu destino"
                    className="text-sm md:text-lg w-full py-2 outline-none border-black border-b"
                    value={endLocation}
                    onChange={(e) => setEndLocation(e.target.value)}
                    required
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-4 p-2 bg-[#5BC7CA] text-white rounded-lg"
              >
                Calcular Rota
              </button>
            </form>
            <p className="text-center px-8 mb-4 text-md md:text-lg">
              Adicione seu local de origem e seu destino para obter uma lista das melhores rotas.
            </p>
          </aside>
        </div>

        {/* Map Section */}
        <div className="m-1 bg-gray-200 w-full h-full">
          <iframe
            id="mapIframe"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/view?key=AIzaSyC5QsQ9OvxX1V-V0sKoGMmBCDgBbJ1FO44&center=-23.55052,-46.633308&zoom=12"
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
