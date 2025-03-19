"use client"

import { useState } from "react";
import LugarCard from "@/components/lugarCard/lugarCard";
import LugarItem from "@/components/lugarItem/lugarItem";

const tourItems: LugarItem[] = [
  {
    title: "MASP",
    description: "Museu de Arte de São Paulo Assis Chateaubriand é um centro cultural e museu de arte brasileira.",
    imageSrc: "/images/masp.png",
    imageAlt: "MASP",
  },
  {
    title: "SHOPPING CIDADE SÃO PAULO",
    description: "Localizado na Avenida Paulista, no coração da cidade, o Shopping Cidade São Paulo é o local perfeito para você que procura uma boa experiência de lazer e compras.",
    imageSrc: "/images/shopping_cidade.png",
    imageAlt: "Shopping Cidade",
  },
  {
    title: "SHOPPING PATIO PAULISTA",
    description: "Shopping de luxo com lojas de grifes, uma praça de alimentação e um cinema.",
    imageSrc: "/images/shopping_paulista.png",
    imageAlt: "Shopping Paulista",
  },
  {
    title: "PARQUE TENENTE SIQUEIRA CAMPOS",
    description: "O Parque Tenente Siqueira Campos, mais conhecido como Parque Trianon ou Parque do Trianon. Ótimo para fazer caminhadas, se exercitar ao ar livre e lazer.",
    imageSrc: "/images/parque_tenente.png",
    imageAlt: "Parque Tenente",
  }
];

const TourArea = () => {
  const [selectedItem, setSelectedItem] = useState<LugarItem | null>();

  const handleSelectItem = (item: LugarItem | null) => {
    setSelectedItem(item);
  };

  return (
    <div className="bg-[#5BC7CA] mt-4 w-full flex flex-col items-center justify-center p-8 gap-4">
      {selectedItem ? (
        <> 
        <button onClick={() => handleSelectItem(null)} className="text-2xl text-black font-bold py-4">Voltar</button>       
        <LugarCard
          title={selectedItem.title}
          description={selectedItem.description}
          imageSrc={selectedItem.imageSrc}
        />
        </>
      ) : (
        <>
        <h2 className="text-md lg:text-xl text-black font-bold">Olha que legal!</h2>
      <h2 className="text-sm lg:text-lg text-center text-black font-bold">Perto da sua região, tem vários lugares para você conhecer</h2>
      <h1 className="mb-4 text-md lg:text-xl text-black font-bold">Clique para ver melhor</h1>
        <section className="flex flex-col text-sm lg:grid lg:grid-cols-4 gap-4 lg:gap-8 lg:text-center lg:w-full mb-1">
          {tourItems.map((item, index) => (
            <div key={index} onClick={() => handleSelectItem(item)}>
              <LugarItem
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                index={index + 1}
              />
            </div>
          ))}
        </section>
        </>
      )}
    </div>
  );
};

export default TourArea;
