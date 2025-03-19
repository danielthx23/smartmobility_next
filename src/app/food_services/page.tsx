"use client"

import { useState } from "react";
import LugarCard from "@/components/lugarCard/lugarCard";
import LugarItem from "@/components/lugarItem/lugarItem";

const restaurantItems: LugarItem[] = [
  {
    title: "MÉQUI 1000",
    description: "Conheça o MÉQUI 1000, uma experiência inovadora do McDonald's na cidade.",
    imageSrc: "/images/mequi_1000.png",
    imageAlt: "MÉQUI 1000",
  },
  {
    title: "BURGER KING",
    description: "Venha experimentar o sabor inconfundível do Burger King!",
    imageSrc: "/images/burger_king.png",
    imageAlt: "BURGER KING",
  },
  {
    title: "BELLA PAULISTA",
    description: "A Bella Paulista oferece um cardápio diversificado em um ambiente acolhedor.",
    imageSrc: "/images/bella_paulista.png",
    imageAlt: "BELLA PAULISTA",
  },
  {
    title: "PATIO SABOR PAULISTA",
    description: "Prove a culinária diversificada do Pátio Sabor Paulista.",
    imageSrc: "/images/patio_sabor_paulista.png",
    imageAlt: "PATIO SABOR PAULISTA",
  }
];

const FoodServices = () => {
  const [selectedItem, setSelectedItem] = useState<LugarItem | null>(null);

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
          <h2 className="text-md lg:text-xl text-black font-bold">Que tal fazer uma parada</h2>
          <h2 className="text-sm lg:text-lg text-center font-bold text-black">E provar as melhores comidas dos melhores restaurantes da região?</h2>
          <h1 className="mb-4 text-md lg:text-xl text-black font-bold">Clique para ver melhor</h1>
          <section className="flex flex-col text-sm lg:grid lg:grid-cols-4 gap-4 lg:gap-8 lg:text-center lg:w-full mb-1">
            {restaurantItems.map((item, index) => (
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

export default FoodServices;
