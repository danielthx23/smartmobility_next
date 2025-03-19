import React from 'react';
import Link from 'next/link';
import { FaMapMarkedAlt, FaUtensils } from 'react-icons/fa'; 

const Escolha = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-x-12 gap-y-8 bg-[#E2DEDC] m-4 p-10 rounded-md font-lilita text-black">
      <Link href="/area_tour" className="icon-container w-full md:w-auto bg-[#5BC7CA] flex py-16 justify-center items-center flex-col gap-8 px-4 rounded-md text-center">
        <h1 className="text-3xl">ÁREA TOUR</h1>
        <FaMapMarkedAlt size={96} className="md:text-3xl" />
        <p className="text-xl w-full lg:w-96 lg:text-2xl">Clique e descubra lugares incríveis perto de você</p>
      </Link>
      
      <Link href="/food_services" className="icon-container w-full md:w-auto bg-[#5BC7CA] flex py-16 justify-center items-center flex-col gap-8 px-4 rounded-md text-center">
        <h1 className="text-3xl">FOOD SERVICE</h1>
        <FaUtensils size={96} className="md:text-xl" />
        <p className="text-xl w-full lg:w-96 lg:text-2xl">Clique e descubra os melhores restaurantes, lanchonetes e padarias em sua região</p>
      </Link>
    </section>
  );
};

export default Escolha;
