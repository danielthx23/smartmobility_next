import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <main className="p-4 max-w-[40rem] mx-auto my-16">
      <section className="mb-6">
        <p className="text-lg mb-2">
          <strong>Nomes:</strong> Lucas Aurelio de Brito Chicote | Lucas Gomes de Araujo Lopes | Alexis Ronaldo Quirijota Rondo
        </p>
        <p className="text-lg mb-2">
          <strong>RM:</strong> RM Lucas Chicote: 559366 | RM Lucas Lopes: 559607 | RM Alexis Rondo: 560384
        </p>
        <p className="text-lg mb-2">
          <strong>Turma:</strong> 1TDSPA
        </p>
        <p className="text-lg mb-4">
          <strong>Links:</strong> <a href="https://github.com/ChallengeSprintCCR" className="text-blue-500 hover:underline">https://github.com/ChallengeSprintCCR</a>
        </p>
        <p className="text-lg mb-2">
          <strong>Usuário para o GitHub:</strong> xxxxxxxxx
        </p>
        <p className="text-lg mb-6">
          <strong>Senha:</strong> xxxxxxxxx
        </p>
      </section>

      {/* Grid para os autores */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <figure className="text-center">
          <Image src="/author_images/alexis.jpeg" alt="Foto de Alexis" width={500} height={400} className="object-cover w-full h-[200px] mx-auto" />
          <figcaption className="bg-blue-600 text-white p-2 mt-2 rounded-b-md">Alexis Rondo</figcaption>
        </figure>
        <figure className="text-center">
          <Image src="/author_images/lucas2.jpeg" alt="Foto de Lucas Chicote" width={500} height={400} className="object-cover w-full h-[200px] mx-auto" />
          <figcaption className="bg-blue-600 text-white p-2 mt-2 rounded-b-md">Lucas Chicote</figcaption>
        </figure>
        <figure className="text-center">
          <Image src="/author_images/lucas1.jpeg" alt="Foto de Lucas Gomes" width={500} height={400} className="object-cover w-full h-[200px] mx-auto" />
          <figcaption className="bg-blue-600 text-white p-2 mt-2 rounded-b-md">Lucas Gomes</figcaption>
        </figure>
      </section>

      {/* LinkedIn Links */}
      <section>
        <p className="text-lg mb-2">
          <strong>Linkedin Alexis:</strong> <a href="https://www.linkedin.com/in/alexis-rondo-0866a3332/" className="text-blue-500 hover:underline">Alexis Rondo</a>
        </p>
        <p className="text-lg mb-2">
          <strong>Linkedin Lucas Chicote:</strong> <a href="https://www.linkedin.com/in/lucas-aurelio-de-brito-chicote-a5a169324" className="text-blue-500 hover:underline">Lucas Chicote</a>
        </p>
        <p className="text-lg mb-2">
          <strong>Linkedin Lucas Gomes:</strong> <a href="https://www.linkedin.com/in/lucas-gomes-36a529332/" className="text-blue-500 hover:underline">Lucas Gomes</a>
        </p>
      </section>
    </main>
  );
};

export default About;
