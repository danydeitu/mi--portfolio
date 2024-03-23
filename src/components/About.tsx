import React from "react";

const Acerca: React.FC = () => {
  return (
    <section id="acerca" className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:order-2 md:text-right md:pr-8">
          <img src="./img/mifoto.jpg" alt="Descripción de la imagen" className="w-full md:w-auto" />
        </div>
        <div className="md:w-1/2 md:order-1">
          <h2 className="text-3xl font-bold mb-4">Acerca de mí</h2>
          <p className="text-lg">
          Soy Desarrollador web Full Stack y Estudiante de Telecomunicaciones 

Realizo Trabajos Freelance de Creacion de Paginas Web

Apasionado por la Informatica, me gusta trabajar en equipo y aprender nuevas tecnologias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Acerca;
/*import React from "react";

const Acerca: React.FC = () => {
  return (
    <section id="acerca" className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:order-2 md:text-right mb-8 md:pr-8">
          <img src="./img/mifoto.jpg" alt="Descripción de la imagen" className="w-full md:w-auto" />
        </div>
        <div className="md:w-1/2 md:order-2">
          <h2 className="text-3xl font-bold mb-4">Acerca de mí</h2>
          <p className="text-lg">
          Soy Desarrollador web Full Stack y Estudiante de Telecomunicaciones 

Realizo Trabajos Freelance de Creacion de Paginas Web

Apasionado por la Informatica, me gusta trabajar en equipo y aprender nuevas tecnologias
          </p>
        </div>
      </div>
    </section>
  );
};

export default Acerca;
*/