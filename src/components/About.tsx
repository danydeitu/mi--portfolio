import React from "react";

const Acerca: React.FC = () => {
  return (
    <section id="acerca" className="py-1 bg-white dark:bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center bg-white dark:bg-gray-900">
        <div className="md:w-1/2 md:order-2 md:text-right md:pr-8">
          <img src="./img/mifoto.jpg" alt="Descripción de la imagen" className="w-full md:w-auto" />
        </div>
        <div className="md:w-1/2 md:order-1dark:bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
          <h2 className="text-3xl font-bold mb-4 text-center">Acerca de mí</h2>
          <p className="text-lg">
          Soy Desarrollador web Full Stack y Estudiante de Telecomunicaciones ,

Realizo Trabajos de diseño y desarrollo de Paginas Web , servicios web ,de escritorio , apps , con tecnologias como React, Typescript, Node, Javascript, Python ,Tailwind.

Apasionado por la Informática , me gusta trabajar en equipo y aprender nuevas tecnologias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Acerca;
